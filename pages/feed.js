import React, { Component } from 'react';
import Head from 'next/head';

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
          <meta charSet="utf-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="stylesheet" type="text/css" href="../components/feed.css"/>
          <title>Your personalised news feed</title>
        </Head>
        <Header />
        <Feed {...this.props} />
      </div>
    )
  }
};
