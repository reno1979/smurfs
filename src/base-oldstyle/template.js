import { TAGNAME } from './_config.js';
import { generateTemplate } from '../toolbox.js';
import baseStyle from './style.js';

export default /* html */`
    <style>${baseStyle}</style>
    ${generateTemplate({
        tagname: TAGNAME,
        content: /* html */ ``
        })}
    `;