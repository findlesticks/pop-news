import React, { Component } from 'react';
import Head from '../components/head'

import Header from '../components/header';
import Feed from '../components/feed';
import fetchNews from '../lib/fetchNews';
import { root } from '../components/rules/page';

export default class FeedPage extends Component {
  static async getInitialProps () {
    // TODO fetch user profile from session
    return await fetchNews('the-next-web');
  }

  render () {
    return (
      <div {...root}>
        <Head>
          <title>Your personalised news feed</title>
        </Head>
        <Header />
        <Feed {...this.props} />
      </div>
    )
  }
};
