import { Link } from 'gatsby';
import React from 'react';
import Image from '../image';
import './style.scss';

function PageHeader({ siteMetadata }) {
  return (
    <header className="page-header">
      <Link className="front-section" to="/">
        <Image className="blog-logo" src="logo.jpeg" />
        <div className="blog-title">
          <div className="blog-name">{siteMetadata.name}</div>
          <div className="blog-description">{siteMetadata.shortDescription}</div>
        </div>
      </Link>
    </header>
  );
}

export default PageHeader;
