import '../typedefs.js';
import * as config from './_config.js';
import baseStyle from './style.js';
import template from './template.js';
import { getElement } from '../toolbox.js';

/* PRIVATE */

/**
 * @const {CSSStyleSheet}
 * @private
 */
const _SHEET = new CSSStyleSheet();
_SHEET.replaceSync(baseStyle);

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
export const TEMPLATE = template;

/**
 * The main class for the Smurfic elements
 * @extends {HTMLElement}
 */
export class MyClass extends HTMLElement {
    
  /**
   * @returns {Array<string>}
   */
  static get observedAttributes() {
    return ['disabled'];
  }
  
  /**
   * @param {Object} param
   * @param {Array<CSSStyleSheet>} [param.adoptedStyleSheets=[]]
   * @param {Object} [param.settings={}]
   * @param {DocumentFragment} [param.documentFragment]
   */
  constructor({documentFragment, settings = {}, adoptedStyleSheets = []}) {
    super();

    // The shadow root contains our custom component's shadow DOM
    this.attachShadow({
      mode: 'open'
    })
    if(documentFragment){
      this.shadowRoot.appendChild(documentFragment);
    }
    this.shadowRoot.adoptedStyleSheets = [...adoptedStyleSheets, _SHEET];
  }
  /**
   * 
   * @param {Object} param
   */
  connectedCallback() { }

  disconnectedCallback() {}

  attributeChangedCallback(name, oldValue, newValue) {}

  /* PRIVATE */

  /* SHARED */

  /**
   * 
   * @param {!string} selector 
   * @param {HTMLElement} [parent=shadowRoot]
   * @returns {Promise<HTMLElement>}
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
