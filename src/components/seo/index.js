import React from 'react';
import { Helmet } from 'react-helmet';

function Seo({ siteMetadata, postMetadata }) {
  const description = postMetadata?.description || siteMetadata?.description;
  const title = postMetadata?.title || siteMetadata?.shortDescription;
  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      title={title}
      meta={[
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:site_title`,
          content: title,
        },
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: 'og:author',
          content: siteMetadata.author,
        },
        {
          property: 'og:image',
          content: 'ogImage.png',
        },

        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `google-site-verification`,
          content: siteMetadata.googleSiteVerification,
        },
      ]}
    />
  );
}

export default Seo;
