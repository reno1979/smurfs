import { htmlFromStoryProps } from '../../toolbox.js';
import * as smurfRadio from './main.js';

const _template = (props) =>  htmlFromStoryProps(smurfRadio.TAGNAME, props);

export default {
  component: smurfRadio.TAGNAME,
  argTypes: {}
};

export const Playground = _template.bind({});