import { button } from '../../styles.js';
import { registerStyle } from '../../toolbox.js';
import { TAGNAME, TAGNAME_SUPERCLASS } from './main.config.js';

/**
 * @public
 * @const 
 * @type {Array<CSSStyleSheet>|Array<string>}
 */
export default registerStyle(TAGNAME, button.RULES, TAGNAME_SUPERCLASS);