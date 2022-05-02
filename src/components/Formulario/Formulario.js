import React from 'react';


const Formulario = () => {
  return (
    <div>

           <div className='container'>

          <div class="row">
            <h1> Solicitud Ayuda </h1>  
            
          </div>

              <form>

                  <div class="row g-3">
                      <div class="col">
                        <input type="text" class="form-control" placeholder="Nombre" aria-label="Nombre"/>
                      </div>

                      <div class="col">
                        <input type="text" class="form-control" placeholder="Apellido" aria-label="Apellido"/>
                      </div>
                
                      <div class="form-group">
                        <label for="exampleInputEmail1">Correo Electronico</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <small id="emailHelp" class="form-text text-muted">Nunca compartiremos tu correo con nadie.</small>
                      </div>
                  </div>

                  <div class="row">
              
                      <div class="col-md-6">
                        <label for="inputCity" class="form-label">Ciudad</label>
                        <input type="text" class="form-control" id="inputCity"></input>
                      </div>

                      <div class="col-md-4">
                        <label for="inputState" class="form-label">Provincia</label>
                        <select id="inputState" class="form-select">
                          <option selected>Escoger Provincia</option>
                          <option>Buenos Aires</option>
                          <option>Ciudad Autónoma de Buenos Aires</option>
                          <option>Catamarca</option>
                          <option>Chaco</option>
                          <option>Chubut</option>
                          <option>Córdoba</option>
                          <option>Corrientes</option>
                          <option>Entre Ríos</option>
                          <option>Formosa</option>
                          <option>Jujuy</option>
                          <option>La Pampa</option>
                          <option>La Rioja</option>
                          <option>Mendoza</option>
                          <option>Misiones</option>
                          <option>Neuquén</option>
                          <option>Río Negro</option>
                          <option>Salta</option>
                          <option>San Juan</option>
                          <option>San Luis </option>
                          <option>Santa Cruz</option>
                          <option>Santa Fe</option>
                          <option>Santiago del Estero</option>
                          <option>Tierro del Fuego, Antárdita e Islas del Atlántico Sur</option>
                          <option>Tucumán</option>
                        </select>
                      </div>
                  </div>
            

                <div class="mb-3">
                          <label for="exampleFormControlTextarea1" class="form-label" placeholder="indique que tipo de ayuda solicita">Describa su caso</label>
                          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <div class="col-12">
                      <button type="submit" class="btn btn-primary">Enviar</button>
                </div>


              </form>

      </div>
    </div>
    


  )
}

export default Formulario