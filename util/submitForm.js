import { toast } from "react-toastify";

const uploadUrl = 'https://uk828hhz81.execute-api.ap-south-1.amazonaws.com/dev/upload';
let successMessages = {
    'refund-estimate': 'Refund Estimate submitted successfully!',
    'contact-enquiry': 'Enquiry Request Sent',
    'email-subscription': 'Email Subscribed, Thank You'
  }

  let failureMessages = {
    'refund-estimate': 'Failed to send Refund Estimate',
    'contact-enquiry': 'Failed to send Enquiry Request',
    'email-subscription': 'Sorry, Failed to subscribe email'
  }

  const submitForm = async (formData, resetFormCb, files = []) => {
    const data = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
    });

    Array.from(files).forEach((file, index) => {
      data.append(`file${index + 1}`, file);
    });

    try {
        const response = await fetch(uploadUrl, {
          method: "POST",
          body: data
        });
  
        if (response.ok) {
            toast.success(successMessages[formData.formType]);
            if(resetFormCb) resetFormCb()
        } else {
          const errorData = await response.json();
          console.error("Error response:", errorData);
          toast.error(failureMessages[formData.formType]);
        }
      } catch (error) {
        console.error("Error uploading files and form data:", error);
      }
};

export default submitForm;