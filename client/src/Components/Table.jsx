import Table from 'react-bootstrap/Table';

function Tables() {
  return (
    <Table striped="columns">
      <thead>
        <tr>
          <th>Patient ID</th>
          <th>Exam ID</th>
          <th>Image</th>
          <th>First Name</th>
          <th>Key Findings</th>
          <th>Brixia Score</th>
          <th>Age</th>
          <th>Sex</th>
          <th>BMI</th>
          <th>ZipCode</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>1</td>
          <td>Mark</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Tables;