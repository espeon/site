import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-white dark:bg-black text-white dark:text-black">
          <Main />
          <NextScript />
          <script async defer data-website-id="c00cdd65-98ed-4910-8c6f-43d648e13fef" src="https://kishibashi.miwa.moe/umami.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument