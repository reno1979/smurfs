/**
 * @module main.template.js
 * @fileoverview The template module for the custom element: 'smurf-test'
 */

import * as toolbox from '../../toolbox.js';
import TEMPLATE from './main.template.js';
import STYLESHEET from './main.style.js';
import * as config from './main.config.js';

/* PRIVATE */

/**
 * @const 
 * @type {SMURF_BASE_SETTINGS} 
 * @private
 */
 const _DEFAULT_PROPS = {
    template: TEMPLATE, 
    anchor: undefined,
    adoptedStyleSheets: STYLESHEET
};

/* PUBLIC */

export { TAGNAME } from './main.config.js';

/**
  * The class for the Smurfic test
  * @type {HTMLElement}
  * @public
  * 
  * @tagname smurf-test
  *  
  */
export class MyClass extends config.SUPERCLASS {
    
    /**
     * 
     * @param {SMURF_BASE_SETTINGS}  props
     */
    constructor(props = {}) {
        super({..._DEFAULT_PROPS, ...props});
    }

    /**
    * @returns {Promise<void>}
    */
    async connectedCallback() {
        await super.connectedCallback();
    }
    /**
     * @returns {void} 
     */
    disconnectedCallback() {
        super.disconnectedCallback();
    }

    /* GET & SET */

};

toolbox.defineCustomElement(config.TAGNAME, MyClass);