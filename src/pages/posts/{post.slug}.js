import React from 'react';
import { graphql } from 'gatsby';
import PostHeader from '../../components/post-header';
import ProductCard from '../../components/product-card';
import Layout from '../../layout';

const PostPage = ({ data }) => {
  const {
    site: { siteMetadata },
    post,
  } = data;
  const { products, ...postMetadata } = post;

  return (
    <Layout siteMetadata={siteMetadata} postMetadata={postMetadata}>
      <PostHeader postMetadata={postMetadata} />
      <div className="description">{postMetadata.description}</div>
      <div className="products">
        <ul id="productList">
          {products.map((product) => (
            <ProductCard key={product.rank} product={product} />
          ))}
        </ul>
        <footer>파트너스 활동으로 수수료를 지급받을 수 있습니다.</footer>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($id: String) {
    post(id: { eq: $id }) {
      id
      title
      description
      date(formatString: "MMMM DD, YYYY, hh:mm")
      category
      products {
        productId
        productName
        productPrice
        productImage
        productUrl
        keyword
        rank
        isRocket
        isFreeShipping
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
`;

export default PostPage;
