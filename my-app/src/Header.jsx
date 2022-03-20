import React from 'react';
import { Navbar,Nav,Container} from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Header = () => {
    return ( 
    <>
      
<Navbar bg="dark" expand="lg" variant="dark">
  <Container fluid>
    <Navbar.Brand href="#">Laravel React</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="mx-auto my-2 my-lg-0 "
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Link to="/"  className="mr-auto my-2  p-2 my-lg-0 "     
        >Home</Link>
        <Link to="/register" className="mr-auto my-2  p-2 my-lg-0 ">Register</Link>
        <Link to="/login" className="mr-auto my-2  p-2 my-lg-0 ">Login</Link>
        <Link to="/list" className="mr-auto my-2  p-2 my-lg-0 ">List</Link>       
   
      </Nav>
 
    </Navbar.Collapse>
  </Container>
</Navbar>

    </>

     );
}
 
export default Header;