import { css } from 'glamor';

export const imageRule = css({
  width: '100%',
  'maxWidth': '400px',
  filter: 'brightness(.6)',
  WebkitFilter: 'brightness(.6)',
});

export const cardRule = css({
  maxWidth: '300px',
  width: '100%',
  border: '4px solid black',
  listStyle: 'none',
  margin: '10px',
  clear: 'both',
  display: 'inline-block',
  overflow: 'hidden',
});

export const titleRule = css({
  zIndex: 2,
  position: 'absolute',
  fontSize: '20',
  maxWidth: '300px',
  lineHeight: '20px',
  margin: 4,
  color: 'white',
})
