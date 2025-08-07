import React, { useState } from 'react';
import styled from 'styled-components';

// Import the services data from your JSON file
import services from '../../data/services.json';

// --- Styled Components --- //
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 600px;
  width: 90%;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  font-size: 1rem;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #045990;
  }
`;

// Styled component for the new dropdown
const Select = styled.select`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  font-size: 1rem;
  background-color: #fff;
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #045990;
  }
`;

const Button = styled.button`
  background: #045990;
  color: #fff;
  padding: 0.85rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #03446d;
  }

  &:disabled {
    background-color: #a0a0a0;
    cursor: not-allowed;
  }
`;

const FormStatus = styled.p`
  text-align: center;
  font-weight: 500;
  color: ${props => (props.type === 'error' ? '#d9534f' : '#045990')};
`;


// --- React Component --- //
const ContactForm = () => {
  // Add 'phone' to the form's state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    selectedService: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  // This single handler works for all inputs, including the new phone field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    // The 'phone' and 'selectedService' fields are automatically included
    const encodedData = new URLSearchParams({
      'form-name': 'contact',
      ...formData,
    }).toString();

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodedData,
      });

      if (response.ok) {
        setStatus('Thank you! Your message has been sent.');
        // Clear all fields on successful submission
        setFormData({ name: '', email: '', phone: '', selectedService: '', message: '' });
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('Oops! Something went wrong. Please try again.');
    }
  };

  const isSubmitting = status === 'Sending...';

  return (
    <Form 
      name="contact" 
      onSubmit={handleSubmit}
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="contact" />

      <Input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
        disabled={isSubmitting}
      />
      <Input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        disabled={isSubmitting}
      />
      {/* New Phone Number Field */}
      <Input
        type="tel"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
        required
        disabled={isSubmitting}
      />

      <Select
        name="selectedService"
        value={formData.selectedService}
        onChange={handleChange}
        required
        disabled={isSubmitting}
      >
        <option value="" disabled>I'm interested in...</option>
        {services.map((service) => (
          <option key={service.title} value={service.title}>
            {service.title}
          </option>
        ))}
        <option value="Other">Other</option>
      </Select>

      <TextArea
        name="message"
        rows="5"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        required
        disabled={isSubmitting}
      />
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
      
      {status && <FormStatus type={status.includes('Oops') ? 'error' : 'success'}>{status}</FormStatus>}
    </Form>
  );
};

export default ContactForm;