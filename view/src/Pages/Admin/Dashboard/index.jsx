import { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import api from '../../../utils/axios';

const AdminDashboard = () => {
    const [stats, setStats] = useState({
        totalCars: 0,
        totalReservations: 0,
        activeReservations: 0
    });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await api.get('/admin/stats');
                setStats(response.data);
            } catch (error) {
                console.error('Error fetching stats:', error);
            }
        };

        fetchStats();
    }, []);

    return (
        <Container className="py-5">
            <h2 className="mb-4">Dashboard</h2>
            <Row>
                <Col md={4}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Total Cars</Card.Title>
                            <Card.Text className="h2">{stats.totalCars}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Total Reservations</Card.Title>
                            <Card.Text className="h2">{stats.totalReservations}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Active Reservations</Card.Title>
                            <Card.Text className="h2">{stats.activeReservations}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default AdminDashboard; 