import React from 'react';

const Post = ({ title, dj, venue, image, start_date_time }) => {
  const formattedDate = new Date(start_date_time).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="container">
      <div className="card">
        <div className="image-container">
          <img className="image" src={`http://localhost:1337${image}`} alt="Event" />
        </div>
        <div className="text-container">
          <p>{formattedDate}</p>
          <h2>{title}</h2>
          <p>{dj}</p>
          <p>Venue: {venue}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
