"use client";
import { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Layout from "@/components/layout/Layout";
import submitForm from './../../util/submitForm';

export default function Page() {
  const inputRef = useRef();
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({});

  const MAX_FILE_SIZE_MB = 10; // Max file size in MB
  const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024; // Convert MB to Bytes

  function resetForm() {
    setFormData({});
    setFiles([]);
    inputRef.current.value = null; 
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);    
    const invalidFiles = selectedFiles.filter((file) => file.size > MAX_FILE_SIZE_BYTES);
    if (invalidFiles.length > 0) {
      toast.error(`File(s) exceed the ${MAX_FILE_SIZE_MB} MB size limit!`);
      return;
    }

    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    submitForm(formData, files);
    toast.success("Form submitted successfully!");
    resetForm();
  }

  function formatFileSize(sizeInBytes) {
    const sizeInMB = sizeInBytes / (1024 * 1024);
   
    if (sizeInMB >= 1) {
      return `${sizeInMB.toFixed(2)} MB`;
    } else {
      const sizeInKB = (sizeInBytes / 1024).toFixed(0);
      return `${sizeInKB} KB`;
    }
  }

  const handleRemoveFile = (index) => {
    setFiles((prevFiles) => Array.from(prevFiles).filter((_, i) => i !== index));
  };

  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Refund Estimate">
        <div className="main-contact-form section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="main-form lg-mr-15">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-8 mb-3">
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          placeholder="First Name"
                          onChange={handleInputChange}
                          required
                          className="form-control"
                        />
                      </div>
                      <div className="col-lg-8 mb-3">
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          placeholder="Last Name"
                          onChange={handleInputChange}
                          required
                          className="form-control"
                        />
                      </div>
                      <div className="col-lg-8 mb-3">
                        <input
                          type="number"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          placeholder="Phone Number"
                          onChange={handleInputChange}
                          required
                          className="form-control"
                        />
                      </div>
                      <div className="col-lg-8 mb-3">
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          placeholder="Note"
                          onChange={handleInputChange}
                          required
                          className="form-control"
                        />
                      </div>
                      <div className="col-lg-8 mb-3">
                        <div className="d-flex align-items-center gap-3">
                          <input
                            type="file"
                            className="d-none"
                            ref={inputRef}
                            onChange={handleFileChange}
                            max="3"
                            multiple
                          />
                           <button type="button" onClick={()=>inputRef.current.click()} className="theme-btn-10">
                            Choose File
                          </button>
                        </div>
                        {files.length > 0 && (
                          <div className="mt-3">
                            <h5 className="fw-semibold">Selected Files:</h5>
                            <ul className="list-group">
                              {Array.from(files).map((file, index) => (
                                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                  <span>
                                    <b>{file.name}</b> ({formatFileSize(file.size)})
                                  </span>
                                  <button
                                    type="button"
                                    className="btn btn-sm btn-danger"
                                    onClick={() => handleRemoveFile(index)}
                                  >
                                    x
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                      <div className="col-lg-8 mb-3">
                        <button type="submit" className="full-btn theme-btn-11" onSubmit={handleSubmit}>
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar closeOnClick pauseOnHover />
      </Layout>

    </>
  );
}
