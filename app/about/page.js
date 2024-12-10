
import CounterUp from "@/components/elements/CounterUp"
import Faq1 from "@/components/elements/Faq1"
import Layout from "@/components/layout/Layout"
import TestimonialSlider3 from "@/components/slider/TestimonialSlider3"
import Link from "next/link"
export default function Page() {


    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="ABOUT EvoTax">
                <div>
                    <div className="bg-13-haf">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="about-haf-img">
                                        <img className="border-radius" src="/assets/img/about/about-6.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*=====About haf image end=======*/}
                    {/*=====About content start=======*/}
                    <div className="section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="heading2 no-margin-heading">
                                        <h2>Our Story</h2>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="heading2 no-margin-heading">
                                        <p>
                                            At EvoTax, we understand the complexities of U.S. and Indian tax systems and the challenges that individuals and businesses face when dealing with taxes. Our mission is to simplify the tax process by offering expert solutions, ensuring full compliance with tax laws, and helping our clients maximize their returns. We believe in making taxes stress-free and efficient for everyone, from individuals to large enterprises. With a focus on clarity and transparency, we guide our clients through every step of the tax process.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="heading2 no-margin-heading">
                                        <p>
                                            Our team is committed to staying ahead of the curve with the latest tax laws and technology. We offer a wide range of services, from Federal & State tax filing and ITIN preparation to advanced tax planning and representation. EvoTax is built on the foundation of trust and reliability, always putting our clients’ needs first. By providing personalized attention and leveraging cutting-edge tools, we help our clients uncover every deduction and minimize tax liabilities, allowing them to keep more of their hard-earned money.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*=====About content end=======*/}
                    {/*=====About start=======*/}
                    <div className="about-inner bg-29">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="about-bg-main-img position-relative mr50">
                                        <img src="/assets/img/about/about22.png" alt="" />
                                        <div className="corner-right-bottom-shape2 position-absolute">
                                            <img src="/assets/img/shapes/shape-right-bottom2.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="ml50">
                                        <div className="heading2 no-margin-heading">
                                            <small className="heading-top inner-heading-top"><img src="/assets/img/icons/hands.svg" alt="" />We doing super
                                                business since 2011.</small>
                                            <h2>
                                                We Simplify Tax Filing and Maximize Your Refunds
                                            </h2>
                                            <p>
                                                Imagine managing the complexities of both U.S. and Indian tax laws, navigating through multiple forms, deductions, and compliance requirements. Now imagine not having to deal with the stress of tax season, knowing you have experts handling it all for you.
                                            </p>
                                            <p>
                                                At EvoTax, we take the complexity out of tax filing by providing comprehensive services for individuals and businesses. Whether it's Federal & State tax filing, ITIN preparation, or advanced tax planning, we handle everything, ensuring accuracy, compliance, and the best possible outcomes. We are your single source of reliable tax solutions, designed to save you time and money, while keeping you fully compliant with tax regulations.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*=====About end=======*/}
                    {/*=====Inner Counter start=======*/}
                    <div className="inner-counter-1 section-padding position-relative">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="heading2 no-margin-heading mr50">
                                        <small className="heading-top inner-heading-top"><img src="/assets/img/icons/hands.svg" alt="" />Our
                                            Success in
                                            Numbers</small>
                                        <h2>
                                            Helping Thousands Navigate Tax Filing with Ease and Accuracy
                                        </h2>
                                        <p>
                                            Our experienced team specializes in U.S. and Indian tax services, ensuring maximum refunds and compliance for every client. We’ve built a reputation for efficiency and trust, backed by years of expertise and a commitment to excellence.
                                            Whether it’s Federal & State filing, ITIN preparation, or advanced tax planning, we’ve consistently delivered results that matter.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="counter2 ml50 position-relative">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="single-counter">
                                                    <div className="conter-icon">
                                                        <img src="/assets/img/icons/service-9.png" alt="" />
                                                    </div>
                                                    <h2><CounterUp count={10} />+</h2>
                                                    <p>Years of combined experience</p>
                                                </div>
                                                <div className="single-counter">
                                                    <div className="conter-icon">
                                                        <img src="/assets/img/icons/service-16.png" alt="" />
                                                    </div>
                                                    <h2><CounterUp count={98} />%</h2>
                                                    <p>Positive Feedback</p>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="single-counter mt-5">
                                                    <div className="conter-icon">
                                                        <img src="/assets/img/icons/service-12.png" alt="" />
                                                    </div>
                                                    <h2><CounterUp count={30} />+</h2>
                                                    <p>Tax experts</p>
                                                </div>
                                                <div className="single-counter">
                                                    <div className="conter-icon">
                                                        <img src="/assets/img/icons/service-14.png" alt="" />
                                                    </div>
                                                    <h2><CounterUp count={5000} />+</h2>
                                                    <p>Happy Clients</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="corner-right-bottom-shape2 position-absolute">
                                            <img src="/assets/img/shapes/shape-right-bottom2.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="inner-counter-bg-1">
                            <img src="/assets/img/shapes/shape-8.png" alt="" />
                        </div>
                    </div>
                    {/*=====Inner Counter start =======*/}
                    {/*=====Testimonial start=======*/}
                    <div className="testimonial-3 bg-19 section-padding2 inner-font-1 inner-testimonial-1 _relative">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 m-auto">
                                    <div className="heading2 text-center">
                                        <small className="heading-top inner-heading-top"><img src="/assets/img/icons/hands.svg" alt="" />Our
                                            Happy
                                            Clients</small>
                                        <h2>We love our clients, and they love us.</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <TestimonialSlider3 />
                                </div>
                            </div>
                        </div>
                        <div className="shape-007">
                            <img src="/assets/img/shapes/shape007.svg" alt="" />
                        </div>
                    </div>
                    {/*=====Testimonial end=======*/}
                    {/*=====Team start=======*/}
                    <div className="team-2 section-padding2 inner-font-1">
                        {/* <div className="container">
                            <div className="row">
                                <div className="col-lg-8 m-auto">
                                    <div className="heading2 text-center">
                                        <small className="heading-top inner-heading-top"><img src="/assets/img/icons/hands.svg" alt="" />Our
                                            Success in
                                            Numbers</small>
                                        <h2>Our team of financial professionals.</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-team">
                                        <div className="team-sides team-font-side">
                                            <div className="team-img">
                                                <img src="/assets/img/team/team9.jpg" alt="" />
                                            </div>
                                            <div className="team-content bg-18">
                                                <Link className="weight-700" href="#">Kathryn Murphy</Link>
                                                <p>Senior Consultant</p>
                                            </div>
                                        </div>
                                        <div className="team-sides team-back-side">
                                            <div className="team-content bg-18">
                                                <Link className="weight-700" href="#">Kathryn Murphy</Link>
                                                <p>Senior Consultant</p>
                                                <div className="space10" />
                                                <div className="team-socials">
                                                    <ul>
                                                        <li>
                                                            <Link data-bs-toggle="tooltip" title="Linked in" href="#"><i className="fa-brands fa-linkedin-in" /></Link>
                                                        </li>
                                                        <li>
                                                            <Link data-bs-toggle="tooltip" title="Facebook" href="#"><i className="fa-brands fa-facebook-f" /></Link>
                                                        </li>
                                                        <li>
                                                            <Link data-bs-toggle="tooltip" title="Instagram" href="#"><i className="fa-brands fa-instagram" /></Link>
                                                        </li>
                                                        <li>
                                                            <Link data-bs-toggle="tooltip" title="TikTok" href="#"><i className="fa-brands fa-tiktok" /></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-team">
                                        <div className="team-sides team-font-side">
                                            <div className="team-img">
                                                <img src="/assets/img/team/team10.jpg" alt="" />
                                            </div>
                                            <div className="team-content bg-18">
                                                <Link className="weight-700" href="#">Aston Turner</Link>
                                                <p>Group manager</p>
                                            </div>
                                        </div>
                                        <div className="team-sides team-back-side">
                                            <div className="team-content bg-18">
                                                <Link className="weight-700" href="#">Alyssa Healy</Link>
                                                <p>Group manager</p>
                                                <div className="space10" />
                                                <div className="team-socials">
                                                    <ul>
                                                        <li>
                                                            <Link data-bs-toggle="tooltip" title="Linked in" href="#"><i className="fa-brands fa-linkedin-in" /></Link>
                                                        </li>
                                                        <li>
                                                            <Link data-bs-toggle="tooltip" title="Facebook" href="#"><i className="fa-brands fa-facebook-f" /></Link>
                                                        </li>
                                                        <li>
                                                            <Link data-bs-toggle="tooltip" title="Instagram" href="#"><i className="fa-brands fa-instagram" /></Link>
                                                        </li>
                                                        <li>
                                                            <Link data-bs-toggle="tooltip" title="TikTok" href="#"><i className="fa-brands fa-tiktok" /></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-team">
                                        <div className="team-sides team-font-side">
                                            <div className="team-img">
                                                <img src="/assets/img/team/team11.jpg" alt="" />
                                            </div>
                                            <div className="team-content bg-18">
                                                <Link className="weight-700" href="#">Jhye Richardson</Link>
                                                <p>Associate Consultant</p>
                                            </div>
                                        </div>
                                        <div className="team-sides team-back-side">
                                            <div className="team-content bg-18">
                                                <Link className="weight-700" href="#">Jhye Richardson</Link>
                                                <p>Associate Consultant</p>
                                                <div className="space10" />
                                                <div className="team-socials">
                                                    <ul>
                                                        <li>
                                                            <Link data-bs-toggle="tooltip" title="Linked in" href="#"><i className="fa-brands fa-linkedin-in" /></Link>
                                                        </li>
                                                        <li>
                                                            <Link data-bs-toggle="tooltip" title="Facebook" href="#"><i className="fa-brands fa-facebook-f" /></Link>
                                                        </li>
                                                        <li>
                                                            <Link data-bs-toggle="tooltip" title="Instagram" href="#"><i className="fa-brands fa-instagram" /></Link>
                                                        </li>
                                                        <li>
                                                            <Link data-bs-toggle="tooltip" title="TikTok" href="#"><i className="fa-brands fa-tiktok" /></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-team">
                                        <div className="team-sides team-font-side">
                                            <div className="team-img">
                                                <img src="/assets/img/team/team12.jpg" alt="" />
                                            </div>
                                            <div className="team-content bg-18">
                                                <Link className="weight-700" href="#">Peter Handscomb</Link>
                                                <p>Consultant  Analytics</p>
                                            </div>
                                        </div>
                                        <div className="team-sides team-back-side">
                                            <div className="team-content bg-18">
                                                <Link className="weight-700" href="#">Peter Handscomb</Link>
                                                <p>Consultant  Analytics</p>
                                                <div className="space10" />
                                                <div className="team-socials">
                                                    <ul>
                                                        <li>
                                                            <Link data-bs-toggle="tooltip" title="Linked in" href="#"><i className="fa-brands fa-linkedin-in" /></Link>
                                                        </li>
                                                        <li>
                                                            <Link data-bs-toggle="tooltip" title="Facebook" href="#"><i className="fa-brands fa-facebook-f" /></Link>
                                                        </li>
                                                        <li>
                                                            <Link data-bs-toggle="tooltip" title="Instagram" href="#"><i className="fa-brands fa-instagram" /></Link>
                                                        </li>
                                                        <li>
                                                            <Link data-bs-toggle="tooltip" title="TikTok" href="#"><i className="fa-brands fa-tiktok" /></Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    {/*=====Team end=======*/}
                    {/*=====Faqs start=======*/}
                    <div className="faqs-area padding-bottom inner-font-1 inner-faq-1">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="heading2 mr50">
                                        <small className="heading-top inner-heading-top"><img src="/assets/img/icons/hands.svg" alt="" />
                                            Stress-Free Tax Filing</small>
                                        <h2>
                                            Maximizing Refunds, Minimizing Stress.
                                        </h2>
                                        <p>
                                            EvoTax takes the stress out of tax season with expert solutions for individuals and businesses. Our team focuses on simplifying the tax process, ensuring you receive the maximum refund while staying fully compliant with both U.S. and Indian tax laws.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="ml50">
                                        <div className="faqs">
                                            <Faq1 />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*=====Faqs end=======*/}
                    {/*=====Subscribe start=======*/}
                    <div className="subscribe-4 bg12 padding-90 inner-font-1 inner-subscribe">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="heading4 white-heading inner-heading no-margin-heading">
                                        <h2>Stay Updated with the Latest Tax Insights!</h2>
                                        <p>
                                            Sign up for our newsletter and get expert tax tips, important updates on U.S. and Indian tax laws, and valuable financial planning advice delivered directly to your inbox. Join our community and stay informed about tax-saving strategies, filing deadlines, and more to maximize your refund!
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-6 offset-lg-1">
                                    <div className="sunscribe-form">
                                        <div className="subscribe-from-wrap">
                                            <form action="#">
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