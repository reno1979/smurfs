

/* PRIVATE */
/**
 * Cache for styles
 * @const {Map}
 * @private
 */
 const _MAP_STYLES = new Map();
/**
 * The constuctable stylesheets are supported
 * @const {boolean} 
 * @private
 */
const _SUPPORT_CONSTRUCTABLE_STYLESHEET = 'adoptedStyleSheets' in document;

/* PUBLIC */

/**
 * Registers the Smurfic custom element and prevents a registration collision
 * @param {!string} tagname
 * @param {Object} cls The Class for defining the custom element
 * @returns {Promise<CustomElementConstructor>}
 * @public
 */
export function defineCustomElement(tagname, cls, options = {}){
    if(customElements.get(tagname)){
        return;
    }
    customElements.define(tagname, cls);
    return customElements.whenDefined(tagname);
}
/**
 * 
 * @param {!string} tagname 
 * @returns {Array<CSSStyleSheet>|Array<string>}
 * @public
 */
export function getStyle(tagname){
    return tagname && _MAP_STYLES.has(tagname) ? _MAP_STYLES.get(tagname) : [];
}
/**
 * @param {!string} tagname 
 * @param {!string} style
 * @param {string} [tagnameExtending='']
 * @returns {Array<CSSStyleSheet>|Array<string>} 
 */
export function registerStyle(tagname, style, tagnameExtending = ''){
    /**
     * @type {string|CSSStyleSheet}
     */
    let _style;
    const _sStyle = removeComments(style).replace(/[\r\n\x0B\x0C\u0085\u2028\u2029]+/g, '').replace(/  /g, '');
    if(_SUPPORT_CONSTRUCTABLE_STYLESHEET){
        _style = new CSSStyleSheet();
        _style.replaceSync(_sStyle);
    } else {
        _style = _sStyle;
    }
    const _aStyles = getStyle(tagnameExtending.toLowerCase());
    _aStyles.push(_style);
    _MAP_STYLES.set(tagname, _aStyles);
    return _aStyles;
}
/**
 * When the constructable stylesheets are not supported, the styles are injected into the generated template.
 * @param {Object} props
 * @param {!string} props.tagname 
 * @param {!string} [props.content='']
 * @param {Array<string>|Array<CSSStyleSheet>} [props.style]
 * @param {string|Array<string>} [props.classes='']
 * @returns {DocumentFragment}
 */
export function generateTemplate(props = {tagname: undefined, content:'', style: undefined, classes: ''}){
    const {tagname, classes = '', content = '', style = []} = props;
    
    let _sStyle = '';
    if(!_SUPPORT_CONSTRUCTABLE_STYLESHEET && style.length){
        _sStyle = `<style>${style.reverse().join()}</style>`; // wtf if we don not reverse the last rules ar enot applied, ehh IE?
    }
    let _sClass = Array.isArray(classes) ? classes.join(' ').trim() : classes.trim();
    if(_sClass){
        _sClass = `class="${_sClass}"`;
    }

    const _elTemplate = document.createElement('template');
    _elTemplate.innerHTML = `${_sStyle}<div id="${tagname}" part="MainWrapper" ${_sClass}>${content}</div>`;
    return _elTemplate.content;
}

/**
 * Waits for an element satisfying selector to exist, then resolves promise with the element.
 * Useful for resolving race conditions.
 *
 * @param {!string} selector
 * @param {Element|ShadowRoot} [parent=document.body]
 * @returns {Promise<Element>}
 * @public
 */
 export function getElement(selector, parent = document.body) {
    return new Promise((resolve, reject) => {
        try{
            let _el = parent.querySelector(selector);
            if (_el) {
                resolve(_el);
                return;
            }
            new MutationObserver((mutationRecords, observer) => {
                _el = parent.querySelector(selector);
                if(_el){
                    resolve(_el);
                    observer.disconnect();
                }
            })
            .observe(parent, {
                childList: true,
                subtree: true
            });
        } catch(error){
            console.warn('[getElement] Something went wrong.', error.message)
            reject();
        }
    });
}

/**
 * Sets or removes value based on the value 
 * @param {!HTMLElement} target 
 * @param {!string} attribute 
 * @param {boolean} value Truthy or falsey value allowed
 * @public
 * @returns {void}
 */
export function setBooleanAttribute(target, attribute, value){
    if(value){
        target.setAttribute(attribute, '');
    } else {
        target.removeAttribute(attribute);
    }
}
/**
 * 
 * @param {!string} value 
 * @returns {string}
 * @public
 */
export function removeComments(value){
    //Takes a string of code, not an actual function.
    return value.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g,'').trim();//Strip comments
}
/**
 * 
 * @param {string} s valid HTML syntax, a single parent element.
 * @returns {HTMLElement|ChildNode}
 */
export function html(s){
    const _parser = new DOMParser();
    return _parser.parseFromString(s, 'text/html').body.childNodes[0];
}
/**
 * Very simple method for generating storybook HTML string from the props object. 
 * Lowercase keys are attributes, the others are properties.
 * @param {!string} tagname 
 * @param {Object} props 
 */
export function htmlFromStoryProps(tagname, props = {}){
    let _sHtml = `<${tagname}`;
    const _oProperties = {};
    const _aKeys = Object.keys(props);
    for(const _sKey of _aKeys){
        if(_sKey === _sKey.toLowerCase()){
            _sHtml += ` ${_sKey}="${props[_sKey]}"`;
        } else {
            _oProperties[_sKey] = props[_sKey];
        }
    }
    _sHtml += `></${tagname}>`;
    const _el = html(_sHtml);
    const _aPropertyKeys = Object.keys(_oProperties);
    if(_aPropertyKeys.length){
        for(const _sKey of _aPropertyKeys){
            _el[_sKey] = props[_sKey];
        }
    }

    return _el;
}
