import React from 'react';

import PageHeader from '../components/page-header';
import Seo from '../components/seo';

import './style.scss';

const Layout = ({ siteMetadata, postMetadata, children }) => {
  return (
    <div className="page-wrapper">
      <Seo siteMetadata={siteMetadata} postMetadata={postMetadata} />
      <PageHeader siteMetadata={siteMetadata} />
      <main className="page-content">{children}</main>
    </div>
  );
};

export default Layout;
