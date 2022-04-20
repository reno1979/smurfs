import STYLESHEET from './main.style.js';
import { TAGNAME } from './main.config.js';
import { generateTemplate } from '../../toolbox.js';

/**
 * @public
 * @type {DocumentFragment}
 */
export default generateTemplate({tagname: TAGNAME, content: '<slot></slot>', style: STYLESHEET});