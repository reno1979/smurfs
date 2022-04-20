import { setCustomElementsManifest} from '@storybook/web-components';
import cem from '../custom-elements.json';

setCustomElementsManifest(cem);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}