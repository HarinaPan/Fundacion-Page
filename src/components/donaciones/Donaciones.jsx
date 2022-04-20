import NavBar from "../header/NavBar"
const Donaciones = () => {
  return <>
    <NavBar />
    <div className="container">
      <h2>Para realizar una donacion hacia nosotros llena el siguiente formulario</h2>
      <form action="">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label className="col-form-label" for="inputDefault"><h6>Nombre:</h6></label>
                <input type="text" className="form-control" placeholder="Ingrese su nombre" id="nombre" />
              </div>
              <div className="mb-3">
                <label for="emailDonador" className="form-label"><h6>Email:</h6></label>
                <input type="email" className="form-control" id="emailDonador" placeholder="ejemplo@gmail.com" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="col-form-label" for="inputDefault"><h6>Apellido:</h6></label>
                <input type="text" className="form-control" placeholder="Ingrese su apellido" id="apellido" />
              </div>
              <div className="mb-3">
                <label for="repetirEmailDonador" className="form-label"><h6>Repita su Email</h6></label>
                <input type="email" className="form-control" id="repetirEmailDonador" placeholder="ejemplo@gmail.com" />
              </div>
            </div>
          </div>
          <div className="container">
            <select className="form-select" aria-label="Default select example">
              <option selected>Elija su metodo de pago:</option>
              <option value="mercadopago">MercadoPago</option>
              <option value="tarjeta">Tarjeta de credito</option>
              <option value="transferencia">Transferencia Bancaria</option>
            </select>
          </div>
          <div className="buttonContainer mt-3 ">
            <button className="btn btn-primary">
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  </>
}

export default Donaciones