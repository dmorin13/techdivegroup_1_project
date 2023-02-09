import Table from 'react-bootstrap/Table';
// import Button from 'react-bootstrap/Button';

function Tables({ exams }) {

  const examItems = exams.map(each => (
      <tr key={each._id} >
        <td >{each.patientId}</td>
        <td>{each.examId}</td>
        <td><img 
            src={each.imageURL} 
            alt="an xray of the patient" 
            style={{ width: 50, height: 50}}
            ></img></td>
        <td>{each.keyFindings}</td>
        <td>{each.brixiaScores}</td>
        <td>{each.age}</td>
        <td>{each.sex}</td>
        <td>{each.bmi}</td>
        <td>{each.zipCode}</td>
        {/* <td><Button variant="outline-success">Details</Button>{' '}</td> */}
      </tr>
  ))
// console.log(output)

  return (
    <Table striped="columns">
      <thead>
        <tr>
          <th>Patient ID</th>
          <th>Exam ID</th>
          <th>Image</th>
          <th>Key Findings</th>
          <th>Brixia Scores</th>
          <th>Age</th>
          <th>Sex</th>
          <th>BMI</th>
          <th>ZipCode</th>
          {/* <th>Details</th> */}
        </tr>
      </thead>
      <tbody>       
          {examItems}
      </tbody>
    </Table>
  );
}

export default Tables;