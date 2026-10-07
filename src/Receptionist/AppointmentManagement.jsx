import "./Receptionist.css";
function AppointmentManagement() {
  return (
    <form className="receptionist-form">
      <h1>Appointment Management</h1>

      <input
        type="text"
        placeholder="Patient Name"
      />

      <br /><br />

      <input
        type="text"
        placeholder="Doctor Name"
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

      <select>
        <option>Select Status</option>
        <option>Confirmed</option>
        <option>Pending</option>
        <option>Cancelled</option>
      </select>

      <br /><br />

      <button>Update Appointment</button>
    </form>
  );
}

export default AppointmentManagement;