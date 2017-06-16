import { css } from 'glamor';

export const root = css({
  fontFamily: 'sans-serif',
  lineHeight: '1.33rem',
  marginTop: '8vh',
  '@media (min-width: 600px)': {
    marginLeft: '21vw',
    marginRight: '21vw',
  },
});
