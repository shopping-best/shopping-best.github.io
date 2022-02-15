import React from 'react';
import './style.scss';

function PostHeader({ postMetadata }) {
  return (
    <header className="post-header">
      <div className="category">{postMetadata.category}</div>
      <div className="title">{postMetadata.title}</div>
      <div className="date">{postMetadata.date}</div>
    </header>
  );
}

export default PostHeader;
