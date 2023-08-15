import logo from './logo.svg';
import './App.css';
import logoheader from './images/logo.png'
import {BiUserCircle} from "react-icons/bi";

function reader() {
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
          <BiUserCircle size={55}/>
        </div>
        <div className='login'>
          <a href=''>Entrar</a>
          <a href=''>Registrar-se</a>
        </div>
      </div>
    </div>
      
  );
}
function banner() {
  <div className='banner'>
    
  </div>
}

export default reader;
