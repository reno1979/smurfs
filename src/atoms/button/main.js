import { setBooleanAttribute, defineCustomElement, getTemplateContent} from '../../toolbox.js';
import * as base from '../../input/main.js';
import * as template from './template.js';
import * as style from './style.js';
import * as config from './_config.js';

/* PRIVATE */

let _COUNTER = 1;
/* PUBLIC */

/**
 * @public
 * @const {CSSStyleSheet}
 */
export const STYLESHEET = style.SHEET;
/**
 * @public
 * @const {string}
 */
export const STYLESHEET_CONTENT = style.CONTENT;

/**
 * @const {string}
 * @public
 */
export const TAGNAME = config.TAGNAME;

/**
 * @const {string}
 * @public
 */
export const TEMPLATE_CONTENT = template.CONTENT;


 /**
  * The class for the Smurfic button
  */
export class MyClass extends base.MyClass {
    
    /**
     * 
     * @param {InputConstructorParam} param 
     */
    constructor({documentFragment = getTemplateContent(TAGNAME), anchor = 'button', settings = {}, adoptedStyleSheets = []} = {}) {
        super({documentFragment, anchor, settings, adoptedStyleSheets: [...adoptedStyleSheets, STYLESHEET]});
    }

    connectedCallback(){
        _COUNTER++;

        if(1000 === _COUNTER){
            performance.mark('New End');
            performance.measure(
                'New',
                'New Start',
                'New End'
            );
            _COUNTER = 0;
        }
    }
    /* GET & SET */

    /**
     * @type {boolean}
     * @attr
     */
    get primary(){
        return this.hasAttribute('primary');
    }

    /**
     * @param {boolean} value
     * @attr
     */
    set primary(value){
        setBooleanAttribute(this, 'primary', value);
    }

 };

defineCustomElement(TAGNAME, MyClass);