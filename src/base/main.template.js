import STYLESHEET from './main.style.js';
import { TAGNAME } from './main.config.js';
import { generateTemplate } from '../toolbox.js';
/**
 * 
 * @type {DocumentFragment}
 * @public
 */
export default generateTemplate({ tagname: TAGNAME, style: STYLESHEET });