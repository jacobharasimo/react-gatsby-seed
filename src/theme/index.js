import baseTheme from '@rebass/preset';
import { merge } from 'lodash';

const customTheme = {
  colors: {
    primary: '#a9733e',
    charcoal: '#24232B',
    lightGrey: '#F5F5F5',
  },
  radii: {
    default: 0,
  },
  variants: {
    container: {
      mx: 'auto',
      width: '1170px',
      maxWidth: '1170px',
    },
  },
};
const theme = merge(baseTheme, customTheme);

Object.keys(theme.buttons).forEach(key => {
  theme.buttons[key].cursor = 'pointer';
  theme.buttons[key].transition =
    'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out';
});

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line no-console
  console.info('theme: ', theme);
}
export default theme;
