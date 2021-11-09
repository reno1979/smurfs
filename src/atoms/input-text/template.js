import { TAGNAME } from './_config.js';
import { generateTemplate } from '../../toolbox.js';

/**
 * 
 * @returns {string}
 */
export default generateTemplate({
    tagname: TAGNAME,
    classes: 'pure-form',
    content: /* html */ `<input type="text">`
    });