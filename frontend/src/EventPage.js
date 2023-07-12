import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const EventPage = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`//groove-guide.onrender.com/api/events/${id}?populate=*`);
        console.log('Response:', response.data);
        if (response.data) {
          setEvent(response.data.data);
          console.log(response.data);
        } else {
          setError(new Error('Event not found'));
        }
      } catch (error) {
        console.error('Error:', error);
        setError(error);
      }
    };

    fetchEvent();
  }, [id]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!event) {
    return <div>Loading...</div>;
  }

  const startDate = new Date(event.attributes.StartDateTime).toLocaleString('en-US', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  });

  const endDate = new Date(event.attributes.EndDateTime).toLocaleString('en-US', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  });

  return (
    <div className="event-container">
      <Link to="/" className="back-link">Back to home</Link>
      <div className="event-columns">
        <img className="page-image" src={`//groove-guide.onrender.com${event.attributes.Image.data.attributes.formats.large.url}`} alt="Event" />
        <div className="event-details">
          <h2>{event.attributes.Title}</h2>
          <p>Line-ups: {event.attributes.Dj}</p>
          <p>Genre: {event.attributes.Genre}</p>
          <p>{event.attributes.Content}</p>
          <p>{startDate} - {endDate}</p>
          <p>Venue: {event.attributes.Venue}</p>
          <p>Address: {event.attributes.Address}</p>
          <p>Cost: ${event.attributes.Cost}</p>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
