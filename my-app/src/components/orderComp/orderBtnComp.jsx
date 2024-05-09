import './orderComp.css';
import { Link } from 'react-router-dom';

function orderBtn() {
    return (
        <>
        <section className="order-value-container">
            <p className="order-value-text">Totalt värde på order</p>
            <aside className="order-value-wrapper">
                <h2 className="order-value order-value-title">1310</h2>
                <h2 className="order-sek order-value-title">sek</h2>
            </aside>
        </section>
        
        <Link to='/ticketsPage' className='button-wrapper'>
            <p className="button-text">Skicka order</p>
        </Link>
        </>
      
    )
}
  
export default orderBtn;