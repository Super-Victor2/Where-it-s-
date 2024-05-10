import './eventOrderComp.css';
<script src="https://kit.fontawesome.com/cdf8014e25.js" crossorigin="anonymous"></script>

function eventOrderSelector() {
    return (
        <section className="event-order-wrapper">
            <aside className="event-order-info-text">
                <h1 className="event-order-title-value">1050</h1>
                <h1 className="event-order-title-value">sek</h1>
            </aside>
            <aside className="event-order-selector">
                <i className="minusIcon fa-solid fa-minus order-selector-item"></i>
                <h2 className="event-order-number">3</h2>
                <i className="plusIcon fa-solid fa-plus order-selector-item"></i>
            </aside>
        </section>
    )
    
}

export default eventOrderSelector