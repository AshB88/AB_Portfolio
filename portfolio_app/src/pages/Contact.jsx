import '../styles/Contact.css';
import React, { useState } from 'react';
import '../styles/Contact.css';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        let error = '';

        if (!value) {
            error = 'This field is required';
        } else if (name === 'email' && !validateEmail(value)) {
            error = 'Invalid email address';
        }

        setErrors({ ...errors, [name]: error });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!formData.name) newErrors.name = 'This field is required';
        if (!formData.email) newErrors.email = 'This field is required';
        else if (!validateEmail(formData.email)) newErrors.email = 'Invalid email address';
        if (!formData.message) newErrors.message = 'This field is required';

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log('Form submitted', formData);
        }
    };

    return (
        <div className="contact">
            <h1>Contact</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.message && <span className="error">{errors.message}</span>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}