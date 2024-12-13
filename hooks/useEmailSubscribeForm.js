import { useState } from 'react';
import submitForm from '../util/submitForm';


// Custom Hook for Form Handling
const useEmailSubscribeForm = () => {
  const initialState = {'email': '', 'formType': 'email-subscription'};
  const [formData, setFormData] = useState(initialState);

  // Reset form to initial state
  const resetForm = () => {
    setFormData(initialState);
  };

  // Handle input field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(formData, resetForm, []);
  };

  return {
    formData,
    handleInputChange,
    handleSubmit,
    resetForm,
  };
};

export default useEmailSubscribeForm;
