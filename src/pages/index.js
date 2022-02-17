import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../layout';
import PostCard from '../components/post-card';

const Index = () => {
  const {
    site: { siteMetadata },
    allPost: { nodes: posts },
  } = useStaticQuery(graphql`
    query {
      allPost {
        nodes {
          title
          description
          category
          date(formatString: "MMMM DD, YYYY, hh:mm")
          slug
          products {
            productImage
          }
          gatsbyPath(filePath: "/posts/{post.slug}")
        }
      }

      site {
        siteMetadata {
          name
          description
          shortDescription
          author
          googleSiteVerification
        }
      }
    }
  `);

  return (
    <Layout siteMetadata={siteMetadata}>
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </Layout>
  );
};

export default Index;
