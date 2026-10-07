import "./Doctor.css";
function DoctorProfile() {
  return (
  <form className="doctor-form">
      <h1>Doctor Profile</h1>

      <input
        type="text"
        placeholder="Doctor Name"
      />

      <br /><br />

      <input
        type="text"
        placeholder="Specialization"
      />

      <br /><br />

      <input
        type="text"
        placeholder="Qualification"
      />

      <br /><br />

      <input
        type="text"
        placeholder="Contact Number"
      />

      <br /><br />

      <button>Save Profile</button>
    </form>
  );
}

export default DoctorProfile;