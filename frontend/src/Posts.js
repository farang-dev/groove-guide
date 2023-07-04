// Post.js

import React from 'react';

const Post = ({ title, content, venue }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Venue: {venue}</p>

    </div>
  );
};

export default Post;
