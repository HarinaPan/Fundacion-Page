import DonationsTab from "./DonationsTab"
import MembersTab from "./MembersTab"

const AdminPage = () => {
  return (
    <div className="container">
      <h1>Bienvenido Admin</h1>
      <DonationsTab/>
      <MembersTab/>
    </div>
  )
}

export default AdminPage