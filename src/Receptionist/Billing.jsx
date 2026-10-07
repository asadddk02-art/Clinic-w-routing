import "./Receptionist.css";
function Billing() {
  return (
  <form className="receptionist-form">
      <h1>Patient Billing</h1>

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
        type="number"
        placeholder="Consultation Fee"
      />

      <br /><br />

      <input
        type="number"
        placeholder="Medicine Charges"
      />

      <br /><br />

      <input
        type="number"
        placeholder="Other Charges"
      />

      <br /><br />

      <button>Generate Bill</button>
    </form>
  );
}

export default Billing;