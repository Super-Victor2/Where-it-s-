import React, { useState, useEffect } from 'react';
import '../eventOrderComp.css';
import { Link } from 'react-router-dom';

function EventOrderSelector() {
    // Generate a unique key using a timestamp
    const generateUniqueKey = () => {
        return `order_${Date.now()}`;
    };

    

    const [selectedNumber, setSelectedNumber] = useState(() => {
        const savedSelectedNumber = localStorage.getItem('selectedNumber');
        return savedSelectedNumber ? parseInt(savedSelectedNumber) : 0; // Start at 0
    });

    const [eventsData, setEventsData] = useState(null);
    const [totalPrice, setTotalPrice] = useState(() => {
        const savedPrice = localStorage.getItem('eventsDataPrice');
        return savedPrice ? parseFloat(savedPrice) : 0;
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://santosnr6.github.io/Data/events.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                setEventsData(jsonData.events[4]); // Only use data from the first object
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleMinusClick = () => {
        if (selectedNumber > 0) {
            const newSelectedNumber = selectedNumber - 1;
            setSelectedNumber(newSelectedNumber);
            localStorage.setItem('selectedNumber', newSelectedNumber.toString());
    
            const newTotalPrice = totalPrice - eventsData.price;
            setTotalPrice(newTotalPrice);
            localStorage.setItem('eventsDataPrice', newTotalPrice.toString());
        }
    };
    
    const handlePlusClick = () => {
        const newSelectedNumber = selectedNumber + 1;
        setSelectedNumber(newSelectedNumber);
        localStorage.setItem('selectedNumber', newSelectedNumber.toString());
    
        const newTotalPrice = totalPrice + eventsData.price;
        setTotalPrice(newTotalPrice);
        localStorage.setItem('eventsDataPrice', newTotalPrice.toString());
    };
    
    
    
    const handleAddToCart = () => {
        const key = generateUniqueKey(); // Generate unique key
        const orderData = {
            selectedNumber,
            eventsData
        };
        localStorage.setItem(key, JSON.stringify(orderData));
        
        // Now let's retrieve the data from localStorage and log it
        const storedOrderData = JSON.parse(localStorage.getItem(key));
        console.log(storedOrderData.selectedNumber); // Log the selectedNumber
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
