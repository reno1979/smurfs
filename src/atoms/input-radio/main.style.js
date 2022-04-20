import { form, formResponsive, formVariables } from '../../styles.js';
import { registerStyle } from '../../toolbox.js';
import { TAGNAME, TAGNAME_SUPERCLASS } from './main.config.js';

/**
 * @public
 * @const {Array<CSSStyleSheet>|Array<string>}
 */
export default registerStyle(TAGNAME, [form, formResponsive, formVariables].join(''), TAGNAME_SUPERCLASS);