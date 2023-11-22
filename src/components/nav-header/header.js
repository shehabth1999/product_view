
import { useContext, useState } from 'react';
import { Navbar, Container, Nav, Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { BackgroundContext } from '../context/backgroundColor';
 import DropdownBTN from '../widgets/dropdown'

function NavScrollExample() {

  const {background,setBackground} = useContext(BackgroundContext)

  const handleChangeMode = ()=>{
    if (background === true){
      setBackground(false);
    }else{
      setBackground(true)
    }
  }
  
  return (
   
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>Products</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Item>
            <NavLink to="/" exact="true" className="nav-link " activeclassname ="active">
              Home
            </NavLink>
          </Nav.Item>

          <Nav.Item>
            <NavLink className="nav-link " activeclassname ="active">
              item:
            </NavLink>
          </Nav.Item>
          
          <Nav.Item style={{justifyContent:"end", paddingLeft:"1000px"}} >
            <NavLink to="/cart" className="nav-link" activeclassname ="active">
              Cart
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/Register" className="nav-link" activeclassname ="active">
              Login
            </NavLink>
          </Nav.Item>
          <Nav.Item>
          <button onClick={handleChangeMode} className={`btn ${background? 'btn-light':'btn-dark'} `}>{background ? 'Light' : 'Dark'}</button>
          </Nav.Item>
          <Nav.Item>
            <DropdownBTN></DropdownBTN>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
