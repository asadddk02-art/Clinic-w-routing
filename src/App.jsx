import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home.jsx";
import PatientMenu from "./Patient/PatientMenu.jsx";

import PatientForm from "./Patient/patientform.jsx";
import AppointmentForm from "./Patient/AppointmentForm.jsx";
import Feedback from "./Patient/Feedback.jsx";

import DoctorMenu from "./Doc/DoctorMenu.jsx";
import DoctorProfile from "./Doc/DoctorProfile.jsx";
import MedicalRecord from "./Doc/MedicalRecord.jsx";
import Prescription from "./Doc/Prescription.jsx";

import ReceptionistMenu from "./Receptionist/ReceptionistMenu.jsx";
import PatientCheckIn from "./Receptionist/PatientCheckIn.jsx";
import Billing from "./Receptionist/Billing.jsx";
import AppointmentManagement from "./Receptionist/AppointmentManagement.jsx";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/patient-menu" element={<PatientMenu/>} />

        <Route path="/patient-registration" element={<PatientForm/>} />
        <Route path="/appointment" element={<AppointmentForm />} />
        <Route path="/feedback" element={<Feedback />} />


       <Route path="/doctor-menu" element={<DoctorMenu />} />
        <Route path="/doctor" element={<DoctorProfile />} />
        <Route path="/medical-record" element={<MedicalRecord />} />
        <Route path="/prescription" element={<Prescription />} />


<Route path= "/receptionist-menu" element={<ReceptionistMenu />} />
        <Route path="/check-in" element={<PatientCheckIn />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/appointment-management" element={<AppointmentManagement />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;