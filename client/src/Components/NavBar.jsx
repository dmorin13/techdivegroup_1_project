import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';


const navBar1 = (
    <Navbar bg="bg-secondary" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">OHIF</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Exams</Nav.Link>
            <Nav.Link href="#action2">Admin</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

  const navBar2 = (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Collapse className="justify-content-center" id="navbarScroll">
          <Form className="d-flex ">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

const navBar3 = (
    <Navbar bg="light" expand="lg">
        {/* <Navbar.Brand href="#">Techie Turnup</Navbar.Brand> */}
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link  style={{ paddingRight: '65px', paddingLeft: '65px' }} href="#action1">Patient ID</Nav.Link>
            <Nav.Link style={{ paddingRight: '65px' }} href="#action2">Exam ID</Nav.Link>
            <Nav.Link style={{ paddingRight: '65px' }} href="#action1">Image</Nav.Link>
            <Nav.Link  style={{ paddingRight: '65px' }} href="#action2">Key Findings</Nav.Link>
            <Nav.Link style={{ paddingRight: '65px' }} href="#action1">Brixia Score</Nav.Link>
            <Nav.Link style={{ paddingRight: '65px' }} href="#action1">Age</Nav.Link>
            <Nav.Link style={{ paddingRight: '65px' }} href="#action2">Sex</Nav.Link>
            <Nav.Link style={{ paddingRight: '65px' }} href="#action2">BMI</Nav.Link>
            <Nav.Link style={{ paddingRight: '65px' }} href="#action1">Zip Code</Nav.Link>
          </Nav>
    </Navbar>
  );
  
function NavBar() {
  return (
    <>
        {navBar1}
        {navBar2}
        {navBar3}
    </>
  );
}

export default NavBar;