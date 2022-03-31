import React from 'react';
import { Navbar,Nav,Container,NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const navigates = useNavigate();

  const user = JSON.parse(localStorage.getItem('users'))
  //  console.warn(user.name)

  function Logout(){
    localStorage.clear();
    navigates("/login");
  }
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
        {/* <Link to="/register" className="mr-auto my-2  p-2 my-lg-0 ">Register</Link> */}
        <Link to="/list" className="mr-auto my-2  p-2 my-lg-0 ">List</Link>
        <Link to="/login" className="mr-auto my-2  p-2 my-lg-0 ">Login</Link>  
        <Link to="/test2" className="mr-auto my-2  p-2 my-lg-0 ">Test2</Link>  
             
   
      </Nav>
      <Nav>
        {
          localStorage.getItem('users') ?
        <NavDropdown title={user && user.name} id="basic-nav-dropdown">
        <NavDropdown.Item onClick={Logout}>Logout</NavDropdown.Item>
        <NavDropdown.Item>Profile</NavDropdown.Item> 
        </NavDropdown>
        :null
}
      </Nav>
 
    </Navbar.Collapse>
  </Container>
</Navbar>

    </>

     );
}
 
export default Header;