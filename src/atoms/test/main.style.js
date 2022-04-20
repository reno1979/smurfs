/**
 * @module main.style.js
 * @fileoverview The style module for the custom element: 'smurf-test'
 */

import * as styles from '../../styles.js';
import * as toolbox from '../../toolbox.js';
import * as config from './main.config.js';

/**
 * @public
 * @const 
 * @type {Array<CSSStyleSheet>|Array<string>}
 */
export default toolbox.registerStyle(config.TAGNAME, [], config.TAGNAME_SUPERCLASS);