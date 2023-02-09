import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';


const navBar1 = (
    <Navbar bg="bg-secondary" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/exams">OHIF</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/exams">Exams</Nav.Link>
            <Nav.Link href="/admin">Admin</Nav.Link>
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
            <Button variant="outline-success">New </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  
function NavBar() {
  return (
    //React Fragments
    <>
        {navBar1}
        {navBar2}
        {/* {navBar3} */}
    </>
  );
}

export default NavBar;