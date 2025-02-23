import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import api from '../../../utils/axios';
import { useState } from 'react';

const AddCar = () => {
    const [selectedImages, setSelectedImages] = useState([]);
    const [imageUrls, setImageUrls] = useState([]);

    const validationSchema = Yup.object({
        brand: Yup.string()
            .required('Brand is required')
            .min(2, 'Brand must be at least 2 characters'),
        model: Yup.string()
            .required('Model is required')
            .min(1, 'Model must be at least 1 character'),
        year: Yup.number()
            .required('Year is required')
            .min(1900, 'Year must be 1900 or later')
            .max(new Date().getFullYear(), 'Year cannot be in the future'),
        mileage: Yup.number()
            .required('Mileage is required')
            .min(0, 'Mileage cannot be negative'),
        dailyPrice: Yup.number()
            .required('Daily price is required')
            .min(0, 'Price cannot be negative'),
        engineSize: Yup.number()
            .required('Engine size is required')
            .min(0, 'Engine size cannot be negative'),
        fuelType: Yup.string()
            .required('Fuel type is required')
            .oneOf(['Petrol', 'Diesel', 'Hybrid', 'Electric', 'Gas']),
        isAutomatic: Yup.boolean()
            .required('Transmission type is required'),
        category: Yup.string()
            .required('Category is required')
            .oneOf(['Economy', 'Business', 'Premium', 'Luxury']),
        images: Yup.array()
            .min(1, 'At least one image is required')
            .max(4, 'Maximum 4 images allowed')
    });

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        if (files.length > 4) {
            toast.error('Maximum 4 images allowed');
            return;
        }

        setSelectedImages(files);

       
        const urls = files.map(file => URL.createObjectURL(file));
        setImageUrls(urls);

        formik.setFieldValue('images', files);
    };

    const formik = useFormik({
        initialValues: {
            brand: '',
            model: '',
            year: '',
            mileage: '',
            dailyPrice: '',
            engineSize: '',
            fuelType: 'Petrol',
            isAutomatic: true,
            category: 'Economy',
            images: []
        },
        validationSchema,
        onSubmit: async (values) => {
            try {
                const formData = new FormData();
                Object.keys(values).forEach(key => {
                    if (key === 'images') {
                        values[key].forEach(image => {
                            formData.append('images', image);
                        });
                    } else {
                        formData.append(key, values[key]);
                    }
                });

                await api.post('/cars', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                toast.success('Car added successfully');
                formik.resetForm();
                setImageUrls([]);
                setSelectedImages([]);
            } catch (error) {
                toast.error(error.response?.data?.message || 'Failed to add car');
            }
        }
    });

    return (
        <Container className="py-5">
            <h2 className="mb-4">Add New Car</h2>
            <Form onSubmit={formik.handleSubmit}>
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Brand</Form.Label>
                            <Form.Control
                                type="text"
                                name="brand"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.brand}
                                isInvalid={formik.touched.brand && formik.errors.brand}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.brand}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Model</Form.Label>
                            <Form.Control
                                type="text"
                                name="model"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.model}
                                isInvalid={formik.touched.model && formik.errors.model}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.model}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col md={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Year</Form.Label>
                            <Form.Control
                                type="number"
                                name="year"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.year}
                                isInvalid={formik.touched.year && formik.errors.year}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.year}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Mileage</Form.Label>
                            <Form.Control
                                type="number"
                                name="mileage"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.mileage}
                                isInvalid={formik.touched.mileage && formik.errors.mileage}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.mileage}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Daily Price</Form.Label>
                            <Form.Control
                                type="number"
                                name="dailyPrice"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.dailyPrice}
                                isInvalid={formik.touched.dailyPrice && formik.errors.dailyPrice}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.dailyPrice}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col md={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Engine Size</Form.Label>
                            <Form.Control
                                type="number"
                                name="engineSize"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.engineSize}
                                isInvalid={formik.touched.engineSize && formik.errors.engineSize}
                            />
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.engineSize}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Fuel Type</Form.Label>
                            <Form.Select
                                name="fuelType"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.fuelType}
                                isInvalid={formik.touched.fuelType && formik.errors.fuelType}
                            >
                                <option value="Petrol">Petrol</option>
                                <option value="Diesel">Diesel</option>
                                <option value="Hybrid">Hybrid</option>
                                <option value="Electric">Electric</option>
                                <option value="Gas">Gas</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.fuelType}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Category</Form.Label>
                            <Form.Select
                                name="category"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.category}
                                isInvalid={formik.touched.category && formik.errors.category}
                            >
                                <option value="Economy">Economy</option>
                                <option value="Business">Business</option>
                                <option value="Premium">Premium</option>
                                <option value="Luxury">Luxury</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                                {formik.errors.category}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group className="mb-3">
                    <Form.Label>Transmission</Form.Label>
                    <Form.Check
                        type="switch"
                        name="isAutomatic"
                        label="Automatic"
                        onChange={formik.handleChange}
                        checked={formik.values.isAutomatic}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Images (Max 4)</Form.Label>
                    <Form.Control
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleImageChange}
                        isInvalid={formik.touched.images && formik.errors.images}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.images}
                    </Form.Control.Feedback>
                </Form.Group>

                {imageUrls.length > 0 && (
                    <div className="mb-3">
                        <h5>Selected Images:</h5>
                        <Row>
                            {imageUrls.map((url, index) => (
                                <Col key={index} xs={6} md={3}>
                                    <img
                                        src={url}
                                        alt={`Preview ${index + 1}`}
                                        className="img-thumbnail mb-2"
                                        style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </div>
                )}

                <Button 
                    type="submit" 
                    variant="primary"
                    disabled={formik.isSubmitting}
                >
                    {formik.isSubmitting ? 'Adding...' : 'Add Car'}
                </Button>
            </Form>
        </Container>
    );
};

export default AddCar; 