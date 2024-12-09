
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Page() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="CONTACT">
                <div>
                    <div className="contact-boxes">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-4">
                                    <div className="single-contact-box">
                                        <div className="contact-box-icon">
                                            <img src="/assets/img/icons/contact-1.svg" alt="" />
                                        </div>
                                        <div className="contact-box-content">
                                            <p className="font-f-3">CALL US</p>
                                            <Link className="font-f-3" href="/tel:+11 1111 11000">+11 1111 11000</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="single-contact-box">
                                        <div className="contact-box-icon">
                                            <img src="/assets/img/icons/contact-2.svg" alt="" />
                                        </div>
                                        <div className="contact-box-content">
                                            <p className="font-f-3">EMAIL US</p>
                                            <Link className="font-f-3" href="/mailto:hello@evotaxes.com">hello@evotaxes.com</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="single-contact-box">
                                        <div className="contact-box-icon">
                                            <img src="/assets/img/icons/contact-3.svg" alt="" />
                                        </div>
                                        <div className="contact-box-content">
                                            <p className="font-f-3">HEADQUARTERS</p>
                                            <Link className="font-f-3" href="#">New York, NY 94105, United States</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*=====Contact Boxes End=======*/}
                    {/*=====Contact Form Start=======*/}
                    <div className="main-contact-form section-padding" id="Contact2">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="heading2 mr50">
                                        <small className="heading-top inner-heading-top"><img src="/assets/img/icons/hands.svg" alt="" />Expert Tax Support
                                            </small>
                                        <h2>Let’s Make Tax Filing Easy for You</h2>
                                        <p>
                                            Have questions about your tax filings or need assistance with tax planning? We’re here to help! Reach out to us, and our experts will guide you through the process, ensuring you get the maximum refund.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-8" id="">
                                    <div className="main-form">
                                        <form>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <input type="text" name="fname" placeholder="First Name" />
                                                </div>
                                                <div className="col-lg-6">
                                                    <input type="text" name="lname" placeholder="Last Name" />
                                                </div>
                                                <div className="col-12">
                                                    <input type="email" name="email" placeholder="Email Address" />
                                                </div>
                                                <div className="col-lg-6">
                                                    <input type="text" name="service" placeholder="Service Interested In" />
                                                </div>
                                                <div className="col-lg-6">
                                                    <input type="text" name="subject" placeholder="Subject" />
                                                </div>
                                                <div className="col-12">
                                                    <textarea name="message" cols={30} rows={5} placeholder="Let us know your tax-related question" />
                                                </div>
                                                <div className="col-12">
                                                    <button type="submit" className="full-btn theme-btn-11">
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
                    {/*=====Contact Form End=======*/}
                    {/*=====Office-area end=======*/}
                    <div className="office-area section-padding2 bg-13 inner-font-1 _relative">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 m-auto">
                                    <div className="heading2 text-center">
                                        <small className="heading-top inner-heading-top"><img src="/assets/img/icons/hands.svg" alt="" />Where We Are
                                            </small>
                                        <h2>Our Offices Around the World</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-office">
                                        <div className="office-icon">
                                            <img src="/assets/img/icons/telegram.png" alt="" />
                                        </div>
                                        <h3>
                                            <Link href="#">New York Office</Link>
                                        </h3>
                                        <p>
                                            90 Abia Martin Drive, Ocean Beach, New York, NY 94105, United
                                            States
                                        </p>
                                        <Link href="#" className="theme-btn-13">Get Direction
                                            <img src="/assets/img/icons/arrow-up-right-inner-1.svg" alt="" /></Link>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-office">
                                        <div className="office-icon">
                                            <img src="/assets/img/icons/telegram.png" alt="" />
                                        </div>
                                        <h3>Bangalore Office</h3>
                                        <p>
                                            No:11, 2nd floor, 80 feet road, Koramangala 1st block, 80 ft road, Bangalore 560034
                                        </p>
                                        <Link
                                            href="https://www.google.com/maps/place/Lucio+IT+Services/@12.9262645,77.6330152,19z/data=!3m1!4b1!4m6!3m5!1s0x3bae151abe5f5faf:0x4d72008053c0b591!8m2!3d12.9262632!4d77.6336589!16s%2Fg%2F11frrrn5by?entry=ttu&g_ep=EgoyMDI0MTIwMS4xIKXMDSoASAFQAw%3D%3D"
                                            className="theme-btn-13"
                                            target="_blank"
                                        >
                                            Get Direction
                                            <img src="/assets/img/icons/arrow-up-right-inner-1.svg" alt="" />
                                        </Link>

                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-office">
                                        <div className="office-icon">
                                            <img src="/assets/img/icons/telegram.png" alt="" />
                                        </div>
                                        <h3>Hyderabad Office</h3>
                                        <p>
                                            Plot No: 684, Obulreddy Complex, Vivekanandha Nagar, Kukatpally, Hyderabad – 500072
                                        </p>
                                        <Link href="#" className="theme-btn-13">Get Direction
                                            <img src="/assets/img/icons/arrow-up-right-inner-1.svg" alt="" /></Link>
                                    </div>
                                </div>
                                {/* <div className="col-lg-4 col-md-6">
                                    <div className="single-office">
                                        <div className="office-icon">
                                            <img src="/assets/img/icons/telegram.png" alt="" />
                                        </div>
                                        <h3>Boston Office</h3>
                                        <p>
                                            90 Abia Martin Drive, Ocean Beach, New York, NY 94105, United
                                            States
                                        </p>
                                        <Link href="#" className="theme-btn-13">Get Direction
                                            <img src="/assets/img/icons/arrow-up-right-inner-1.svg" alt="" /></Link>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-office">
                                        <div className="office-icon">
                                            <img src="/assets/img/icons/telegram.png" alt="" />
                                        </div>
                                        <h3>Los Angeles Office</h3>
                                        <p>
                                            90 Abia Martin Drive, Ocean Beach, New York, NY 94105, United
                                            States
                                        </p>
                                        <Link href="#" className="theme-btn-13">Get Direction
                                            <img src="/assets/img/icons/arrow-up-right-inner-1.svg" alt="" /></Link>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-office">
                                        <div className="office-icon">
                                            <img src="/assets/img/icons/telegram.png" alt="" />
                                        </div>
                                        <h3>Nashville Office</h3>
                                        <p>
                                            90 Abia Martin Drive, Ocean Beach, New York, NY 94105, United
                                            States
                                        </p>
                                        <Link href="#" className="theme-btn-13">Get Direction
                                            <img src="/assets/img/icons/arrow-up-right-inner-1.svg" alt="" /></Link>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div className="shape-007">
                            <img src="/assets/img/shapes/shape007.svg" alt="" />
                        </div>
                    </div>
                    {/*=====Office-area end=======*/}
                    {/*=====Faq start=======*/}
                    <div className="faq2 section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 m-auto">
                                    <div className="heading2 text-center">
                                        <small className="heading-top inner-heading-top"><img src="/assets/img/icons/hands.svg" alt="" />FAQ</small>
                                        <h2>Frequently Asked Questions</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="single-faq2">
                                        <h3>What tax services do you provide at EvoTax?</h3>
                                        <p>
                                            We offer a wide range of tax services, including Federal & State tax filings, ITIN preparation, tax representation, advanced tax planning, FBAR and FATCA compliance, amendment filing, and Indian tax filings.
                                        </p>
                                    </div>
                                    <div className="single-faq2">
                                        <h3>How can EvoTax help me maximize my tax refund?</h3>
                                        <p>
                                            Our team carefully reviews your financial situation to identify all possible deductions and credits, ensuring you get the maximum refund. We stay up-to-date on the latest tax laws to optimize your tax filings.
                                        </p>
                                    </div>
                                    <div className="single-faq2">
                                        <h3>Do you offer tax services for businesses?</h3>
                                        <p>
                                            Yes, we offer comprehensive tax services for businesses, including payroll tax management, business tax filings, and advanced tax planning to minimize liabilities and ensure compliance with tax regulations.
                                        </p>
                                    </div>
                                    <div className="single-faq2">
                                        <h3>Can EvoTax assist with tax filings for both U.S. and Indian taxes?</h3>
                                        <p>
                                            Yes! We specialize in handling both U.S. and Indian tax filings. Our team is well-versed in the tax laws of both countries and ensures compliance with both systems while maximizing your deductions.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="single-faq2">
                                        <h3>What is an ITIN, and do I need one for tax filing?</h3>
                                        <p>
                                            An ITIN (Individual Taxpayer Identification Number) is required for individuals who are not eligible for a Social Security Number but need to file a tax return in the U.S. EvoTax helps you with the application process and ensures it’s done correctly.
                                        </p>
                                    </div>
                                    <div className="single-faq2">
                                        <h3>How do I know if I need to amend my tax return?</h3>
                                        <p>
                                            If you discover an error or omission on your original tax return after it’s filed, you may need to amend it. EvoTax can assist you in reviewing your return and filing the necessary amendments to correct any mistakes.
                                        </p>
                                    </div>
                                    <div className="single-faq2">
                                        <h3>What is the deadline for filing U.S. taxes, and how can EvoTax help?</h3>
                                        <p>
                                            The deadline for filing U.S. taxes is typically April 15th, but extensions are available. EvoTax helps you meet the deadline and can file for an extension if necessary, ensuring timely and accurate filings.
                                        </p>
                                    </div>
                                    <div className="single-faq2">
                                        <h3>How does EvoTax assist with FBAR and FATCA compliance?</h3>
                                        <p>
                                            We offer specialized services to help U.S. taxpayers with foreign accounts comply with FBAR (Foreign Bank Account Reporting) and FATCA (Foreign Account Tax Compliance Act). Our team ensures that all required forms are filed accurately and on time.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="space30" />
                            <div className="price-notice">
                                <div className="row align-items-center">
                                    <div className="col-md-6">
                                        <div className="heading4 inner-heading no-margin-heading">
                                            <h4 className="font-f-3 weight-700">Have more questions?</h4>
                                            <p>
                                                If you're a business with complex tax needs or high payment volumes, reach out to discuss customized tax solutions and pricing options tailored to your specific requirements.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 text-md-right">
                                        <Link href="#Contact2" className="theme-btn-11">Get In Touch</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*=====Faq end=======*/}
                    {/*=====Subscribe start=======*/}
                    <div className="subscribe-4 bg12 padding-90 inner-font-1 inner-subscribe">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="heading4 white-heading inner-heading no-margin-heading">
                                        <h2>Want to join our team?</h2>
                                        <p>
                                            We are always looking for talented people, We here to help you
                                            to open your bright future.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-6 offset-lg-1">
                                    <div className="sunscribe-form">
                                        <div className="subscribe-from-wrap">
                                            <form>
                                                <input type="email" placeholder="Email Address" />
                                                <button type="submit" name="button">
                                                    Subscribe Now
                                                    <img src="/assets/img/icons/arrow-up-right.svg" alt="" />
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}