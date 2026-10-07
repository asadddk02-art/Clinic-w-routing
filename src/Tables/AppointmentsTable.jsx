import "./Tables.css";
function AppointmentsTable() {
  return (
    <div className="tables-container">
      <h1>Appointments</h1>

      <table border="1">
        <thead>
          <tr>
            <th>Appointment ID</th>
            <th>Patient</th>
            <th>Doctor</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>A001</td>
            <td>Ali Khan</td>
            <td>Dr. Ahmed</td>
            <td>2026-10-01</td>
            <td>Confirmed</td>
          </tr>

          <tr>
            <td>A002</td>
            <td>Ahmed Raza</td>
            <td>Dr. Sara</td>
            <td>2026-10-02</td>
            <td>Pending</td>
          </tr>

          <tr>
            <td>A003</td>
            <td>Hassan Ali</td>
            <td>Dr. Ahmed</td>
            <td>2026-10-03</td>
            <td>Confirmed</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AppointmentsTable;