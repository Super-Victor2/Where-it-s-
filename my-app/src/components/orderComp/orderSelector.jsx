import './orderComp.css';
import { Link } from 'react-router-dom';
<script src="https://kit.fontawesome.com/cdf8014e25.js" crossorigin="anonymous"></script>

function orderSelector() {
    <section className="order-container">
        <h1 className="order-page-title">Order</h1>
        <section className="order-wrapper">
            <h1 className="order-title">Lazze-Stefanz</h1>
            <aside className='order-info'>
                <p className="order-date">21 Mars</p>
                <p className="order-date">kl</p>
                <p className="order-date">19.00</p>
                <p className="order-date">-</p>
                <p className="order-date">21.00</p>
            </aside>
            <aside className="order-selector">
                <i class="fa-solid fa-minus"></i>
                <h2 className="order-number">3</h2>
                <i class="fa-solid fa-minus"></i>
            </aside>
            <h3 className="order-value-text">Totalt värde på order</h3>
            <h1 className="order-value">1310 sek</h1>
        </section>
        
    </section>
}

export default orderSelector