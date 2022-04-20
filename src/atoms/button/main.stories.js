import { htmlFromStoryProps } from '../../toolbox.js';
import * as smurfButton from './main.js';

const _template = (props) =>  htmlFromStoryProps(smurfButton.TAGNAME, props);

export default {
  component: smurfButton.TAGNAME,
  argTypes: {}
};

export const Playground = _template.bind({});