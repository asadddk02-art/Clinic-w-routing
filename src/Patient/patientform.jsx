import "./PatientForm.css";

function PatientForm() {
  return (
    <form className="patient-form">
      <h1>Patient Registration</h1>

      <input type="text" placeholder="Enter your name" />

      <br /><br />

      <input type="number" placeholder="Enter your age" />

      <br /><br />

      <button>Register</button>
    </form>
  );
}

export default PatientForm;