import ComoParticipar from "../como-participar/ComoParticipar"
import Footer from "../footer/footer"
import NavBar from "../header/NavBar"
import Novedades from "../novedades/Novedades"
import QueHacemos from "../que-hacemos/QueHacemos"
import QuienesSomos from "../quienes-somos/QuienesSomos"
const Home = () => {
  return <>
    <NavBar />
    <h1>Este es el Home</h1>
    <div id="carouselExampleControls" className="carousel slide carouselContainer" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active carouselContainer">
          <img src="https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/gallery/5b62e64d5bafe811a03c986a/ciudades.jpg" className="d-block imageCarouselContainer " alt="..."/>
        </div>
        <div className="carousel-item carouselContainer">
          <img src="https://www.eltiempo.com/files/article_multimedia/uploads/2020/10/26/5f9733beb5a6d.png" className="d-block imageCarouselContainer " alt="..."/>
        </div>
        <div className="carousel-item carouselContainer">
          <img src="https://diarioresponsable.com/images/CLARA_NUEVA/IA_Ciudades.jpg" className="d-block imageCarouselContainer" alt="..."/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
    </div>
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
    
    <Footer />
  </>
}

export default Home