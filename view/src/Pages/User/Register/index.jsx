import { useFormik } from 'formik';
import * as Yup from 'yup';
import api from '../../../utils/axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { toast } from 'react-hot-toast';

const Register = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const validationSchema = Yup.object({
        username: Yup.string()
            .min(3, 'Username must be at least 3 characters')
            .max(30, 'Username cannot exceed 30 characters')
            .required('Username is required'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm password is required')
    });

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema,
        onSubmit: async (values) => {
            try {
                const { confirmPassword, ...registerData } = values;
                
                const response = await api.post('/auth/register', registerData);

                if (response.data.user) {
                    localStorage.setItem('user', JSON.stringify(response.data.user));
                    toast.success('Registration successful! Welcome to SS Rent a Car!');
                    setTimeout(() => {
                        navigate(response.data.redirect || '/');
                    }, 1500);
                }
            } catch (err) {
                setError(err.response?.data?.message || 'Registration failed');
                toast.error(err.response?.data?.message || 'Registration failed');
            }
        }
    });

    return (
        <Container className="py-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <div className="card shadow">
                        <div className="card-body p-5">
                            <h2 className="text-center mb-4">Register</h2>
                            
                            {error && <Alert variant="danger">{error}</Alert>}

                            <Form onSubmit={formik.handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="username"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.username}
                                        isInvalid={formik.touched.username && formik.errors.username}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.username}
                                    </Form.Control.Feedback>
                                </Form.Group>

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

                                <Form.Group className="mb-3">
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

                                <Form.Group className="mb-4">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="confirmPassword"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.confirmPassword}
                                        isInvalid={formik.touched.confirmPassword && formik.errors.confirmPassword}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.confirmPassword}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Button 
                                    variant="primary" 
                                    type="submit" 
                                    className="w-100"
                                    disabled={formik.isSubmitting}
                                >
                                    {formik.isSubmitting ? 'Registering...' : 'Register'}
                                </Button>
                            </Form>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;