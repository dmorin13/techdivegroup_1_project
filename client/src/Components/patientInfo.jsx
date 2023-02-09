import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';

function Info({ exams }) {

  const { id } = useParams();

  // let patientZero = exams.filter(exam => exam._id === id);
  // console.log("patientZero", patientZero);

  return (exams.filter(exam => exam._id === id).map(patient => (
    <Card  key={patient._id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={patient.imageURL} />
          <Card.Body >
            <Card.Img variant="top" src=""/>
            <Card.Title>{patient._id}</Card.Title>
            <h3>Key Findings:</h3>
            <p>
              {patient.keyFindings}
            </p>

            <h3>Exam ID:</h3>
            <p>
              {patient.examId}
            </p>

            <h3>BMI:</h3>
            <p>
              {patient.bmi}
            </p>

            <h3>Age</h3>
            <p>
              {patient.age}
            </p>

            <h3>Key Sex:</h3>
            <p>
              {patient.sex}
            </p>

            <h3>Key Findings:</h3>
            <p>
              {patient.zipCode}
            </p>

            <h3>Brixia Score:</h3>
            <p>
              {patient.brixiaScores}
            </p>
            {/* <Button  variant="outline-success">Edit Patient Info</Button> */}
            <a href={`/edit/${patient._id}`} target="_self" ><Button  variant="outline-success">Edit Patient Info</Button>{' '}</a>
          </Card.Body> 
      {/* ))} */}
    </Card>
    )) 
  );
}

export default Info;