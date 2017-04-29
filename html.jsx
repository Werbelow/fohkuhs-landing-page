import React from 'react';
import Helmet from 'react-helmet';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';

import shareImage from './pages/fohkuhs-share-image.jpg'
import favicon from './favicon.ico'

const BUILD_TIME = new Date().getTime();

const HTML = (props) => {
  const head = Helmet.rewind();

  // include link to the css file if we are running in production mode
  let css
  if (process.env.NODE_ENV === 'production') {
    css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0 maximum-scale=5.0" />
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
        <link rel="icon" href={favicon} type="image/x-icon" />
        <meta property="og:url" content="http://www.fohkuhs.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="/foh kuhs s/" />
        <meta property="og:description" content="A Beautiful Focus Timer" />
        <meta property="og:image" content={shareImage} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@fohkuhsapp" />
        <meta name="twitter:creator" content="@traviswerbelow" />
        <meta name="twitter:title" content="/foh kuhs s/w" />
        <meta name="twitter:description" content="A Beautiful Focus Timer" />
        <meta name="twitter:image" content={shareImage} />
        {head.title.toComponent()}
        {head.meta.toComponent()}
        <link href="https://fonts.googleapis.com/css?family=Quicksand:300,400,700" rel="stylesheet" />
        {css}
      </head>
      <body>
        <div id="react-mount" dangerouslySetInnerHTML={{ __html: props.body }} />
        <script src={ prefixLink(`/bundle.js?t=${BUILD_TIME}`) } />
      </body>
    </html>
  );
};

export default HTML;
