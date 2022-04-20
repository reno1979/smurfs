import form from '../styles/form.js';
import formResponsive from '../styles/form-responsive.js';
import { registerStyle } from '../toolbox.js';
import {TAGNAME, TAGNAME_SUPERCLASS} from './main.config.js';

/**
 * @public
 * @const {Array<CSSStyleSheet>|Array<string>}
 */
export default registerStyle(TAGNAME, [formResponsive,form].join(''), TAGNAME_SUPERCLASS);
