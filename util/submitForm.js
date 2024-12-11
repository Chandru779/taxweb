const generatePreSignedUrl = 'https://7x854lgoxh.execute-api.ap-south-1.amazonaws.com/dev/generate-presigned-url';
const uploadUrl = 'https://uk828hhz81.execute-api.ap-south-1.amazonaws.com/dev/upload';

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
    }
  };

  const handleSubmit = async (formData, files) => {
    try {
      const fileKeys = files.length ? await uploadFileToS3(files): [];
      const formDataWithFile = {
        ...formData,
        fileKeys
      };

      const lambdaResponse = await fetch(uploadUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataWithFile)
      })

      if (lambdaResponse.status === 200) {
        alert('Form submitted successfully');
      } else {
        alert('Failed to submit form');
      }
    } catch (error) {
      console.error('Error during submission:', error);
      alert('Error during submission');
    }
  };



export default handleSubmit;