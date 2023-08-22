
import './App.css';
import logoheader from './images/logo.png'
import {FiUser} from "react-icons/fi";
import Banner from './components/Banner'

function Header() {
  return (
    <div className="header">
      <div className="logoheader">
        <img className="logo" src={logoheader} alt="logo"></img>
      </div>
      <nav className="navbar">
        <a href="">Home</a>
        <a href="">Sac</a>
        <a href="">Assistência</a>
      </nav>
      <div className="login-wrapper">
        <div className='icon'>
          <FiUser size={35}/>
        </div>
        <div className='login'>
          <a href=''>Entrar</a>
          <a href=''>Registrar-se</a>
        </div>
      </div>
    </div>
  );
}


export default Header;
