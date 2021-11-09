import form from '../styles/form.js';
import formResponsive from '../styles/form-responsive.js';

/**
 * 
 * @const {string}
 * @public
 */
export const CONTENT = /* css */`
    ${form}
    ${formResponsive}
`;

/**
 * @const {CSSStyleSheet}
 * @public
 */
 export const SHEET = new CSSStyleSheet();
 SHEET.replaceSync(CONTENT);