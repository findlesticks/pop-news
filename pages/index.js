import React from 'react'
import Head from '../components/head'
import { root } from '../components/rules/page';

export default () => (
  <div className="root" {...root}>
    <Head>
      <title>Next.js on Heroku</title>
    </Head>
    <h1>Next.js on Heroku</h1>

    <p>Deploy <a href="https://zeit.co/blog/next">Next.js</a> universal web apps on <a href="https://www.heroku.com/home">Heroku</a>.</p>

    <p>This <strong>demo deployment on Heroku</strong> is from the repo <a href="https://github.com/mars/heroku-nextjs">mars/heroku-nextjs</a>.</p>

    <p><a href="https://github.com/mars/heroku-nextjs/archive/master.zip">Download this Next.js app</a> as a Heroku-ready template, or follow <a href="https://github.com/mars/heroku-nextjs#production-deployment">Production Deployment</a> to push an existing app to Heroku.</p>
  </div>
)
