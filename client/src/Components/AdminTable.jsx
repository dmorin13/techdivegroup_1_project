import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
//import { useNavigate } from 'react-router-dom';

function AdminTable({ exams }) {

  // //

  const examItems = exams ? exams.map(each => ( 
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
    {/* <td><Link to={`/details/${each._id}`}><Button  variant="outline-success">Details</Button>{' '}</Link></td> */}
    <td><a href={`/details/${each._id}`} target="_self" ><Button  variant="outline-success">Details</Button>{' '}</a></td>
  </tr>
  )) : <div>404 Error</div>


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
          <th>Details</th>
        </tr>
      </thead>
      <tbody>       
          {examItems}  
      </tbody>
    </Table>
  );
}

export default AdminTable;