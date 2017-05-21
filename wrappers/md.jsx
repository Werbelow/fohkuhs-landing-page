import React from 'react';
import Helmet from 'react-helmet';

import { config } from 'config';

import Hero from '../components/common/Hero/Hero';
import Footer from '../components/common/Footer/Footer';

module.exports = React.createClass({
  propTypes() {
    return {
      router: React.PropTypes.object,
    }
  },
  render() {
    const page = this.props.route.page.data;
    const description = page.description || "";
    const keywords = page.keywords || "";
    const meta = [
      { "name": "description", "content": description },
      { "name": "keywords", "content": keywords },
    ];
    return (
      <div>
        <div className="markdown">
          <Helmet
            title={`${config.siteTitle} | ${page.title}`}
            meta={meta}
          />
          <Hero tagline={page.tagline} isPage />
          <div className="container page-content">
            <div className="row">
              <div className="col-xs-10 col-xs-offset-1 page-content">
                <div dangerouslySetInnerHTML={{ __html: page.body }} />
              </div>
            </div>
          </div>
        </div>
        <Footer isPage />
      </div>
    )
  },
})
