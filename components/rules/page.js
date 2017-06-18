import { css } from 'glamor';
import breakpoints from '../constants/breakpoints';

const respondToMobile = `@media (min-width: ${breakpoints.mobile})`;

export const root = css({
  maxWidth: '1000px',
  width: '100%',
  fontFamily: 'sans-serif',
  lineHeight: '1.33rem',
  marginTop: '8vh',
  marginLeft: 'auto',
  marginRight: 'auto',
  [respondToMobile]: {
    // Mobile styles
  },
});
