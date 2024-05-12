import '../eventOrderComp.css';
import React, { useState, useEffect } from 'react';

function eventOrderinfo() {
    const [event, setEvent] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch('https://santosnr6.github.io/Data/events.json');
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            setEvent(jsonData.events[2]);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };

    fetchData();
    }, []);

    if (!event) {
        return <div>Error: Data format is not as expected.</div>;
    }

  console.log(event);
    return (
        <>
            <section className="event-info-container">
                <p className="event-order-info-name">{event.name}</p>
                <aside className="event-order-info">
                    <p className="event-order-info-text">{event.when.date}</p>
                    <p className="event-order-info-text">kl</p>
                    <p className="event-order-info-text">{event.when.from}</p>
                    <p className="event-order-info-text">-</p>
                    <p className="event-order-info-text">{event.when.to}</p>
                </aside>
                <aside className="event-order-info-arena">
                    <p className="event-arena-info">@</p>
                    <p className="event-arena-info">{event.where}</p>
                </aside>
            </section>
        </>
    )
}

export default eventOrderinfo