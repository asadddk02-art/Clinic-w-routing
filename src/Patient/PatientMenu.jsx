import { Link } from "react-router-dom";

function PatientMenu() {
  return (
    <div>
      <h1>Patient Section</h1>

      <Link to="/patient-registration">
        <button>Patient Registration</button>
      </Link>

      <br /><br />

      <Link to="/appointment">
        <button>Book Appointment</button>
      </Link>

      <br /><br />

      <Link to="/feedback">
        <button>Patient Feedback</button>
      </Link>
    </div>
  );
}

export default PatientMenu;