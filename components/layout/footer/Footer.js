import Link from "next/link"
export default function Footer() {
    return (
        <>
            <footer className="footer-area padding-top footer-2 bg-10">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-footer mr50">
                                <Link href="/" className="footer-logo" style={{width:"120px"}}> <img src="/assets/img/logo/evobrand.svg" alt="" /></Link>
                                <div className="space20" />
                                <p>Tax preparation and legal services designed to optimize refunds through strategic deductions for individuals & businesses.</p>
                            </div>
                        </div>
                        <div className="col-lg col-md-6">
                            <div className="single-footer">
                                <h3>Our services</h3>
                                <div className="footer-menu">
                                    <ul>
                                        <li><Link href="/service#federalstatefiling">Federal & State Filing</Link></li>
                                        <li><Link href="/service#taxrepresentation">Tax Representation</Link></li>
                                        <li><Link href="/service#itinpreparation">ITIN Preparation</Link></li>
                                        <li><Link href="/service#advancedtaxfiling">Advanced Tax Planning</Link></li>
                                        <li><Link href="/service#compliance">FBAR & FATCA Compliance</Link></li>
                                        <li><Link href="/service#amendment">Amendment Filing</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg col-md-6">
                            <div className="single-footer">
                                <h3>Quick links</h3>
                                <div className="footer-menu">
                                    <ul>
                                        <li><Link href="/contact">Contact</Link></li>
                                        <li><Link href="/about">About us</Link></li>
                                        <li><Link href="/price">Pricing</Link></li>
                                        <li><Link href="/refund">Refund</Link></li>
                                        <li><Link href="/refund-estimate">Refund Estimate</Link></li>
                                        <li><Link href="/privacy">Privacy & Policy</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer">
                                <h3>Get in touch</h3>
                                <div className="footer-contact">
                                    <div className="single-contact">
                                        <div className="contact-icon">
                                            <img src="/assets/img/icons/contact-phone2.svg" alt="" />
                                        </div>
                                        <Link href="tel:+91 02 2585 0556">USA: +91 02 2585 0556</Link>
                                        <Link href="tel:+91 02 2585 0556">UK: +61 02 2585 0556</Link>
                                    </div>
                                </div>
                                <div className="footer-contact">
                                    <div className="single-contact">
                                        <div className="contact-icon">
                                            <img src="/assets/img/icons/contact-email2.svg" alt="" />
                                        </div>
                                        <Link href="mailto:info@evotaxes.com" style={{marginTop:'10px'}}>info@evotaxes.com</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center copyright2 padding-top">
                        <div className="col-lg-6">
                            <p>@ 2024 evotax. All Rights Reserved.</p>
                        </div>
                        <div className="col-lg-6 text-right">
                            <div className="social social2">
                                <ul>
                                    <li><Link data-bs-toggle="tooltip" title="Linked in" href="#"><i className="fa-brands fa-linkedin-in" /></Link>
                                    </li>
                                    <li><Link data-bs-toggle="tooltip" title="Facebook" href="#"><i className="fa-brands fa-facebook-f" /></Link></li>
                                    <li><Link data-bs-toggle="tooltip" title="Instagram" href="#"><i className="fa-brands fa-instagram" /></Link></li>
                                    {/* <li><Link data-bs-toggle="tooltip" title="TikTok" href="#"><i className="fa-brands fa-tiktok" /></Link></li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
