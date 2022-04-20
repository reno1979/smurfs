

import '../typedefs.js';
import './main.template.js';
import { getElement, setBooleanAttribute } from '../toolbox.js';
import * as config from './main.config.js';

/**
 * @public 
 * @const {boolean}
 * @private
 */
const _SUPPORT_CONSTRUCTABLE_STYLESHEET = 'adoptedStyleSheets' in document;
/**
 * @public
 * @const {string}
 */
export const TAGNAME = config.TAGNAME;

/**
 * The main class for the Smurfic elements
 * @extends {HTMLElement}
 * @public
 */
export class MyClass extends HTMLElement {
  
  /**
   * 
   * @param {import('../typedefs.js').SMURF_BASE_SETTINGS} props 
   */
  #init(props = {}){
    const { template, adoptedStyleSheets } = props;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.cloneNode(true));

    if(_SUPPORT_CONSTRUCTABLE_STYLESHEET && adoptedStyleSheets){
      // @ts-ignore
      this.shadowRoot.adoptedStyleSheets = adoptedStyleSheets;
    }
  }

  /**
   * @static
   * @returns {Array<string>}
   */
  static get observedAttributes() {
    return ['disabled'];
  }
  
  /**
   * @param {SMURF_BASE_SETTINGS} props
   */
  constructor(props = {} ) {
    super();
    this.#init(props);
  }
    
  /**
   * @returns {Promise<void>}
   */
  async connectedCallback() { }

  disconnectedCallback() {}

  /**
   * 
   * @param {!string} name 
   * @param {!string|null} oldValue 
   * @param {!string|null} newValue 
   */
  attributeChangedCallback(name, oldValue, newValue) {}

  /* SHARED */

  /**
   * 
   * @param {!string} selector 
   * @param {Element|ShadowRoot} [parent=shadowRoot]
   * @returns {Promise<Element>}
   */
  _getElement(selector, parent = this.shadowRoot){
    return getElement(selector, parent);
  }

  /* GET & SET */
 
  /**
   * @type {boolean}
   * @attr
   */
  get disabled(){
    return this.hasAttribute('disabled');
  }

  /**
   * @param {boolean} value
   * @attr
   */
  set disabled(value){
      setBooleanAttribute(this, 'disabled', value);
  }
};
