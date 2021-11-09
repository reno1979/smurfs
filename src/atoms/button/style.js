import buttonCore from '../../styles/button-core.js';
import button from '../../styles/button.js';
/**
 * 
 * @const {string}
 * @public
 */
export const CONTENT = /* css */`
    ${buttonCore}
    ${button}
`;

/**
 * @const {CSSStyleSheet}
 * @public
 */
export const SHEET = new CSSStyleSheet();
SHEET.replaceSync(CONTENT);