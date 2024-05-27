import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MyComponent = () => {
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://santosnr6.github.io/Data/events.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setEvent(jsonData.events[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!event) {
    return <div>Error: Data format is not as expected.</div>;
  }


  return (
    <Link to='/eventOrderPageOne' className='event-wrapper'>
      <div className="event-card">
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
    </Link>
  );
};

export default MyComponent;
