import React, { useState, useEffect } from 'react';
import './eventOrderComp.css';

function EventOrderSelector() {
    const [selectedNumber, setSelectedNumber] = useState(1);
    const [eventsData, setEventsData] = useState(null);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://santosnr6.github.io/Data/events.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                setEventsData(jsonData.events[0]); // Only use data from the first object
                setTotalPrice(jsonData.events[0].price); // Set initial total price
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleMinusClick = () => {
        if (selectedNumber > 1) {
            setSelectedNumber(selectedNumber - 1);
            setTotalPrice(prevTotalPrice => prevTotalPrice - eventsData.price);
        }
    };

    const handlePlusClick = () => {
        setSelectedNumber(selectedNumber + 1);
        setTotalPrice(prevTotalPrice => prevTotalPrice + eventsData.price);
    };

    return (
        <section className="event-order-wrapper">
            <aside className="event-order-info-text">
                {eventsData && (
                    <>
                        <div className="total-price">{totalPrice} sek</div>
                    </>
                )}
            </aside>
            <aside className="event-order-selector">
                <i className="minusIcon fa-solid fa-minus order-selector-item" onClick={handleMinusClick}></i>
                <h2 className="event-order-number">{selectedNumber}</h2>
                <i className="plusIcon fa-solid fa-plus order-selector-item" onClick={handlePlusClick}></i>
            </aside>
        </section>
    );
}

export default EventOrderSelector;
