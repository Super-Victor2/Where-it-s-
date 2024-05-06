import './homeSection.css';
import LogoImg from '../../assets/logo.png';

function homeSection() {
    return (
      <section>
        <img src={LogoImg} alt="img" />
        <h1>Ticketing made easy</h1>
      </section>
    )
  }
  
  export default homeSection;