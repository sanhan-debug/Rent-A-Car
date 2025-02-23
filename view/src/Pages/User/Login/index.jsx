import { useFormik } from 'formik';
import * as Yup from 'yup';
import api from '../../../utils/axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { toast } from 'react-hot-toast';

const Login = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema,
        onSubmit: async (values) => {
            try {
                const response = await api.post('/auth/login', values);

                if (response.data.user) {
                    localStorage.setItem('user', JSON.stringify(response.data.user));
                    toast.success('Login successful!');
                    
                    // Admin isə birbaşa admin panelə yönləndir
                    if (response.data.user.role === 'admin') {
                        navigate('/admin');
                        return;
                    }
                    navigate('/');
                }
            } catch (err) {
                setError(err.response?.data?.message || 'Login failed');
            }
        }
    });

    return (
        <Container className="py-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <div className="card shadow">
                        <div className="card-body p-5">
                            <h2 className="text-center mb-4">Login</h2>
                            
                            {error && <Alert variant="danger">{error}</Alert>}

                            <Form onSubmit={formik.handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                        isInvalid={formik.touched.email && formik.errors.email}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.email}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.password}
                                        isInvalid={formik.touched.password && formik.errors.password}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.password}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Button 
                                    variant="primary" 
                                    type="submit" 
                                    className="w-100"
                                    disabled={formik.isSubmitting}
                                >
                                    {formik.isSubmitting ? 'Logging in...' : 'Login'}
                                </Button>
                            </Form>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;