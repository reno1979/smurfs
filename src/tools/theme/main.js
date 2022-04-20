/* DEPENDENCIES */
import { setBooleanAttribute, defineCustomElement} from '../../toolbox.js';
import TEMPLATE from './main.template.js';
import STYLESHEET from './main.style.js';
import { TAGNAME, SUPERCLASS } from './main.config.js';

/* PRIVATE */
/**
 * @const 
 * @type {InputConstructorParam}
 * @private
 */
 const _DEFAULT_SETTINGS = {
    template: TEMPLATE, 
    anchor: undefined,
    basename: TAGNAME,
    adoptedStyleSheets: STYLESHEET
};

/* PUBLIC */

 /**
  * The class for the Smurfic button
  * @type {HTMLElement}
  * @public
  */
export class MyClass extends SUPERCLASS {
    
    /**
     * 
     * @param {InputConstructorParam} settings 
     */
     constructor(settings = {}) {
        super({..._DEFAULT_SETTINGS, ...settings});
    }
    /**
     * 
     */
    connectedCallback(){}

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