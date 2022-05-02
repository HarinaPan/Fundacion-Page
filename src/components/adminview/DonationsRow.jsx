

const DonationsRow = ({element}) => {
  return (
    <tr>
        <td>
             {element.nombre}
        </td>
        <td>
             {element.apellido}
        </td>
        <td>
             {element.email}
        </td>
        <td>
             {element.metodoPago}
        </td>
        <td>
             {element.monto}
        </td>
    </tr>
   )
}

export default DonationsRow