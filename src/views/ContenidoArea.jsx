import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSwatchbook, faObjectUngroup, faCamera, faCode } from '@fortawesome/free-solid-svg-icons'

function ContenidoArea() {
    return (
        <>
        <div className="area-contenido">
          <div className="acerca-area ps-4 pe-4 pt-4">
                <div className="acerca-area_titulo mb-5">
                     <h2>Acerca</h2>
                     <p>I'm Creative Director and UI/UX Designer
    from Sydney, Australia, working in web development and print media. I enjoy
    turning complex problems into simple, beautiful and intuitive designs.</p>
    <p>My aim is to bring across your message and
    identity in the most creative way. I created web design for many famous brand
    companies.</p>
                     
                </div>
          </div>
          <div className="acerca-area_descripcion ps-4 pe-4 mb-4">
            <div className="acerca-area_descripcion-titulo mb-3">
               <h3>Lo que hago</h3>
            </div>
                <div className="acerca-area_lo-que-hago mb-3">
                    <div className="row">

                        <div className="col-xxl-6 col-xl-6 col-lg-6 ">
                            <div className="acerca-lo-que-hago_item">
                                <div className="icono-acerca">
                                <FontAwesomeIcon icon={faSwatchbook} className='icono'/>
                                </div>
                                <div className="acerca-lo-que-hago_texto">
                                    <h4>Ui/Ux Design</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xxl-6 col-xl-6 col-lg-6 ">
                            <div className="acerca-lo-que-hago_item">
                                <div className="icono-acerca">
                                <FontAwesomeIcon icon={faObjectUngroup} className='icono'/>
                                </div>
                                <div className="acerca-lo-que-hago_texto">
                                    <h4>App Development</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xxl-6 col-xl-6 col-lg-6 ">
                            <div className="acerca-lo-que-hago_item">
                                <div className="icono-acerca">
                                <FontAwesomeIcon icon={faCamera} className='icono'/>
                                </div>
                                <div className="acerca-lo-que-hago_texto">
                                    <h4>photography</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xxl-6 col-xl-6 col-lg-6 ">
                            <div className="acerca-lo-que-hago_item">
                                <div className="icono-acerca">
                                <FontAwesomeIcon icon={faCode} className='icono'/>
                                </div>
                                <div className="acerca-lo-que-hago_texto">
                                    <h4>web development</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
          </div>
        </div>
        
        </>
    );
    
}

export default ContenidoArea;   