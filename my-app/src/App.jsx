import './App.css'
import { Routes, Route } from 'react-router-dom';


import Footer from './components/footerComp/footer';
import HomePage from './pages/homePage/homePage';
import EventsPage from './pages/eventsPage/eventsPage';

function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/eventsPage' element={<EventsPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
