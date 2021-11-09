import * as base from '../base-oldstyle/main.js';
import * as config from './_config.js';
import * as template from './template.js';

/* PUBLIC */


/**
 * @const {ValidityStateFlags}
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
 * The main class for the Smurfic input elements
 */
 export class MyClass extends base.MyClass {
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
    * @param {InputConstructorParam} param
    */
   constructor({documentFragment, anchor = 'input', settings = {}} = {}) {
      super({documentFragment, settings});

      this._internals = this.attachInternals(); 
      this._input_anchor = anchor;
     
      if(!this.hasAttribute('tabindex')){
         this.setAttribute('tabindex', 0); 
      }
   }

   attributeChangedCallback(name, oldValue, newValue) {
      super.attributeChangedCallback(name, oldValue, newValue);
     
      switch(name){
         case 'label':
            // draw a label
            break;
         default: 
            this._getElement(this._input_anchor).then(_el => _el.setAttribute(name, newValue));
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
   get form() { return this._internals.form; }
   get name() { return this.getAttribute('name'); }
   get type() { return this.localName; }
   get validity() {return this._internals.validity; }
   get validationMessage() {return this._internals.validationMessage; }
   get willValidate() {return this._internals.willValidate; }

   checkValidity() {return this._internals.checkValidity(); }
   reportValidity() {return this._internals.reportValidity(); }
      
 };

 
 /**
 * @typedef {Object} InputConstructorParam
 * @property {Object} [settings={}]
 * @property {!string} [anchor='input'] The anchor selector 
 * @property {Array<CSSStyleSheet>} [adoptedStyleSheets=[]]
 * @property {DocumentFragment} [documentFragment]
 */