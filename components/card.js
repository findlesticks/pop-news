import React, { PropTypes } from 'react';
import { css } from 'glamor';

const imageRule = css({
  width: '100%',
  'maxWidth': '400px',
  filter: 'brightness(.5)',
  WebkitFilter: 'brightness(.5)',
});

const cardRule = css({
  maxWidth: '300px',
  width: '100%',
  border: '4px solid black',
  listStyle: 'none',
  margin: '10px',
  clear: 'both',
  display: 'inline-block',
  overflow: 'hidden',
});

const titleRule = css({
  zIndex: 2,
  position: 'absolute',
  fontSize: '20',
  maxWidth: '300px',
  lineHeight: '20px',
  margin: 4,
  color: 'white',
})

export default function Card({ author, title, description, url, urlToImage, publishedAt }) {
  return (
    <li {...cardRule}>
      <a href={url} target="__blank">
        <div className="card">
            <h3 {...titleRule}>{title}</h3>
            <img src={urlToImage} {...imageRule} />
        </div>
      </a>
    </li>
  );
}

Card.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  urlToImage: PropTypes.string,
  publishedAt: PropTypes.string,
};

Card.defaultProps = {
  author: '',
  title: '',
  description: '',
  url: '',
  urlToImage: '',
  publishedAt: '',
};
