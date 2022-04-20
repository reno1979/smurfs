/**
 * @module
 * @fileoverview
 */

import { defineCustomElement} from '../../toolbox.js';
import TEMPLATE from './main.template.js';
import STYLESHEET from './main.style.js';
import * as config from './main.config.js';

/* PRIVATE */
/**
 * @const 
 * @type {SMURF_BASE_SETTINGS & SMURF_INPUT_SETTINGS}
 * @private
 */
 const _DEFAULT_PROPS = {
    template: TEMPLATE, 
    anchor: undefined,
    adoptedStyleSheets: STYLESHEET
};

/* PUBLIC */

export { VARIANTS, SIGNALS, TAGNAME } from './main.config.js';

 /**
  * The class for the Smurfic button
  * @type {HTMLElement}
  * @public
  * 
  * @tagname smurf-button
  * @slot - This is a default/unnamed slot
  * 
  */
export class MyClass extends config.SUPERCLASS {
    
    /**
     * 
     * @param {SMURF_BASE_SETTINGS & SMURF_INPUT_SETTINGS} props
     */
    constructor(props = {}) {
        super({..._DEFAULT_PROPS, ...props});
    }

    /* GET & SET */

    /**
     * @type {string}
     * @attr
     */
    get variant(){
        return this.getAttribute('variant');
    }
    /**
     * @param {string} value
     * @attr
     */
    set variant(value){
        this.setAttribute('variant', Object.values(config.VARIANTS).includes(value) ? value : null);
    }
    /**
     * @type {string}
     * @attr
     */
    get signal(){
        return this.getAttribute('signal');
    }

    /**
     * @param {string} value
     * @attr
     */
    set signal(value){
        this.setAttribute('signal', Object.values(config.SIGNALS).includes(value) ? value : null);
    }

};

defineCustomElement(config.TAGNAME, MyClass);