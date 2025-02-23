import { Outlet, Navigate } from 'react-router-dom';
import AdminNavbar from '../AdminNavbar';
import AdminFooter from '../AdminFooter';

const AdminRoot = () => {
    const user = JSON.parse(localStorage.getItem('user'));

  
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    if (user.role !== 'admin') {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="admin-layout d-flex flex-column min-vh-100">
            <AdminNavbar />
            <main className="flex-grow-1 py-4">
                <Outlet />
            </main>
            <AdminFooter />
        </div>
    );
};

export default AdminRoot; 