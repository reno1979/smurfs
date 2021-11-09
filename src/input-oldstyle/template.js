import { TAGNAME } from './_config.js';
import { generateTemplate } from '../toolbox.js';
import style from './style.js';

/**
 * 
 * @const {string}
 * @public
 */
export default `<style>${style}</style>${generateTemplate({
    tagname: TAGNAME,
    classes: '.pure-form',
    content: /* html */ ``
    }
)}`;