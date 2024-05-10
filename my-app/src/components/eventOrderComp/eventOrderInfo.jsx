import './eventOrderComp.css';

function eventOrderinfo() {
    return (
        <>
            <section className="event-info-container">
                <p className="event-order-info-name">Lasse-Stefanz</p>
                <aside className="event-order-info">
                    <p className="event-order-info-text">21 MAR</p>
                    <p className="event-order-info-text">kl</p>
                    <p className="event-order-info-text">19.00</p>
                    <p className="event-order-info-text">-</p>
                    <p className="event-order-info-text">21.00</p>
                </aside>
                <aside className="event-order-info-arena">
                    <p className="event-arena-info">@</p>
                    <p className="event-arena-info">Avicci Arena</p>
                </aside>
            </section>
        </>
    )
}

export default eventOrderinfo