import React, { useState, useEffect } from 'react';
import './orderComp.css';
import { Link } from 'react-router-dom';

function OrderSelector() {
    const [selectedNumber, setSelectedNumber] = useState(1); 
    const [events, setEvents] = useState([]); 
    const [totalOrderValue, setTotalOrderValue] = useState(0); 

    useEffect(() => {
        const storedSelectedNumber = localStorage.getItem('selectedNumber');
        if (storedSelectedNumber) {
            setSelectedNumber(parseInt(storedSelectedNumber));
        }
    }, []);

    useEffect(() => {
        const getOrderData = () => {
            const orders = [];
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key.startsWith('order')) {
                    orders.push(JSON.parse(localStorage.getItem(key)));
                }
            }
            return orders.length > 0 ? orders : null;
        };
    
        const orderData = getOrderData();
    
        if (orderData) {
            setEvents(orderData);
        } else {
            console.error('Error: No order data found in localStorage.');
        }
    }, []);

    useEffect(() => {
        if (events.length > 0) {
            const totalPrice = events.reduce((total, order) => total + order.eventsData.price, 0) * selectedNumber;
            setTotalOrderValue(totalPrice);
        }
    }, [selectedNumber, events]); 

    const handleMinusClick = () => {
        if (selectedNumber > 1) {
            setSelectedNumber(selectedNumber - 1);
            localStorage.setItem('selectedNumber', selectedNumber - 1);
        }
    };
    
    const handlePlusClick = () => {
        setSelectedNumber(selectedNumber + 1);
        localStorage.setItem('selectedNumber', selectedNumber + 1);
    };
    
    const handleAddToCart = () => {
        const existingOrderData = JSON.parse(localStorage.getItem('orderData')) || [];
    
        const newOrderData = {
            eventsData: events,
            selectedNumber: selectedNumber
        };
        existingOrderData.push(newOrderData);
    
        localStorage.setItem('orderData', JSON.stringify(existingOrderData));
    };

    return (
        <>
            <h1 className="order-page-title">Order</h1>
            {events.map((order, index) => (
                <section className="order-container" key={index}>
                    <section className="order-wrapper">
                        <h1 className="order-title">{order.eventsData.name}</h1>
                        <aside className='order-info'>
                            <p className="order-date order-info-item">{order.eventsData.when.date}</p>
                            <p className="order-kl order-info-item">kl</p>
                            <p className="order-from order-info-item">{order.eventsData.when.from}</p>
                            <p className="order-divider order-info-item">-</p>
                            <p className="order-to order-info-item">{order.eventsData.when.to}</p>
                        </aside>
                        <aside className="order-selector">
                            <i className="minusIcon fa-solid fa-minus order-selector-item" onClick={handleMinusClick}></i>
                            <h2 className="order-number">{selectedNumber}</h2>
                            <i className="plusIcon fa-solid fa-plus order-selector-item" onClick={handlePlusClick}></i>
                        </aside>
                    </section>
                </section>
            ))}
            <section className="order-value-container">
                <p className="order-value-text">Totalt värde på order</p>
                <aside className="order-value-wrapper">
                    <h2 className="order-value order-value-title">{totalOrderValue}</h2>
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
