import "./Doctor.css";
function MedicalRecord() {
  return (
   <form className="doctor-form">
      <h1>Medical Record</h1>

      <input
        type="text"
        placeholder="Patient Name"
      />

      <br /><br />

      <input
        type="text"
        placeholder="Diagnosis"
      />

      <br /><br />

      <textarea
        placeholder="Medical History"
        rows="5"
      ></textarea>

      <br /><br />

      <textarea
        placeholder="Doctor's Notes"
        rows="4"
      ></textarea>

      <br /><br />

      <button>Save Medical Record</button>
    </form>
  );
}

export default MedicalRecord;