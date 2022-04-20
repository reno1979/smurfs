import buttonCore from '../../styles/button-core.js';
import button from '../../styles/button.js';
import { registerStyle } from '../../toolbox.js';
import { TAGNAME, TAGNAME_SUPERCLASS } from './main.config.js';

/**
 * @public
 * @const 
 * @type {Array<CSSStyleSheet>|Array<string>}
 */
export default registerStyle(TAGNAME, `${buttonCore}${button}`, TAGNAME_SUPERCLASS);