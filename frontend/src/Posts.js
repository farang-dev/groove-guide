// Post.js

import React from 'react';

const Post = ({ title, content, venue, image }) => {
  return (
    <>
      <div style={{width: '100%', height: '100%', background: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderLeft: '0.10px #3D3D3D solid', borderTop: '0.10px #3D3D3D solid', borderRight: '0.10px #3D3D3D solid', borderBottom: '0.10px #3D3D3D solid'}} />
        <h2>{title}</h2>
        <p>{content}</p>
        <p>Venue: {venue}</p>
        <img style={{width: '100%', height: '100%'}} src={`http://localhost:1337${image}`} />
      <div/>
    </>
  );
};

export default Post;
