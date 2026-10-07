
import { Link } from "react-router-dom";

function DoctorMenu() {
  return (
    <div>
      <h1>Doctor Section</h1>

      <Link to="/doctor">
        <button>Doctor Profile</button>
      </Link>

      <br /><br />

      <Link to="/medical-record">
        <button>Medical Record</button>
      </Link>

      <br /><br />

      <Link to="/prescription">
        <button>Prescription</button>
      </Link>
    </div>
  );
}

export default DoctorMenu;
