import React, { useState, useEffect } from 'react';
import '../eventOrderComp.css';
import { Link } from 'react-router-dom';

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

    const handleAddToCart = () => {
        // Save selected number to localStorage
        localStorage.setItem('selectedNumber', selectedNumber);

        // Create a unique key based on the selectedNumber
        const keyTwo = `orderData_${selectedNumber}`;
        // Save selected number and data to localStorage using the unique key
        const orderData = {
            selectedNumber,
            eventsData
        };
        localStorage.setItem(keyTwo, JSON.stringify(orderData));
    };

    return (
        <section className="event-order-container">
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
            <Link to='/orderPage' className="button-container" onClick={handleAddToCart}>
                <nav className='button-wrapper'>
                    <p className="button-text">Lägg i varukorgen</p>
                </nav>
            </Link>
        </section>
    );
}

export default EventOrderSelector;
