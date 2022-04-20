import STYLESHEET from './main.style.js';
import { TAGNAME } from './main.config.js';
import { generateTemplate } from '../toolbox.js';
/**
 * 
 * @type {DocumentFragment}
 */
export default generateTemplate({tagname: TAGNAME, classes: ['pure-form'], content: '', style: STYLESHEET});