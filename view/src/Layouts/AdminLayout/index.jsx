import { Outlet, Navigate, useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import api from '../../utils/axios';

const AdminLayout = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    const handleLogout = async () => {
        try {
            await api.post('/auth/logout');
            localStorage.clear();
            toast.success('Logged out successfully');
            navigate('/login');
        } catch (error) {
            if (!error.code === 'ERR_NETWORK') { 
                toast.error('Logout failed');
            }
        
            localStorage.clear();
            navigate('/login');
        }
    };

   
    if (!user || user.role !== 'admin') {
        return <Navigate to="/login" replace />;
    }

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/admin">Admin Panel</Navbar.Brand>
                    <Navbar.Toggle aria-controls="admin-navbar" />
                    <Navbar.Collapse id="admin-navbar">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/admin/dashboard">Dashboard</Nav.Link>
                            <Nav.Link as={Link} to="/admin/add-car">Add Car</Nav.Link>
                            <Nav.Link as={Link} to="/admin/cars">Cars</Nav.Link>
                            <Nav.Link as={Link} to="/admin/reservations">Reservations</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/" className="text-warning me-3">
                                View Site
                            </Nav.Link>
                            <Nav.Link onClick={handleLogout} className="text-danger">
                                Logout
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </>
    );
};

export default AdminLayout; 