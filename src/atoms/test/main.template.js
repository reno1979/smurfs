/**
 * @module main.template.js
 * @fileoverview The template module for the custom element: 'smurf-test'
 */

import STYLESHEET from './main.style.js';
import * as styles from '../../styles.js';
import * as config from './main.config.js';
import * as toolbox from '../../toolbox.js';

/**
 * 
 * @type {DocumentFragment}
 * @public
 */
export default toolbox.generateTemplate({
    tagname: config.TAGNAME, 
    classes: [], 
    content: '', 
    style: STYLESHEET
});