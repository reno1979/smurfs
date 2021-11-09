import { TAGNAME } from './_config.js';
import { generateTemplate } from '../toolbox.js';

/**
 * @param {Object} [attributes={}]
 * @returns {string}
 */
export default generateTemplate({
    tagname: TAGNAME,
    content: /* html */ ``
    });