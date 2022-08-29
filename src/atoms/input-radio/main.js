

import { setBooleanAttribute, defineCustomElement} from '../../toolbox.js';
import TEMPLATE from './main.template.js';
import STYLESHEET from './main.style.js';
import { TAGNAME, SUPERCLASS } from './main.config.js';

/* PRIVATE */

/**
 * @const {import('../../typedefs.js').SMURF_BASE_SETTINGS & import('../../typedefs.js').SMURF_INPUT_SETTINGS}
 * @private
 */
const _DEFAULT_SETTINGS = {
    template: TEMPLATE, 
    anchor: undefined,
    basename: TAGNAME,
    adoptedStyleSheets: STYLESHEET
};

/* PUBLIC */

export { TAGNAME } from './main.config.js';
 /**
  * The class for the Smurfic button
  * @type {HTMLElement}
  * @public
  * 
  * @tagname smurf-radio
  */
export class MyClass extends SUPERCLASS {
    
    /**
     * 
     * @param {import('../../typedefs.js').SMURF_BASE_SETTINGS & import('../../typedefs.js').SMURF_INPUT_SETTINGS} props 
     */
    constructor(props = {}) {
        super({..._DEFAULT_SETTINGS, ...props});
    }

    /* GET & SET */

    /**
     * @type {boolean}
     * @attr
     */
    get checked(){
        return this.hasAttribute('checked');
    }

    /**
     * @param {boolean} value
     * @attr
     */
    set checked(value){
        setBooleanAttribute(this, 'checked', value);
    }

 };

defineCustomElement(TAGNAME, MyClass);