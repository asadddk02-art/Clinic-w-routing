import "./Tables.css";
function BillsTable() {
  return (
    <div className="tables-container">
      <h1>Bills</h1>

      <table border="1">
        <thead>
          <tr>
            <th>Bill ID</th>
            <th>Patient</th>
            <th>Consultation Fee</th>
            <th>Medicine Charges</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>B001</td>
            <td>Ali Khan</td>
            <td>2000</td>
            <td>1500</td>
            <td>3500</td>
          </tr>

          <tr>
            <td>B002</td>
            <td>Ahmed Raza</td>
            <td>2500</td>
            <td>1000</td>
            <td>3500</td>
          </tr>

          <tr>
            <td>B003</td>
            <td>Hassan Ali</td>
            <td>2000</td>
            <td>2000</td>
            <td>4000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BillsTable;