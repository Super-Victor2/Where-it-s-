import './App.css'
import { Routes, Route } from 'react-router-dom';


import Footer from './components/footerComp/footer';
import HomePage from './pages/homePage/homePage';
import EventsPage from './pages/eventsPage/eventsPage';
import EventOrderPage from './pages/eventOrderPage/eventOrderPage';
import TicketsPage from './pages/ticketsPage/ticketsPage';
import OrderPage from './pages/orderPage/orderPage';

function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/eventsPage' element={<EventsPage />} />
        <Route path='/EventOrderPage' element={<EventOrderPage />} />
        <Route path='/TicketsPage' element={<TicketsPage />} />
        <Route path='/OrderPage' element={<OrderPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
