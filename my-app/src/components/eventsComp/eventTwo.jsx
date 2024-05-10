import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MyComponent = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://santosnr6.github.io/Data/events.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        // Accessing the 'events' array from the response
        setEvents(jsonData.events);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs only once after the initial render

  if (!Array.isArray(events)) {
    return <div>Error: Data format is not as expected.</div>;
  }

  console.log(events)

  return (
    <Link to='/eventOrderPage' className='event-wrapper'>
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <aside className="date-wrapper">
              <h4 className="date">{event.when.date}</h4>
            </aside>
            <aside className="event-info">
              <p className="event-name">{event.name}</p>
              <p className="event-arena">{event.where}</p>
              <p className="event-from">{event.when.from}</p>
              <p className="event-to">{event.when.to}</p>
              <p className="event-price">{event.price}</p>
            </aside>  
          </div>
        ))}
    </Link>
  );
};

export default MyComponent;
