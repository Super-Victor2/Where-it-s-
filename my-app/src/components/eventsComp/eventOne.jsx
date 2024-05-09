import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function eventOne() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await axios.get('https://santosnr6.github.io/Data/events.json');
        console.log(response.data);
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);

        setEvents([]);
      }
    }

    fetchEvents();
  }, []);


  return (
    <Link to='/eventOrderPage' className='event-wrapper'>
      {events.length > 0 && events.map(event => (
        <div key={event.id} event={event} className="event-card">
          <h4 className="date">{event.date}</h4>
          <aside className="event-info">
            <p className="event-name">{event[0].name}</p>
            <p className="event-arena">{event[0].where}</p>
            <p className="event-from">{event[0].from}</p>
            <p className="event-to">{event[0].to}</p>
            <p className="event-price">{event[0].price}</p>
            </aside>  
        </div>
      ))}
    </Link>
  );
}

export default eventOne;