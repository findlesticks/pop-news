import React from 'react'
import Head from 'next/head'
import Header from '../components/header';
import { mission } from '../components/constants/about.strings';
import brandName from '../components/constants/brandName';

export default () => (
  <div className="root">
    <Head>
      <meta charSet="utf-8"/>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <title>About {brandName}</title>
    </Head>
    <style jsx>{`
      .root {
        font-family: sans-serif;
        line-height: 1.33rem;
        margin-top: 8vh,
      }
      @media (min-width: 600px) {
        .root {
          margin-left: 21vw;
          margin-right: 21vw;
        }
      }
    `}</style>
    <Header />
    <h1>About Us</h1>

    <h2>Our Mission</h2>
    <p>{mission}</p>
  </div>
)
