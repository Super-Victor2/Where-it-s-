import './homeSection.css';
import LogoImg from '../../assets/logo.png';

function homeSection() {
    return (
      <section className='home-wrapper'>
        <img src={LogoImg} alt="img" />
        <h1 className='colored-title'>Where it's @</h1>
        <h1 className='basic-title'>Ticketing made easy</h1>
      </section>
    )
  }
  
  export default homeSection;