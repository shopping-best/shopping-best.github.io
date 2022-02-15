import { Link } from 'gatsby';
import React from 'react';
import './style.scss';

function PostCard({ post }) {
  return (
    <Link to={`posts/${post.slug}`}>
      <div className="post-card">
        <div className="post-title">{post.title}</div>
        <div className="post-description">{post.description}</div>
        <div className="post-details">
          <div className="post-category">{post.category}</div>
          <div className="post-date">{post.date}</div>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
