import { Link } from "react-router-dom";

function ReceptionistMenu() {
  return (
    <>
      <h1>Receptionist Section</h1>

      <Link to="/check-in">
        <button>Patient Check-In</button>
      </Link>
<br /><br />
      <Link to="/billing">
        <button>Billing</button>
      </Link>
<br /><br />
      <Link to="/appointment-management">
        <button>Appointment Management</button>
      </Link>
    </>
  );
}

export default ReceptionistMenu;