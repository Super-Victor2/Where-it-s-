import './eventsComp.css';
import { Link } from 'react-router-dom';

function eventButton() {
    return (
      <Link to='/orderPage' className='button-wrapper'>
        <p className="button-text">Till Varukorgen</p>
      </Link>
    )
}
  
export default eventButton;