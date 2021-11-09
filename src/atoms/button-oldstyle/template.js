import { TAGNAME } from './_config.js';
import { generateTemplate, registerTemplateContent } from '../../toolbox.js';
import style from './style.js';
/**
 * 
 * @returns {string}
 */
export default /* html */`
        <style>${style}</style>
        ${generateTemplate({
            tagname: TAGNAME,
            classes: 'pure-button',
            content: /* html */ `<slot></slot>`
            }
        )}
`;