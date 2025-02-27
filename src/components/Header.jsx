import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import Logo from '../assets/img/logo-bostami.png'   
function Header() {
    return (
       <div className="container">
       <div className="row">
        <div className="col-6">
            <a className="logo" href=""><img src={Logo} alt="" /></a>
        </div>
        <div className="col-6">
            <div className="modo">
        <FontAwesomeIcon icon={faMoon} />
            </div>
        </div>
       </div>
       <div className="menu-movil"></div>
       </div>
       
    );
    
}

export default Header;          