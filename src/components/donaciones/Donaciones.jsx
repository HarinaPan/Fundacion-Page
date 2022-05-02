import NavBar from "../header/NavBar"

const Donaciones = () => {
  return <>
    <NavBar />
    <div>
      <div className="container" >
        <h2>Es muy simple y seguro donar. Ademas con su donación nos ayuda a sumar esfuerzos.</h2>
      <div/>
      <div className="" style={{ float:`left` }}>
        <div> <h6> Esto es todo lo que hemos hecho gracias a sus apoyos y sus donaciones: <br/> • 26 años de compromiso con la solidaridad. <br/> • 7 hogares de niños fundados para niños en riesgo. <br/> • 2 Escuelas fundadas para niños con discapacidad severa. <br/> • 3714 niños con derechos vulnerados atendidos durante 17 años. <br/> • 1117 Acciones directas individuales. </h6>
        </div>
        <div>
        <h6> Y hoy día, gracias a tu aporte actual, podemos llevar adelante estos 5 programas: <br/> • Centro Educativo Terapéutico para niños y jóvenes con discapacidad. <br/> • Centro Cultural de formación artística para toda la familia. <br/> • Gabinete psicopedagógico itinerante para escuelas rurales. <br/> • Ayuda directa sobre necesidades puntuales. <br/> • Voluntariado social. </h6>
        </div>
      </div>
      <div className="video">
        <iframe width="480" height="270" src="https://www.youtube.com/embed/9DFxWggsb98?feature=oembed" frameBorder="0" allowFullScreen="allowFullScreen" title="FundacionBR"> </iframe>
      </div>
    </div>
    <div className="container">
      <h6> Te das cuenta lo importante que es tu participación para nosotros?  Así que por favor, compartí y ayudanos a ayudar!</h6>
    </div>

      <form action="">
        <div className="container">
            <label className="from-label" for="inputDefault"><h6>Por qué quiere donar? </h6></label>
            <textarea type="textarea" className="form-control" placeholder="Cuentenos aquí" id="razones"></textarea>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label className="col-form-label" for="nombre"><h6>Nombre:</h6></label>
                <input type="text" className="form-control" placeholder="Ingrese su nombre" id="nombre" />
              </div>
              <div className="mb-3">
                <label for="emailDonador" className="form-label"><h6>Email:</h6></label>
                <input type="email" className="form-control" id="emailDonador" placeholder="ejemplo@gmail.com" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="col-form-label" for="apellido"><h6>Apellido:</h6></label>
                <input type="text" className="form-control" placeholder="Ingrese su apellido" id="apellido" />
              </div>
              <div className="mb-3">
                <label for="numeroDeTelefono" className="form-label"><h6>Numero de celular</h6></label>
                <input type="number" className="form-control" id="numeroDeTelefono" placeholder="+54 11 9999-999" />
              </div>
            </div>
          </div>

          <div className="container">
            <div><h5> Cuanto deseas donar?</h5></div>
            <div><h6>Los montos están expresados en Pesos Argentinos (ARS$)</h6></div>
            <ul className="flex container--montos">
              <li className="amount-option">
                <div className="box-option button">$300,00</div>
              </li>
              <li className="amount-option">
                <div className="box-option button">$500,00</div>
              </li>
              <li className="amount-option">
                <div className="box-option button">$800,00</div>
              </li>
              <li className="amount-option">
                <div className="box-option button">$1.000,00</div>
              </li>
              <li className="amount-option">
                <div className="box-option button">$2.000,00</div>
              </li>
              <li className="amount-option">
                <div className="box-option button">
                  <input name="customAmount" type="text" className="box-option ph-center" placeholder="Otro Monto"></input>
                </div>
              </li>
            </ul>
          </div>

          <div>
                <h5> ¿Con qué frecuencia desea donar? </h5>
          </div>
          <div className="wrap">
            <form action="" className="formulario">
              <div className="radio">
                <input type="radio" name="size" id="radio1"/>
                <label for="radio1">Única vez</label>
                <input type="radio" name="size" id="radio2"/>
                <label for="radio2">Mensual</label>
              </div>
            </form>
          </div>

          {/*seccion elección metodo de donación */}
          <div className="container">
            <div><h6> Por favor, elija su metodo de donación para ayudarnos</h6></div>
            <select className="form-select" aria-label="Default select example">
              <option value="mercadopago">MercadoPago</option>
              <option value="tarjeta">Tarjeta de credito</option>
              <option value="transferencia">Transferencia Bancaria</option>
            </select>
          </div>
          <div><h5> Datos Personales</h5></div>

          {/* Tarjeta de credito */}

          <div>
            <div className="truncate">
              <label className="" title="Número de la tarjeta" for="payment_method_number">Número de la tarjeta</label>
              <input type="number" className="" id="payment_method_number" autoComplete="off" placeholder="●●●● ●●●● ●●●● ●●●●"></input>
            </div>

            <div></div>

            <div></div>
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