import "./Tables.css";
function PatientsTable() {
  return (
    <div className="tables-container">
      <h1>Patients</h1>

      <table border="1">
        <thead>
          <tr>
            <th>Patient ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Contact</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>P001</td>
            <td>Ali Khan</td>
            <td>25</td>
            <td>03001234567</td>
          </tr>

          <tr>
            <td>P002</td>
            <td>Ahmed Raza</td>
            <td>32</td>
            <td>03111234567</td>
          </tr>

          <tr>
            <td>P003</td>
            <td>Hassan Ali</td>
            <td>41</td>
            <td>03221234567</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PatientsTable;