import Carrousel from "../home/Carrousel"


function Bienvenida(){
    return(
        <>
        <div className="container contenedorBienvenida">
            <section>
                <p className="colorTextoClaro textoBienvenida">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi provident dolores tempora ut recusandae, cupiditate quam autem rem voluptate quia?
            </p> 
            </section> 
            <section className="contenedorImagenBienvenida">
            <img src="https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/gallery/5b62e64d5bafe811a03c986a/ciudades.jpg" className="d-block imageCarouselContainer " width={"500px"}/>
            </section> 
        </div>
        </>
    )
}
export default Bienvenida