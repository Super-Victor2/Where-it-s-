import React, { useEffect, useState } from 'react';
import axios from 'axios';

function eventOne() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get(`https://santosnr6.github.io/Data/events.json`)
      .then(response => {
        // Check if response data is an array and not empty
        if (Array.isArray(response.data) && response.data.length > 0) {
          setEvents(response.data);
        } else {
          console.log("No events found or data format is incorrect:", response.data);
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Render a loading indicator or message if events are empty
  if (events.length === 0) {
    return <p>Loading events...</p>;
  }

  return (
    <section className='content-wrapper'>
      {events.map(event => (
        <div key={event.id}>
          <h4 className="date">{event.date}</h4>
          <aside className="event-info">
            <p className="event-name">{event.name}</p>
            <p className="event-name">{event.where}</p>
            <p className="event-name">{event.from}</p>
            <p className="event-name">{event.to}</p>
            <p className="event-name">{event.price}</p>
          </aside>
        </div>
      ))}
    </section>
  );
}

export default eventOne;
