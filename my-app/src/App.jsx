import './App.css'
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/homePage/homePage';
import EventsPage from './pages/eventsPage/eventsPage';

function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/eventsPage' element={<EventsPage />} />      
      </Routes>
    </div>
  )
}

export default App
