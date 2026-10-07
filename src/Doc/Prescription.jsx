import "./Doctor.css";
function Prescription() {
  return (
 <form className="doctor-form">
      <h1>Prescription</h1>

      <input
        type="text"
        placeholder="Patient Name"
      />

      <br /><br />

      <input
        type="text"
        placeholder="Medicine Name"
      />

      <br /><br />

      <input
        type="text"
        placeholder="Dosage"
      />

      <br /><br />

      <textarea
        placeholder="Doctor's Instructions"
        rows="4"
      ></textarea>

      <br /><br />

      <button>Save Prescription</button>
    </form>
  );
}

export default Prescription;