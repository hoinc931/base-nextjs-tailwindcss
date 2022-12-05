import Head from 'next/head'
import React from 'react'

const HeadTag = ({ title, applicationName, author, descriptions, keywords }) => {
  return (
    <Head>
      <title>{title || 'Printway.io'}</title>
      <meta property="og:title" content={title || 'Printway.io'} />
      
      {descriptions && descriptions.length ? (
        descriptions.map((item, idx) => (<meta key={idx} name="description" content={item} />))
      ) : (
        <meta name="description" content="Printway.io" />
      )}

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=yes" />

      <meta name="application-name" content={applicationName || 'Printway.io'} />
      <meta name="author" content={author || 'Printway.io'} />
      <meta name="keywords" content={keywords || 'Printway.io'} />

      {/* Còn thiếu thẻ dành cho thumbnail */}

      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default HeadTag