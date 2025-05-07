import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSchool, faBriefcase } from '@fortawesome/free-solid-svg-icons'

function Resumen() {
    return (
       <>
     <div className="area-contenido">
            <div className="resumen-area ps-4 pe-4 pt-4">
                 
                <div className="resumen-area_descripcion ps-4 pe-4 mb-4">
                  <div className="row">
                    <div className="col-xl-6 col-lg-7">
                      <div className="resumen-area_descricion-titulo">
                       <h4>  <span><FontAwesomeIcon icon={faSchool} className='icono'/></span> Educación</h4>
                      </div>
                      <div className="resumen-area_card">
                        <div className="resumen-area_card-item mb-2">
                        <span>2023 - 2024</span>
                         <h6>Desafio latam</h6>
                        <p>Desarrollador Full Stack JavaScript</p>
                        </div>
                        <div className="resumen-area_card-item mb-2">
                        <span>2016 - 2017</span>
                         <h6>Instituto Comunicacion web UNEWEB</h6>
                        <p>Diplomado de programación web</p>
                        </div>
                        <div className="resumen-area_card-item mb-2">
                        <span>2005 - 2008</span>
                         <h6>C.I.D.I.G centro instituto de diseño gráfico</h6>
                        <p>Diseñador Gráfico</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-5">
                    <div className="resumen-area_descricion-titulo">
                       <h4>  <span><FontAwesomeIcon icon={faBriefcase} className='icono'/></span> Experiencia</h4>
                      </div>
                      <div className="resumen-area_card">
                        <div className="resumen-area_card-item mb-2">
                        <span>2022 - 2023</span>
                         <h6>Desarrollador Web</h6>
                        <p>Infova LATAM</p>
                        </div>
                        <div className="resumen-area_card-item mb-2">
                        <span>2021</span>
                         <h6>Desarrollador Web</h6>
                        <p>Click Market SPA</p>
                        </div>
                        <div className="resumen-area_card-item mb-2">
                        <span>2017 - 2020</span>
                         <h6>Freelance</h6>
                        <p>Proyectos Freelance</p>
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