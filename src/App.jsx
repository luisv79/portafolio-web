import { Route, Routes } from "react-router-dom";

import Header from './components/Header'
import ContenidoArea from './views/ContenidoArea'
import Resumen from './views/Resumen'
import Works from './views/Works'
import Contacto from './views/Contacto'
import PersonalArea from './components/PersonalArea'
import Menu from './components/Menu'
function App() {


  return (
    <>
      <div>
        <main className="theme">
        <div className="page-home">
          <div className="header-area">
            <Header />  
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-4">
              <PersonalArea />
              </div>
              <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div>
                  < Menu />
                  <Routes>
                    <Route path="/" element={<ContenidoArea />} />
                    <Route path="/resumen" element={<Resumen />} />
                    <Route path="/Portafolio" element={<Works />} />
                    <Route path="/contacto" element={<Contacto />} />
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        </div>
        </main>
        </div>
    </>
  )
}

export default App
