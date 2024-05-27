import React, { useEffect } from 'react';
import './orderComp.css';
import useStore from '../../store'; // Import Zustand store

function OrderSelector() {
    const { selectedNumber, setSelectedNumber, events, setEventsData, totalOrderValue, setTotalOrderValue } = useStore(); // Connect component to Zustand store

    useEffect(() => {
        // Fetch events data from API or any other source and set it in Zustand store
        fetchEventsData()
            .then(eventsData => {
                setEventsData(eventsData); // This is where the error occurs
            })
            .catch(error => {
                console.error('Error fetching events data:', error);
            });
    }, [setEventsData]); // Dependency should include setEventsData


    useEffect(() => {
        // Calculate total order value whenever selectedNumber or events change
        if (events && Array.isArray(events)) { // Check if events is an array
            const totalPrice = events.reduce((total, order) => total + order.price, 0) * selectedNumber;
            setTotalOrderValue(totalPrice);
        }
    }, [selectedNumber, events, setTotalOrderValue]);

    const handleMinusClick = () => {
        // Decrease selectedNumber
        if (selectedNumber > 1) {
            setSelectedNumber(selectedNumber - 1);
        }
    };
    
    const handlePlusClick = () => {
        // Increase selectedNumber
        setSelectedNumber(selectedNumber + 1);
    };
    
    const handleAddToCart = () => {
        // Handle adding order to cart, you can implement this according to your requirements
        console.log('Add to cart clicked');
    };

    // Dummy function to fetch events data from API (replace with your actual implementation)
    const fetchEventsData = async () => {
        try {
            const response = await fetch('https://santosnr6.github.io/Data/events.json');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const eventData = await response.json();
            return eventData;
        } catch (error) {
            throw new Error('Error fetching events data:', error);
        }
    };

    return (
        <>
            <h1 className="order-page-title">Order</h1>
            {Array.isArray(events) && events.length > 0 ? (
                events.map((order, index) => (
                    <section className="order-container" key={index}>
                        <section className="order-wrapper">
                            <h1 className="order-title">{order.name}</h1>
                            <aside className='order-info'>
                                <p className="order-date order-info-item">{order.when.date}</p>
                                <p className="order-kl order-info-item">kl</p>
                                <p className="order-from order-info-item">{order.when.from}</p>
                                <p className="order-divider order-info-item">-</p>
                                <p className="order-to order-info-item">{order.when.to}</p>
                            </aside>
                            <aside className="order-selector">
                                <i className="minusIcon fa-solid fa-minus order-selector-item" onClick={handleMinusClick}></i>
                                <h2 className="order-number">{selectedNumber}</h2>
                                <i className="plusIcon fa-solid fa-plus order-selector-item" onClick={handlePlusClick}></i>
                            </aside>
                        </section>
                    </section>
                ))
            ) : (
                <p>Loading...</p>
            )}
            <section className="order-value-container">
                <p className="order-value-text">Totalt värde på order</p>
                <aside className="order-value-wrapper">
                    <h2 className="order-value order-value-title">{totalOrderValue}</h2>
                    <h2 className="order-sek order-value-title">sek</h2>
                </aside>
            </section>
        
            <div className="button-container" onClick={handleAddToCart}>
                <div className='button-wrapper'>
                    <p className="button-text">Beställ</p>
                </div>
            </div>
        </>
    );
}

export default OrderSelector;
