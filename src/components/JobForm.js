import React, { useState } from 'react';
import styled from 'styled-components';

// Corrected import path for a standard project structure
import jobs from '../../data/jobs.json';

// --- Styled Components --- //
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
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
`;

// Styled component for the dropdown menu
const Select = styled.select`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  font-size: 1rem;
  background-color: #fff;
`;

// A container for the resume upload section
const FileUploadContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem;
  border: 1px dashed #ccc;
  border-radius: 4px;
  background-color: #fff;
`;

const FileLabel = styled.label`
  font-weight: 500;
  color: #333;
  cursor: pointer;
  &:hover {
    color: #045990;
  }
`;

const FileName = styled.span`
  font-style: italic;
  color: #555;
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
`;

const FormStatus = styled.p`
  text-align: center;
  font-weight: 500;
  color: ${props => (props.type === 'error' ? '#d9534f' : '#045990')};
`;


// --- React Component --- //
const JobForm = () => {
  // State for form fields - Added 'phone'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    selectedJob: '',
  });
  const [resume, setResume] = useState(null);
  const [status, setStatus] = useState('');

  // Generic handler works for the new phone field as well
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handler specifically for the file input
  const handleFileChange = (e) => {
    if (e.target.files) {
      setResume(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!resume) {
      setStatus('Please upload a resume.');
      return;
    }
    setStatus('Submitting...');

    const data = new FormData();
    data.append('form-name', 'jobApplication');
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phone', formData.phone); // Append phone number to submission data
    data.append('selectedJob', formData.selectedJob);
    data.append('resume', resume);

    try {
      const response = await fetch('/', { method: 'POST', body: data });
      if (response.ok) {
        setStatus('Application submitted successfully! Thank you.');
        // Reset the form state, including the new phone field
        setFormData({ name: '', email: '', phone: '', selectedJob: '' });
        setResume(null);
        document.getElementById('resume-input').value = '';
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('Oops! There was a problem submitting your application.');
    }
  };

  return (
    <Form
      name="jobApplication"
      onSubmit={handleSubmit}
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="jobApplication" />

      <Select
        name="selectedJob"
        value={formData.selectedJob}
        onChange={handleChange}
        required
      >
        <option value="" disabled>Select a position...</option>
        {jobs.map((job) => (
          <option key={job.id} value={job.title}>
            {job.title}
          </option>
        ))}
      </Select>

      <Input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <Input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      {/* New Phone Number Field */}
      <Input
        type="tel"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />

      <FileUploadContainer>
        <FileLabel htmlFor="resume-input">Resume</FileLabel>
        <input
          id="resume-input"
          type="file"
          name="resume"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          required
          style={{ display: 'none' }} // Hide the default file input
        />
        {/* Display the name of the chosen file */}
        {resume && <FileName>{resume.name}</FileName>}
      </FileUploadContainer>

      <Button type="submit">Apply Now</Button>

      {status && <FormStatus type={status.includes('Oops') || status.includes('Please') ? 'error' : 'success'}>{status}</FormStatus>}
    </Form>
  );
};

export default JobForm;