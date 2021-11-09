import { TAGNAME } from './_config.js';
import { generateTemplate, registerTemplateContent } from '../toolbox.js';

/**
 * 
 * @const {string}
 * @public
 */
export const CONTENT = generateTemplate({
    tagname: TAGNAME,
    classes: '.pure-form',
    content: /* html */ ``
    }
);

export const DOCUMENT_FRAGMENT = registerTemplateContent(TAGNAME, CONTENT);
