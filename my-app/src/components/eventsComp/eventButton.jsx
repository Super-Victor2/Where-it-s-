import './eventsComp.css';
import { Link } from 'react-router-dom';

function eventOrderButton() {
    return (
      <Link to='/orderPage' className="button-container">
        <nav className='button-wrapper'>
            <p className="button-text">Till varukorgen</p>
        </nav>
      </Link>
    )
}
  
export default eventOrderButton;