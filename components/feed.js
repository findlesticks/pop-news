import React, { Component } from 'react';
import { css } from 'glamor';

import fetchNews from '../lib/fetchNews';
import Card from './card';
import SourceTitle from './sourceTitle';

let setState;

const ulCss = css({ width: '100%', padding: '0 40px' });

export default class Feed extends Component {
  render() {
    const cards = this.props.articles.map(article => <Card {...article} />)
    return (
      <div>
        <SourceTitle source={this.props.source} />
        <ul {...ulCss}>{cards}</ul>
      </div>
    );
  }
}
