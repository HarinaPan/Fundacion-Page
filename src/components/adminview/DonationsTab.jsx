import { useEffect, useState } from "react"
import DonationsRow from "./DonationsRow"
const DonationsTab = () => {
    const [ donatorsList, setDonatorsList] = useState({})
    const arrayTest = [
        {
            nombre: "franco",
            apellido:"vial",
            email: "franco@gmail.com",
            metodoPago: "tarjetaCred",
            monto: 99
        },
        {
            nombre:"oto",
            apellido:"apellid1",
            email:"oto@gmail.com",
            metodoPago:"mercadoPago",
            monto: 99

        },
        {
            nombre:"noel",
            apellido:"mateo",
            email:"noel@gmail.com",
            metodoPago:"transferencia",
            monto: 99

        }
    ]
    useEffect(() => {
        setDonatorsList(arrayTest)
    }, [])
    
  return (
    <div className="container">
    <h2>Historial de Donaciones</h2>

    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">Email</th>
          <th scope="col">Metodo de Pago</th>
          <th scope="col">Monto</th>
        </tr>
      </thead>
      <tbody>
        {
            arrayTest.map(element => <DonationsRow element ={element}/>)
        }
    </tbody>
      
    {/*   <GenericTab obj={objTest}/> */}
    </table>
    </div>
  )
}

export default DonationsTab