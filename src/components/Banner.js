import imgbanner from '../images/bannerhdc.png'
import './Banner.css'

export default function Banner(){
    return(
        <div className='banner'>
            <img className="banner" src={imgbanner} alt="banner"></img>
        </div>
    )
}