import React, { useEffect } from 'react';
import '../eventOrderComp.css';
import { Link } from 'react-router-dom';
import useStore from '../../../store'; // Adjust the path as needed

function EventOrderSelectorFive() {
    const {
        selectedNumber,
        totalPrice,
        eventsData,
        setSelectedNumber,
        setTotalPrice,
        setEventsData,
        addToCart
    } = useStore();

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
    }, [setEventsData]);

    const handleMinusClick = () => {
        if (selectedNumber > 0 && eventsData) {
            const newSelectedNumber = selectedNumber - 1;
            setSelectedNumber(newSelectedNumber);

            const newTotalPrice = totalPrice - eventsData.price;
            setTotalPrice(newTotalPrice);
        }
    };

    const handlePlusClick = () => {
        if (eventsData) {
            const newSelectedNumber = selectedNumber + 1;
            setSelectedNumber(newSelectedNumber);

            const newTotalPrice = totalPrice + eventsData.price;
            setTotalPrice(newTotalPrice);
        }
    };

    const handleAddToCart = () => {
        const orderData = {
            selectedNumber,
            eventsData
        };
        addToCart(orderData);
        console.log(orderData.selectedNumber); // Log the selectedNumber
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

export default EventOrderSelectorFive;
