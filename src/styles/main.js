

import button from './button.js';
import buttonCore from './button-core.js';
import form from './form.js';
import formResponsive from './form-responsive.js';
import formVariables from './form-variables.js';
import normalize from './normalize.js';
import variables from './variables.js';



// todo when global configs says to load the styles global, then adoptstylesheet to main document
// or offer a method oid But prevent that all styles are inluded in an import and threeshake won't work
/**
 * @const {CSSStyleSheet}
 * @private
 */
// const _SHEET = new CSSStyleSheet();
// _SHEET.replaceSync(`${style}`);
// document.adoptedStyleSheets = [_SHEET].concat(document.adoptedStyleSheets);


export default `
    ${button}
    ${buttonCore}
    ${form}
    ${formResponsive}
    ${formVariables}
    ${normalize}
    ${variables}
`;