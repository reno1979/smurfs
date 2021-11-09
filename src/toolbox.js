/* PRIVATE */

const _MAP_TEMPLATE_CONTENT = new Map();

/* PUBLIC */
/**
 * Registers the Smurfic custom element and prevents a registration collision
 * @param {!string} tagname
 * @param {Object} cls
 * @returns {Promise<CustomElementConstructor>}
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
 * @returns {DocumentFragment}
 */
export function getTemplateContent(tagname){
    const _sTagName = tagname.toLowerCase();
    if(_MAP_TEMPLATE_CONTENT.has(_sTagName)){
        return _MAP_TEMPLATE_CONTENT.get(_sTagName).cloneNode(true);
    }
}
/**
 * 
 * @param {!string} tagname 
 * @param {string} [html] 
 * @returns {DocumentFragment}
 */
export function registerTemplateContent(tagname, html){
    const _elTemplate = document.createElement('template');
    _elTemplate.innerHTML = html;
    //console.log('adding ', html)
    //return _elTemplate.content.cloneNode(true)
    const _templateContent = _elTemplate.content;
    _MAP_TEMPLATE_CONTENT.set(tagname.toLowerCase(), _templateContent);
    return _templateContent.cloneNode(true);
}

/**
 * 
 * @param {Objetc} param
 * @param {!string} param.tagname 
 * @param {!string} param.content
 * @param {string} [param.classes='']
 * @returns {string}
 */
export function generateTemplate({tagname, classes = '', content = ''}){
    return `<div id="${tagname}" ${classes ? 'class="' + classes + '"' : ''}>${content}</div>`;
} 

/**
 * Waits for an element satisfying selector to exist, then resolves promise with the element.
 * Useful for resolving race conditions.
 *
 * @param {string} selector
 * @param {HTMLElement} [parent=document.body]
 * @returns {Promise<HTMLElement>}
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
                    resolve(element);
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
 * @param {HTMLElement} target 
 * @param {string} attribute 
 * @param {boolean} value Truthy or falsey value allowed
 */
export function setBooleanAttribute(target, attribute, value){
    if(value){
        target.setAttribute(attribute, '');
    } else {
        target.removeAttribute(attribute);
    }
}