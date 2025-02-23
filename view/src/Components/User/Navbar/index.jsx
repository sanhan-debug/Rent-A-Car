import React from "react";
import { Navbar, Nav, Container, Form, FormControl, Button, Badge } from "react-bootstrap";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../../utils/axios';
import { toast } from 'react-hot-toast';

const NavigationBar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = async () => {
    try {
      await api.post('/auth/logout');
      localStorage.clear();
      toast.success('Logged out successfully');
      navigate('/login');
    } catch (error) {
      toast.error('Logout failed');
    }
  };

  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand as={Link} to="/" className="text-success h1">
          SS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/cars">Cars</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center">
            <Form className="d-lg-none d-flex me-3">
              <FormControl type="text" placeholder="Search ..." className="me-2" />
              <Button variant="outline-success">
                <FaSearch />
              </Button>
            </Form>
            <Nav.Link href="#" className="d-none d-lg-block">
              <FaSearch className="text-dark" />
            </Nav.Link>
            <Nav.Link href="#" className="position-relative">
              <FaShoppingCart className="text-dark" />
              <Badge bg="light" text="dark" className="position-absolute top-0 start-100 translate-middle">
                7
              </Badge>
            </Nav.Link>
            <Nav.Link href="#" className="position-relative">
              <FaUser className="text-dark" />
              <Badge bg="light" text="dark" className="position-absolute top-0 start-100 translate-middle">
                +99
              </Badge>
            </Nav.Link>
          </div>
          <Nav>
            {user ? (
              <div className="d-flex align-items-center">
                <span className="text-light me-3">
                  Welcome, {user.username}
                </span>
                <Button 
                  variant="outline-light" 
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </div>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
