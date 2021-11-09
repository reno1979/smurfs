import { TAGNAME } from './_config.js';
import { generateTemplate, registerTemplateContent } from '../../toolbox.js';

/**
 * 
 * @returns {string}
 */
export const CONTENT = generateTemplate({
    tagname: TAGNAME,
    classes: 'pure-button',
    content: /* html */ `<slot></slot>`
    }
);

export const DOCUMENT_FRAGMENT = registerTemplateContent(TAGNAME, CONTENT);