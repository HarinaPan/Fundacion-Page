
const MembersTab = () => {
  return (
    <div className="container">
    <h2>Miembros</h2>
    <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Rol</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Franco</td>
        <td>front</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Otto</td>
        <td>front</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Nacho</td>
        <td>???</td>
      </tr>
    </tbody>
  </table>
  </div>
  )
}

export default MembersTab