import './footer.css';
import { Link } from 'react-router-dom';

function footer() {
    return (
      <footer className='footer-wrapper'> 
          <ul className='footer_items'>
            <Link to='/' className='footer-item_link'>Home</Link>
            <Link to='/eventsPage' className='footer-item_link'>Events</Link>
            <Link to='/orderPage' className='footer-item_link'>Order</Link>
          </ul>
      </footer>
          
    )
  }
  
  export default footer;