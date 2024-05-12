import React, { useEffect, useState } from 'react';
import './ticketsComp.css';

function Tickets() {
    const [ticketsData, setTicketsData] = useState([]);
    const ticketNumber = 87;
    const ticketLetter = 'a'.charCodeAt(0); 

    useEffect(() => {
        const getOrderData = () => {
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key.startsWith('order')) {
                    return JSON.parse(localStorage.getItem(key));
                }
            }
            return null;
        };

        const orderData = getOrderData();

        if (orderData) {
            const selectedNumber = orderData.selectedNumber;
            const tickets = Array.from({ length: selectedNumber }, (_, index) => {
                const currentTicketNumber = ticketNumber + index;
                const currentTicketLetter = String.fromCharCode(ticketLetter + index).toUpperCase();
                return {
                    id: index + 1,
                    eventsData: orderData.eventsData,
                    scannerId: generateRandomScannerId(),
                    ticketNumber: currentTicketNumber,
                    ticketLetter: currentTicketLetter 
                };
            });
            setTicketsData(tickets);
        } else {
            console.error('Error: No order data found in localStorage.');
        }
    }, []);

    const generateRandomScannerId = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const length = 6;
        let result = '#';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    };

    return (
        <>
            {ticketsData.map(ticket => (
                <section key={ticket.id} className="ticket-container">
                    <aside className="ticket-what-wrapper">
                        <p className="ticket-what">WHAT</p>
                        <h1 className="ticket-title">{ticket.eventsData.name}</h1>
                    </aside>
                    <aside className="ticket-where-wrapper">
                        <p className="ticket-where">WHERE</p>
                        <h3 className="ticket-arena">{ticket.eventsData.where}</h3>
                    </aside>
                    <aside className="ticket-date-container">
                        <aside className="ticket-when-wrapper">
                            <p className="ticket-info">WHEN</p>
                            <h3 className="ticket-date">{ticket.eventsData.when.date}</h3>
                        </aside>
                        <aside className="ticket-from-wrapper">
                            <p className="ticket-info">FROM</p>
                            <h3 className="ticket-date">{ticket.eventsData.when.from}</h3>
                        </aside>
                        <aside className="ticket-to-wrapper">
                            <p className="ticket-info">TO</p>
                            <h3 className="ticket-date">{ticket.eventsData.when.to}</h3>
                        </aside>
                    </aside>
                    <aside className="ticket-info-wrapper">
                        <p className="ticket-info-title">INFO</p>
                        <p className="ticket-info-text">Section {ticket.ticketLetter} - Seat {ticket.ticketNumber}</p>
                    </aside>
                    <aside className="ticket-scanner-wrapper">
                        <p className="ticket-scanner-text">{ticket.scannerId}</p>
                        <p className="ticket-scanner-id">{ticket.scannerId}</p>
                    </aside>
                </section>
            ))}
        </>
    );
}

export default Tickets;
