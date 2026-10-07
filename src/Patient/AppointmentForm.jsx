import "./AppointmentForm.css";
function AppointmentForm() {
  return (
    <form className="appointment-form">
      <h1>Book Appointment</h1>

      <input type="text" placeholder="Patient Name" />

      <br /><br />

      <input type="date" />

      <br /><br />

      <button>Book Appointment</button>
    </form>
  );
}

export default AppointmentForm;