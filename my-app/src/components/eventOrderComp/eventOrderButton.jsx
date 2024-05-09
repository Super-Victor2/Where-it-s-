import './eventOrderComp.css';
import { Link } from 'react-router-dom';

function eventOrderButton() {
    return (
      <Link to='/orderPage' className='button-wrapper'>
        <p className="button-text">Lägg i varukorgen</p>
      </Link>
    )
}
  
export default eventOrderButton;