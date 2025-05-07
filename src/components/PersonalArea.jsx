import parsonalImg from '../assets/img/yo_n.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLinkedinIn,faGithub } from '@fortawesome/free-brands-svg-icons'
import { faMobileScreen, faEnvelopeOpenText, faLocationDot, faDownload } from '@fortawesome/free-solid-svg-icons'
function PersonalArea() {
    return (
        <>
        <div className="personal-area">
            <div className="personal-area-wrap">

            <div className="personal-area_info">
                <div className="personal-img">
                    <img src={parsonalImg} alt="yo" />
                </div>
            </div>
            <h4 className="personal-area_info-nombre">Luis Valladares</h4>
            <span className="personal-area_info-bio">Desarrollador FullStack</span>
            <ul className="personal-area_social-link">
                <li><FontAwesomeIcon icon={faGithub} /></li>
                <li><FontAwesomeIcon icon={faLinkedinIn} /></li>
                
            </ul>
            <div className="personal-area_contacto">
                <div className="personal-area_contacto_item">
                    <div className="icon">
                    <FontAwesomeIcon icon={faMobileScreen} />
                    </div>
                    <div className="texto">
                        <span>Móvil</span>
                        <p>+56 9 8996 2985</p>
                    </div>
                </div>
                <div className="personal-area_contacto_item">
                <div className="icon">
                <FontAwesomeIcon icon={faEnvelopeOpenText} />
                    </div>
                    <div className="texto">
                        <span>Email</span>
                        <p>luisvalladares79@gmail.com</p>
                    </div>
                </div>
                <div className="personal-area_contacto_item">
                <div className="icon">
                <FontAwesomeIcon icon={faLocationDot} />
                    </div>
                    <div className="texto">
                        <span>Localidad</span>
                        <p>Santiago Chile</p>
                    </div>
                </div>
                
            </div>
            <div className="personal-area_boton">
            <a className="btn-2" href="/MiCV.pdf" download>
            <span className="icon">
            <FontAwesomeIcon icon={faDownload} />
                </span>download cv</a>
            </div>
            
            </div>
        </div>
        
        </>
    );
    
}

export default PersonalArea;