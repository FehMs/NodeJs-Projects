import './Assistencias.css'
import {BsBicycle} from "react-icons/bs" 
import iconbike from '../images/iconbike.png'

export default function Assistencia(){
    return(
        <div className="container">
            <div className='headerAssistencias'><h2>Assistências</h2></div>
            <div className='body'>
                <div className='block'>
                    <img className="iconbike" src={iconbike} alt="icon-bike"></img>
                    <h3>ROUBO</h3> 
                    <p>Segurança contra Furto e roubo.</p>
                </div>
                <div className='block'></div>
                <div className='block'></div>
                <div className='block'></div>
            </div>
            <div className='footer'><p>Entre outros</p></div>
        </div>
    )
}