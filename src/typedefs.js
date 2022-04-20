/**
 * The available settings for the Smurfic main class 
 * @typedef {Object} SMURF_BASE_SETTINGS
 * @property {!DocumentFragment} template The template used to give content to the shadowRoot
 * @property {Array<CSSStyleSheet>|Array<string>} adoptedStyleSheets The stylesheets 
 */

/**
 * The available settings for the Smurfic input class. It extends the Smurfic main class settings.
 * @typedef {Object} SMURF_INPUT_SETTINGS
 * @property {string} [anchor='input']
 */

/**
 * Form-associated validityStateFlags 
 * @typedef {Object} SMURF_VALIDITY_STATE_FLAGS
 * @property {boolean} [valueMissing=false]
 * @property {boolean} [typeMismatch=false]
 * @property {boolean} [patternMismatch=false]
 * @property {boolean} [tooLong=false]
 * @property {boolean} [tooShort=false]
 * @property {boolean} [rangeUnderflow=false]
 * @property {boolean} [rangeOverflow=false]
 * @property {boolean} [stepMismatch=false]
 * @property {boolean} [badInput=false]
 * @property {boolean} [customError=false]
 */

export default {};
