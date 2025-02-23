import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import api from '../../../utils/axios';

const AdminNavbar = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    const handleLogout = async () => {
        try {
            await api.post('/auth/logout');
            localStorage.clear();
            toast.success('Logged out successfully');
            navigate('/login');
        } catch (error) {
            localStorage.clear();
            navigate('/login');
        }
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
            <Container>
                <Navbar.Brand as={Link} to="/admin">Admin Panel</Navbar.Brand>
                <Navbar.Toggle aria-controls="admin-navbar" />
                <Navbar.Collapse id="admin-navbar">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/admin/dashboard">Dashboard</Nav.Link>
                        <Nav.Link as={Link} to="/admin/add-car">Add Car</Nav.Link>
                    </Nav>
                    <Nav>
                        <div className="d-flex align-items-center">
                            <span className="text-light me-3">
                                Welcome, {user.username}
                            </span>
                            <Nav.Link onClick={handleLogout} className="text-danger">
                                Logout
                            </Nav.Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AdminNavbar; 