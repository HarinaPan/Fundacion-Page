import Bienvenida from "../bienvenida/bienvenida"
import ComoParticipar from "../como-participar/ComoParticipar"
import Footer from "../footer/footer"
import NavBar from "../header/NavBar"
import Novedades from "../novedades/Novedades"
import QueHacemos from "../que-hacemos/QueHacemos"
import QuienesSomos from "../quienes-somos/QuienesSomos"
import Trabajadores from "../trabajadores/trabajadores"

const Home = () => {
  return <>
    <NavBar />
    <div className="row">
    <Bienvenida />
    </div>
    <div>
    <div className="row">
    <QuienesSomos />
    </div>
    <div className="row">
    <QueHacemos />
    </div>
    <div className="row">
      <ComoParticipar />
    </div>
    <div className="row">
    <Novedades />
    </div>
    <div className="row">
    <Trabajadores />
    </div>
    </div>
    <Footer />
  </>
}

export default Home