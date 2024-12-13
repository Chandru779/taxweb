"use client";

import Link from "next/link"
import { useState } from "react";
import submitForm from './../../../util/submitForm';

export default function Contact() {

    const initialFormData = {
        'firstName': '',
        'lastName': '',
        'phoneNumber': '',
        'subject': '',
        'message': '',
        'email': '',
        'formType': 'contact-enquiry'
      };

      const [formData, setFormData] = useState(initialFormData);
      function resetForm() {
        setFormData(initialFormData); 
      };
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
      };
    
      function handleSubmit(e) {
        e.preventDefault();
        console.log('handleSubmit formData ', formData)
        submitForm(formData, null, []);
        console.log('resetForm ')
        resetForm()
      }

    return (
        <>
            <div className="contct6 sp2" id="contactsec">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contact-all-hadding">
                                <div className="hadding6">
                                    <h2 className="font-f-7" data-aos="fade-right" data-aos-duration={700}> Do you need help with
                                        your taxes?</h2>
                                </div>
                                <div className="space20" />
                                <div className="contact6-list" data-aos="fade-right" data-aos-duration={900}>
                                    <ul>
                                        <li className="font-f-7"><span><i className="fa-solid fa-check" /></span>EvoTax provides a full range of tax services year-round.</li>
                                        <li className="font-f-7"><span><i className="fa-solid fa-check" /></span>Comprehensive Services, All in One Place.</li>
                                        <li className="font-f-7"><span><i className="fa-solid fa-check" /></span>We Focus on What Matters Most to You. </li>
                                        <li className="font-f-7"><span><i className="fa-solid fa-check" /></span>Maximize Your Deductions and Minimize Liabilities.</li>
                                        <li className="font-f-7"><span><i className="fa-solid fa-check" /></span>Accurate, Reliable Calculations Every Time.</li>
                                        <li className="font-f-7"><span><i className="fa-solid fa-check" /></span>Expertise in U.S. and Indian Tax Filing.</li>
                                    </ul>
                                </div>
                                <div className="space30" />
                                <div className="hadding6" data-aos="fade-right" data-aos-duration={1100}>
                                    <h2 className="font-f-7">Contact us directly:</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6" data-aos="fade-right" data-aos-duration={700}>
                                    <div className="contact6-icon-box">
                                        <div className="contact6-icon">
                                            <img src="/assets/img/icons/contact6-icon1.svg" alt="" />
                                        </div>
                                        <div className="contact6-hadding hadding6">
                                            <h4><Link href="#" className="font-f-7">Visit us</Link></h4>
                                            <Link href="#">34 Madison Street, <br />
                                                NY, USA 10005</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6" data-aos="fade-right" data-aos-duration={1000}>
                                    <div className="contact6-icon-box">
                                        <div className="contact6-icon">
                                            <img src="/assets/img/icons/contact6-icon2.svg" alt="" />
                                        </div>
                                        <div className="contact6-hadding hadding6">
                                            <h4><Link href="#" className="font-f-7">Call Us</Link></h4>
                                            <Link href="tel:206330-8538">(206) 330-8538</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6" data-aos="fade-right" data-aos-duration={700}>
                                    <div className="contact6-icon-box">
                                        <div className="contact6-icon">
                                            <img src="/assets/img/icons/contact6-icon3.svg" alt="" />
                                        </div>
                                        <div className="contact6-hadding hadding6">
                                            <h4><Link href="#" className="font-f-7">Email Us</Link></h4>
                                            <Link href="mailto:echaleganas@gmail.com">hello@evotaxes.com</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6" data-aos="fade-right" data-aos-duration={900}>
                                    <div className="contact6-icon-box">
                                        <div className="contact6-icon">
                                            <img src="/assets/img/icons/contact6-icon4.svg" alt="" />
                                        </div>
                                        <div className="contact6-hadding hadding6">
                                            <h4><Link href="#" className="font-f-7">Fax</Link></h4>
                                            <Link href="#">(206) 330-8538</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact3-form-all" data-aos="zoom-out" data-aos-duration={900}>
                                <div className="hadding6 text-center">
                                    <h1 className="font-30 font-f-7 font-lg-40 weight-500  line-height-lg-48 line-height-38">Contact
                                        Us</h1>
                                    <div className="space10" />
                                    <p>Schedule your appointment with us.</p>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-input-all">
                                        <div className="form-input-box">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="input-single6">
                                                        <div >
                                                            <label >First Name</label>
                                                            <input type="text" name="firstName" value={formData.firstName} placeholder="First Name" onChange={handleInputChange} required />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="input-single6">
                                                        <div >
                                                            <label >Last Name</label>
                                                            <input type="text" name="lastName" value={formData.lastName} placeholder="Last Name" onChange={handleInputChange} required />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-input-box">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="input-single6">
                                                        <div >
                                                            <label >Phone Number</label>
                                                            <input type="number" name="phoneNumber" value={formData.phoneNumber} placeholder="Phone" onChange={handleInputChange} required />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="input-single6">
                                                        <div >
                                                            <label >Email Address</label>
                                                            <input type="email" name="email" value={formData.email} placeholder="Email Address" onChange={handleInputChange} required />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-input-box">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="input-single6">
                                                        <div >
                                                            <label >Subject</label>
                                                            <input type="text" name="subject" value={formData.subject} placeholder="Subject" onChange={handleInputChange} required />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="contact6-from-input">
                                            <label >Massage</label>
                                            <textarea cols={30} rows={3} name="message" value={formData.message} placeholder="Additional Details" onChange={handleInputChange} required />
                                        </div>
                                        <div className="space20" />
                                        <div className="button6">
                                            <button>Schedule your appointment <span><i className="fa-solid fa-arrow-right" /></span> </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
