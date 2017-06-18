import React, { PropTypes } from 'react';
import {
  cardRule,
  imageRule,
  imageContainerRule,
  linkRule,
} from './rules/card';
import { css } from 'glamor';
import CardTitle from './cardTitle';

export default function Card({ author, title, description, url, urlToImage, publishedAt }) {
  return (
    <li {...cardRule}>
      <a href={url} target="__blank" {...linkRule} title="Go to this news story">
        <div className="card">
          <div {...imageContainerRule}>
            <img src={urlToImage} {...imageRule} />
          </div>
          <CardTitle>{title}</CardTitle>
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
