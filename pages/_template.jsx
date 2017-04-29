import React from 'react';
import '../css/flexboxgrid.css'
import '../css/normalize.min.css'
import '../css/main'

import PageLink from '../components/common/PageLink';
import Nav from '../components/common/Nav/Nav';

module.exports = React.createClass({
  propTypes() {
    return {
      children: React.PropTypes.any,
    };
  },
  render() {
    return (
      <div>
        <Nav />
        <div>
          {this.props.children}
        </div>
      </div>
    );
  },
});