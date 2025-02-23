import { Outlet, Navigate } from 'react-router-dom';
import NavigationBar from './Navbar';
import Footer from './Footer';

const UserRoot = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    // Əgər admin isə, admin panelə yönləndir
    if (user?.role === 'admin') {
        return <Navigate to="/admin" replace />;
    }

    return (
        <div className="d-flex flex-column min-vh-100">
            <NavigationBar />
            <main className="flex-grow-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default UserRoot;