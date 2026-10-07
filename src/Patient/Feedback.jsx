import "./Feedback.css";

function Feedback() {
  return (
    <form className="feedback-form">
      <h1>Patient Feedback</h1>

      <input type="text" placeholder="Patient Name" />

      <br /><br />

      <select>
        <option>Select Rating</option>
        <option>Excellent</option>
        <option>Good</option>
        <option>Average</option>
        <option>Poor</option>
      </select>

      <br /><br />

      <textarea
        placeholder="Write your feedback"
        rows="5"
      ></textarea>

      <br /><br />

      <button>Submit Feedback</button>
    </form>
  );
}

export default Feedback;