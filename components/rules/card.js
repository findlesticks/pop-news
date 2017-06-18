import { css } from 'glamor';

const imageHeight = '150px';
export const titleHeight = 50;
const cardWidth = '300px';

export const imageRule = css({
  width: '100%',
});

export const imageContainerRule = css({
  width: '100%',
  height: imageHeight,
  overflow: 'hidden',
});

export const linkRule = css({
  textDecoration: 'none',
});

export const cardRule = css({
  maxWidth: cardWidth,
  width: '100%',
  height: imageHeight + `${titleHeight}px`,
  border: '4px solid black',
  listStyle: 'none',
  margin: '10px',
  clear: 'both',
  display: 'inline-block',
  overflow: 'hidden',
});

export const titleRule = css({
  height: titleHeight,
  fontSize: '16',
  margin: '0 4px',
  lineHeight: `${titleHeight/2}px`,
  color: 'black',
  textOverflow: 'ellipses',
  textDecoration: 'none',
  fontWeight: '700',
});
