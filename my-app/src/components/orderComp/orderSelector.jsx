import './orderComp.css';
<script src="https://kit.fontawesome.com/cdf8014e25.js" crossorigin="anonymous"></script>

function orderSelector() {
    return (
        <section className="order-container">
        <h1 className="order-page-title">Order</h1>
        <section className="order-wrapper">
            <h1 className="order-title">Lazze-Stefanz</h1>
            <aside className='order-info'>
                <p className="order-date order-info-item">21 Mars</p>
                <p className="order-kl order-info-item">kl</p>
                <p className="order-from order-info-item">19.00</p>
                <p className="order-divider order-info-item">-</p>
                <p className="order-to order-info-item">21.00</p>
            </aside>
            <aside className="order-selector">
                <i className="minusIcon fa-solid fa-minus order-selector-item"></i>
                <h2 className="order-number">3</h2>
                <i className="plusIcon fa-solid fa-plus order-selector-item"></i>
            </aside>
        </section>
    </section>
    )
    
}

export default orderSelector