import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EventPage = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`http://localhost:1337/api/events/${id}`);
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

  return (
    <div>
      <h2>{event.attributes.Title}</h2>
      <p>{event.attributes.Content}</p>
      <p>Venue: {event.attributes.Venue}</p>
    </div>
  );
};

export default EventPage;
