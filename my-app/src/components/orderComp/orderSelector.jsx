import React, { useState, useEffect } from 'react';
import './orderComp.css';
import { Link } from 'react-router-dom';

function OrderSelector() {
    const [selectedNumber, setSelectedNumber] = useState(1); // Default value
    const [events, setEvents] = useState(null);

    useEffect(() => {
        // Get data from localStorage
        const orderData = JSON.parse(localStorage.getItem('orderData'));
        if (orderData) {
            setSelectedNumber(orderData.selectedNumber);
            setEvents(orderData.eventsData);
        }
    }, []);

    const handleMinusClick = () => {
        if (selectedNumber > 1) {
            setSelectedNumber(selectedNumber - 1);
        }
    };

    const handlePlusClick = () => {
        // You may want to add a check here to limit the maximum number of tickets
        setSelectedNumber(selectedNumber + 1);
    };

    const handleAddToCart = () => {
        // Save selected number and data to localStorage
        const orderData = {
            selectedNumber,
            eventsData
        };
        localStorage.setItem('orderData', JSON.stringify(orderData));
    };

    return (
        <>
            <section className="order-container">
                <h1 className="order-page-title">Order</h1>
                <section className="order-wrapper">
                    {/* Use data from localStorage */}
                    {events && (
                        <>
                            <h1 className="order-title">{events.name}</h1>
                            <aside className='order-info'>
                                <p className="order-date order-info-item">{events.when.date}</p>
                                <p className="order-kl order-info-item">kl</p>
                                <p className="order-from order-info-item">{events.when.from}</p>
                                <p className="order-divider order-info-item">-</p>
                                <p className="order-to order-info-item">{events.when.to}</p>
                            </aside>
                        </>
                    )}
                    <aside className="order-selector">
                        <i className="minusIcon fa-solid fa-minus order-selector-item" onClick={handleMinusClick}></i>
                        <h2 className="order-number">{selectedNumber}</h2>
                        <i className="plusIcon fa-solid fa-plus order-selector-item" onClick={handlePlusClick}></i>
                    </aside>
                </section>
            </section>
            <section className="order-value-container">
                <p className="order-value-text">Totalt värde på order</p>
                <aside className="order-value-wrapper">
                    <h2 className="order-value order-value-title">1310</h2>
                    <h2 className="order-sek order-value-title">sek</h2>
                </aside>
            </section>
        
            <Link to='/ticketsPage' className="button-container" onClick={handleAddToCart}>
                <nav className='button-wrapper'>
                    <p className="button-text">Beställ</p>
                </nav>
            </Link>
        
        </>
    );
}

export default OrderSelector;
