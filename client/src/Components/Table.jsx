import Table from 'react-bootstrap/Table';

function Tables({ exams }) {

  const examItems = exams.map(each => (
  <tr>
    <td>{each.patientId}</td>
    <td>{each.examId}</td>
    <td>{"Xray Image here"}</td>
    <td>{"First Name here"}</td>
    <td>{each.keyFindings}</td>
    <td>{each.brixiaScores}</td>
    <td>{each.age}</td>
    <td>{each.sex}</td>
    <td>{each.bmi}</td>
    <td>{each.zipCode}</td>
  </tr>

  ))
//console.log(exams)
let output = [];
exams.forEach(exam => output.push(exam))

// console.log(output)

  return (
    <Table striped="columns">
      <thead>
        <tr>
          <th>Patient ID</th>
          <th>Exam ID</th>
          <th>Image</th>
          <th>First Name</th>
          <th>Key Findings</th>
          <th>Brixia Scores</th>
          <th>Age</th>
          <th>Sex</th>
          <th>BMI</th>
          <th>ZipCode</th>
        </tr>
      </thead>
      <tbody>
          {examItems}
      </tbody>
    </Table>
  );
}

export default Tables;