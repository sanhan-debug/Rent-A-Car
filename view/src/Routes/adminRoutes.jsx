import { Navigate } from 'react-router-dom';
import AdminRoot from '../Components/Admin/AdminRoot';
import AdminDashboard from '../Pages/Admin/Dashboard';
import AddCar from '../Pages/Admin/AddCar';
// import CarsList from '../Pages/Admin/CarsList';
// import Reservations from '../Pages/Admin/Reservations';

const adminRoutes = {
    path: '/admin',
    element: <AdminRoot />,
    children: [
        {
            path: '',
            element: <Navigate to="/admin/dashboard" replace />
        },
        {
            path: 'dashboard',
            element: <AdminDashboard />
        },
        {
            path: 'add-car',
            element: <AddCar />
        },
        // {
        //     path: 'cars',
        //     element: <CarsList />
        // },
        // {
        //     path: 'reservations',
        //     element: <Reservations />
        // }
    ]
};

export default adminRoutes; 