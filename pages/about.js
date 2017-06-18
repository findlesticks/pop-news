import React from 'react'
import Head from '../components/head'
import Header from '../components/header';
import { mission } from '../components/constants/about.strings';
import brandName from '../components/constants/brandName';
import { root } from '../components/rules/page';

export default () => (
  <div className="root" {...root}>
    <Head>
      <title>About {brandName}</title>
    </Head>
    <Header />
    <h1>About Us</h1>
    <h2>Our Mission</h2>
    <p>{mission}</p>
  </div>
)
