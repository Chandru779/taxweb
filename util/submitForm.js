import { toast } from "react-toastify";

const generatePreSignedUrl = 'https://7x854lgoxh.execute-api.ap-south-1.amazonaws.com/dev/generate-presigned-url';
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

const uploadFileToS3 = async (files) => {
    if (!files.length) return [];
    try {
      let fileKeys = [];
      // Step 1: Request pre-signed URLs for each file
      const urlPromises = Array.from(files).map(file => {
        
        return fetch(generatePreSignedUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fileName: file.name.replace(),
            fileType: file.type
          }),
        }).then(response => response.json());
      });

      // Step 2: Upload the files once URLs are received
      let preSignedUrls = await Promise.all(urlPromises);
      const uploadPromises = preSignedUrls.map(async(data, index) => {
        const preSignedUrl = data.preSignedUrl;
        const file = files[index]; 

        fileKeys.push((new URL(preSignedUrl)).pathname.substring(1));

        return fetch(preSignedUrl, {
          method: 'PUT',
          headers: {
            'Content-Type': file.type,
          },
          body: file,
        })

      });

      await Promise.all(uploadPromises);
      return fileKeys;
    } catch(error) {
      console.error('Error uploading files:', error);
      toast.error("Failed to submit files");
    }
  };

  const submitForm = async (formData, resetFormCb, files = []) => {
    let formType;
    try {
      const fileKeys = files.length ? await uploadFileToS3(files): [];
      const formDataWithFile = {
        ...formData,
        fileKeys
      };
      formType = formData.formType;
     
      const lambdaResponse = await fetch(uploadUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataWithFile)
      })

      if (lambdaResponse.status === 200) {
        console.log('formData ', formData, ' resetFormCb ', resetFormCb)
        toast.success(successMessages[formType]);
        if(resetFormCb) resetFormCb()
      } else {
        toast.error(failureMessages[formType]);
      }
    } catch (error) {
      console.error('Error during submission:', error);
    }
  };



export default submitForm;