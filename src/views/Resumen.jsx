import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSchool, faBriefcase } from '@fortawesome/free-solid-svg-icons'

function Resumen() {
    return (
       <>
     <div className="area-contenido">
            <div className="resumen-area ps-4 pe-4 pt-4">
                <div className="resumen-area_titulo">
                     <h2>Resumen</h2>
                </div>
                <div className="resumen-area_descripcion ps-4 pe-4 mb-4">
                  <div className="row">
                    <div className="col-xl-6 col-lg-7">
                      <div className="resumen-area_descricion-titulo">
                       <h4>  <span><FontAwesomeIcon icon={faSchool} className='icono'/></span> Educación</h4>
                      </div>
                      <div className="resumen-area_card">
                        <div className="resumen-area_card-item mb-2">
                        <span>2002 - 2003</span>
                         <h6>estudio Trabajo</h6>
                        <p>Los Angeles, CA</p>
                        </div>
                        <div className="resumen-area_card-item mb-2">
                        <span>2002 - 2003</span>
                         <h6>estudio trabajo</h6>
                        <p>Los Angeles, CA</p>
                        </div>
                        <div className="resumen-area_card-item mb-2">
                        <span>2002 - 2003</span>
                         <h6>estudio trabajo</h6>
                        <p>Los Angeles, CA</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-5">
                    <div className="resumen-area_descricion-titulo">
                       <h4>  <span><FontAwesomeIcon icon={faBriefcase} className='icono'/></span> Experiencia</h4>
                      </div>
                      <div className="resumen-area_card">
                        <div className="resumen-area_card-item mb-2">
                        <span>2002 - 2003</span>
                         <h6>estudio universidad</h6>
                        <p>Los Angeles, CA</p>
                        </div>
                        <div className="resumen-area_card-item mb-2">
                        <span>2002 - 2003</span>
                         <h6>estudio universidad</h6>
                        <p>Los Angeles, CA</p>
                        </div>
                        <div className="resumen-area_card-item mb-2">
                        <span>2002 - 2003</span>
                         <h6>estudio universidad</h6>
                        <p>Los Angeles, CA</p>
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

export default Resumen;