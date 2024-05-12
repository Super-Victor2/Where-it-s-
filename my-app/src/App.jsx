import './App.css'
import { Routes, Route } from 'react-router-dom';


import Footer from './components/footerComp/footer';
import HomePage from './pages/homePage/homePage';
import EventsPage from './pages/eventsPage/eventsPage';
import EventOrderPageOne from './pages/eventOrderPage/1';
import EventOrderPageTwo from './pages/eventOrderPage/2';
import EventOrderPageThree from './pages/eventOrderPage/3';
import EventOrderPageFour from './pages/eventOrderPage/4';
import EventOrderPageFive from './pages/eventOrderPage/5';
import TicketsPage from './pages/ticketsPage/ticketsPage';
import OrderPage from './pages/orderPage/orderPage';

function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/eventsPage' element={<EventsPage />} />
        <Route path='/EventOrderPageOne' element={<EventOrderPageOne />} />
        <Route path='/EventOrderPageTwo' element={<EventOrderPageTwo />} />
        <Route path='/EventOrderPageThree' element={<EventOrderPageThree />} />
        <Route path='/EventOrderPageFour' element={<EventOrderPageFour />} />
        <Route path='/EventOrderPageFive' element={<EventOrderPageFive />} />
        <Route path='/TicketsPage' element={<TicketsPage />} />
        <Route path='/OrderPage' element={<OrderPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
