import { registerTemplateContent , setBooleanAttribute, defineCustomElement, getTemplateContent} from '../../toolbox.js';
import * as base from '../../input-oldstyle/main.js';
import template from './template.js';
import * as config from './_config.js';

/* PRIVATE */

let _COUNTER = 1;
/* PUBLIC */

/**
 * @const {string}
 * @public
 */
export const TAGNAME = config.TAGNAME;

/**
 * @const {string}
 * @public
 */
export const TEMPLATE_CONTENT = template;

registerTemplateContent(TAGNAME, TEMPLATE_CONTENT);

 /**
  * The class for the Smurfic button
  */
export class MyClass extends base.MyClass {
    
    /**
     * 
     * @param {InputConstructorParam} param 
     */
    constructor({documentFragment = getTemplateContent(TAGNAME), anchor = 'button', settings = {}} = {}) {
        super({documentFragment, anchor, settings});
    }

    connectedCallback(){
        _COUNTER++;

        if(1000 === _COUNTER){
            performance.mark('Old End');
            performance.measure(
                'Old',
                'Old Start',
                'Old End'
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