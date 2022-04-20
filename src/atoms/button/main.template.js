import STYLESHEET from './main.style.js';
import { button } from '../../styles.js';
import { TAGNAME } from './main.config.js';
import { generateTemplate } from '../../toolbox.js';
/**
 * 
 * @type {DocumentFragment}
 * @public
 */
export default generateTemplate({
    tagname: TAGNAME, 
    classes: [button.CLASS_BUTTON], 
    content: '<slot></slot>', 
    style: STYLESHEET
});