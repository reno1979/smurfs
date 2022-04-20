

// @ts-ignore
import TEMPLATE from './main.template.js';
export { TAGNAME } from './main.config.js';
import { SUPERCLASS } from './main.config.js';
/* PUBLIC */

/**
 * @const 
 * @type {import('../typedefs.js').SMURF_VALIDITY_STATE_FLAGS}
 * @public
 */
export const VALIDITY_STATE_FLAGS = {
   valueMissing: false,
   typeMismatch: false,
   patternMismatch: false,
   tooLong: false,
   tooShort: false,
   rangeUnderflow: false,
   rangeOverflow: false,
   stepMismatch: false,
   badInput: false,
   customError: false
};

/**
 * The main class for the Smurfic input elements
 */
export class MyClass extends SUPERCLASS {
   /**
    * @type {ElementInternals}
    */
   #internals;
   /**
    * @type {string}
    */
   #anchor;

   /**
    * 
    * @param {import('../typedefs.js').SMURF_BASE_SETTINGS & import('../typedefs.js').SMURF_INPUT_SETTINGS} props 
    */
   #init(props = {}){
      const { anchor } = props;

      this.#internals = this.attachInternals(); 
      this.#anchor = anchor;
     
      if(!this.hasAttribute('tabindex')){
         this.setAttribute('tabindex', '0'); 
      }
   }
   /**
    * @returns {Array<string>}
    */
   static get observedAttributes() {
      return super.observedAttributes.concat(['label', 'placeholder', 'readonly']);
   }
   /**
    * @returns {boolean}
    */
   static get formAssociated() {
      return true;
   }
   /**
    * 
    * @param {import('../typedefs.js').SMURF_BASE_SETTINGS & import('../typedefs.js').SMURF_BASE_SETTINGS} props
    */
   constructor(props = {}) {
      super(props);
      this.#init(props);     
   }

   /**
    * 
    * @param {string} name 
    * @param {string} oldValue 
    * @param {string} newValue 
    */
   attributeChangedCallback(name, oldValue, newValue) {
      super.attributeChangedCallback(name, oldValue, newValue);
     
      switch(name){
         case 'label':
            // draw a label
            break;
         default: 
            this._getElement(this.#anchor).then(_el => _el.setAttribute(name, newValue));
            break;
      }
   }

   /* Private */

   /* GET & SET */
   // Form controls usually expose a "value" property
   get value() { return this._base_value; }
   set value(value) { this._base_value = value; }

   // The following properties and methods aren't strictly required,
   // but browser-level form controls provide them. Providing them helps
   // ensure consistency with browser-provided controls.
   // @ts-ignore
   get form() { return this.#internals.form; }
   get name() { return this.getAttribute('name'); }
   get type() { return this.localName; }
   // @ts-ignore
   get validity() {return this.#internals.validity; }
   // @ts-ignore
   get validationMessage() {return this.#internals.validationMessage; }
   // @ts-ignore
   get willValidate() {return this.#internals.willValidate; }

   // @ts-ignore
   checkValidity() {return this.#internals.checkValidity(); }
   // @ts-ignore
   reportValidity() {return this.#internals.reportValidity(); }
      
};
