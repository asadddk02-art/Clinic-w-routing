import "./Home.css";
import { Link } from "react-router-dom";
import clinicImage from "./clinicc.png";

function Home() {
  return (
    <div
      className="home"
      style={{ backgroundImage: `url(${clinicImage})` }}
    >
      <div className="overlay">

        <header className="header">
          <h2>🏥 Clinic Management System</h2>
        </header>

        <div className="welcome">
          <h1>Clinic Management System</h1>

          <p>
            Manage patients, doctors, appointments and billing in one place.
          </p>
        </div>

        <div className="cards">

          <div className="card">
            <h2>Patient</h2>
            <p>Register patients and book appointments.</p>
          <Link to="/patient-menu">
          <button>Enter</button>
          </Link>
          </div>

          <div className="card">
            <h2>Doctor</h2>
            <p>Manage profiles, prescriptions and records.</p>
           <Link to="/doctor-menu">
           <button>Enter</button>
           </Link>
          </div>

          <div className="card">
            <h2>Receptionist</h2>
            <p>Handle check-in, billing and appointments.</p>
            <Link to="/receptionist-menu"><button>Enter</button>
            </Link>
          </div>

          <div className="card">
            <h2>Tables</h2>
            <p>View patients, appointments and bills.</p>
            <button>View Tables</button>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Home;