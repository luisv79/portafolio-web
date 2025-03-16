import Imagen from '../assets/img/img.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faUser, faCode, faArrowUpRightFromSquare, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
function Works() {
    return (
        <>
        <div className="area-contenido">
        <div className="trabajos-area ps-4 pe-4 pt-4">
        <div className="trabajos-area_titulo mb-5">
            <h2>Portafolio</h2>
        </div>
        <div className="trabajos-area_descripcion ps-4 pe-4 mb-4">
          <div className="row">
            <div className="col-12">
                <p>portafolio</p>
            </div>
            <div className="col-12">
                <div className="trabajos-portafolio">
                   <div className="trabajos-portafolio_muestras">
                    <div className="trabajos-portafolio_muestras-item">
                        <div className="trabajo-portafolio-cursor" data-bs-toggle="modal" data-bs-target="#exampleModal">

                       <div className="portafolio-item">
                        <img src={Imagen} alt="" />
                        <span>Landing Page</span>
                        <h6>Aura Diane</h6>
                       </div>
                        </div>

                       {/* Modal */}
                        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                            <div className="modal-content text-bg-dark">
                           
                             <div className="modal-body">
  <h6 className="modal-titulo">Chul urina</h6>
  <div className="portfolio-modal-table">
    <div className="row"><div className="col-md-6">
        <h3 className="portfolio-modal-table-text"><FontAwesomeIcon icon={faFile} /> Project : <span>website</span></h3>
      </div>
      <div className="col-md-6">
        <h3 className="portfolio-modal-table-text"><FontAwesomeIcon icon={faUser} /> Client : <span>Envato</span></h3>
      </div>
      <div className="col-md-6">
        <h3 className="portfolio-modal-table-text"><FontAwesomeIcon icon={faCode} /> Langages : <span>Photoshop, Figma</span></h3>
      </div>
      <div className="col-md-6">
        <h3 className="portfolio-modal-table-text"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Preview : <a href="#">www.envato.com</a></h3>
      </div>
    </div>
  </div>
  <div className="h1-modal-paragraph">
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum conseqr quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, enim corporis omnis doloremque soluta inventore
      dolorum consequuntur quo obcaecati rerum sit non.</p><p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consetur quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur.</p>
  </div>
  <div className="h1-modal-img">
    <img src={Imagen} alt="" />
  </div>
</div>

                            
                            </div>
                            
                          <div className="modal-header"><button type="button" className="close" data-bs-dismiss="modal"><FontAwesomeIcon icon={faCircleXmark} /></button></div>

                        </div>
                        </div>
                         {/* end modal */}
                    </div>
                    <div className="trabajos-portafolio_muestras-item">
                        <div className="trabajo-portafolio-cursor" data-bs-toggle="modal" data-bs-target="#exampleModal">

                       <div className="portafolio-item">
                        <img src={Imagen} alt="" />
                        <span>Landing Page</span>
                        <h6>Aura Diane</h6>
                       </div>
                        </div>

                       {/* Modal */}
                        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                ...
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                            </div>
                        </div>
                        </div>
                         {/* end modal */}
                    </div>
                    <div className="trabajos-portafolio_muestras-item">
                        <div className="trabajo-portafolio-cursor" data-bs-toggle="modal" data-bs-target="#exampleModal">

                       <div className="portafolio-item">
                        <img src={Imagen} alt="" />
                        <span>Landing Page</span>
                        <h6>Aura Diane</h6>
                       </div>
                        </div>

                       {/* Modal */}
                        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                ...
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                            </div>
                        </div>
                        </div>
                         {/* end modal */}
                    </div>
                    
                   </div>

                   <div className='trabajos-portafolio_muestras'>
                   <div className="trabajos-portafolio_muestras-item">
                        <div className="trabajo-portafolio-cursor" data-bs-toggle="modal" data-bs-target="#exampleModal">

                       <div className="portafolio-item">
                        <img src={Imagen} alt="" />
                        <span>Landing Page</span>
                        <h6>Aura Diane</h6>
                       </div>
                        </div>

                       {/* Modal */}
                        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                ...
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                            </div>
                        </div>
                        </div>
                         {/* end modal */}
                    </div>
                    <div className="trabajos-portafolio_muestras-item">
                        <div className="trabajo-portafolio-cursor" data-bs-toggle="modal" data-bs-target="#exampleModal">

                       <div className="portafolio-item">
                        <img src={Imagen} alt="" />
                        <span>Landing Page</span>
                        <h6>Aura Diane</h6>
                       </div>
                        </div>

                       {/* Modal */}
                        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                ...
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                            </div>
                        </div>
                        </div>
                         {/* end modal */}
                    </div>
                    <div className="trabajos-portafolio_muestras-item">
                        <div className="trabajo-portafolio-cursor" data-bs-toggle="modal" data-bs-target="#exampleModal">

                       <div className="portafolio-item">
                        <img src={Imagen} alt="" />
                        <span>Landing Page</span>
                        <h6>Aura Diane</h6>
                       </div>
                        </div>

                       {/* Modal */}
                        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                ...
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                            </div>
                        </div>
                        </div>
                         {/* end modal */}
                    </div>

                   </div>
                </div>
            </div>
          </div>
        </div>

        </div>
        </div>
        </>
    )
    
}

export default Works;