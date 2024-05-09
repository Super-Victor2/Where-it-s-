import './eventsComp.css';
import { Link } from 'react-router-dom';

function eventFive() {
    return (
      <Link to='/orderPage' className='event-wrapper'>
        <h4 className="date">21 MAR</h4>
          <aside className="event-info">
            <p className="event-name">Lasse-Stefanz</p>
            <p className="event-arena">Avicci Arena</p>
            <p className="event-from">19.00 -</p>
            <p className="event-to">21.00</p>
            <p className="event-price">350 sek</p>
            </aside>
      </Link>
      
    )
}
  
export default eventFive;