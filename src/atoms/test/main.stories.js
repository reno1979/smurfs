/**
 * @module main.stories.js
 * @fileoverview The stories module for the custom element: 'smurf-test'
 */

import * as toolbox from '../../toolbox.js';
import * as storyElement from './main.js';

/**
 * @private
 * @const {string} 
 */
const _TEMPLATE = (props) =>  toolbox.htmlFromStoryProps(storyElement.TAGNAME, props);

/**
 * @public
 */
export default {
  component: storyElement.TAGNAME,
  argTypes: {}
};

export const Playground = _TEMPLATE.bind({});