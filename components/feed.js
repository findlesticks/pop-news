import React, { Component } from 'react';
import { ulCss } from './rules/feed';

import fetchNews from '../lib/fetchNews';
import Card from './card';
import SourceTitle from './sourceTitle';

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
