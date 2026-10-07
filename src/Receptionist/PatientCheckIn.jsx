
import "./Receptionist.css";
function PatientCheckIn() {
  return (
  <form className="receptionist-form">
      <h1>Patient Check-in</h1>

      <input
        type="text"
        placeholder="Patient Name"
      />

      <br /><br />

      <input
        type="text"
        placeholder="Patient ID"
      />

      <br /><br />

      <input
        type="date"
      />

      <br /><br />

      <input
        type="time"
      />

      <br /><br />

      <button>Check In Patient</button>
    </form>
  );
}

export default PatientCheckIn;