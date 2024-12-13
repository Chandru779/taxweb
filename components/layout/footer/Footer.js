import Link from "next/link"
export default function Footer() {
    return (
        <>
            <footer className="footer-area padding-top footer-2 bg9">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-footer mr50">
                                <Link href="/" className="footer-logo" style={{width:"120px"}}> <img src="/assets/img/logo/evobrand.svg" alt="" /></Link>
                                <div className="space20" />
                                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                                    consequat duis
                                    enim velit mollit.</p>
                            </div>
                        </div>
                        <div className="col-lg col-md-6">
                            <div className="single-footer">
                                <h3>Our services</h3>
                                <div className="footer-menu">
                                    <ul>
                                        <li><Link href="/service">Federal & State Filing</Link></li>
                                        <li><Link href="/service">Tax Representation</Link></li>
                                        <li><Link href="/service">ITIN Preparation</Link></li>
                                        <li><Link href="/service">Advanced Tax Planning</Link></li>
                                        <li><Link href="/service">FBAR & FATCA Compliance</Link></li>
                                        <li><Link href="/service">Amendment Filing</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg col-md-6">
                            <div className="single-footer">
                                <h3>Quick links</h3>
                                <div className="footer-menu">
                                    <ul>
                                        <li><Link href="/">Product</Link></li>
                                        <li><Link href="#">About us</Link></li>
                                        <li><Link href="#">Pricing</Link></li>
                                        <li><Link href="#">Refund</Link></li>
                                        <li><Link href="#">Refund Estimate</Link></li>
                                        <li><Link href="#">Privacy&Policy</Link></li>
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
                                        <Link href="#">USA: +91 02 2585 0556</Link>
                                        <Link href="#">UK: +61 02 2585 0556</Link>
                                    </div>
                                </div>
                                <div className="footer-contact">
                                    <div className="single-contact">
                                        <div className="contact-icon">
                                            <img src="/assets/img/icons/contact-email2.svg" alt="" />
                                        </div>
                                        <Link href="#">Contacthelp@Demoui.co</Link>
                                        <Link href="#">Info@consultia.co</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center copyright2 padding-top">
                        <div className="col-lg-6">
                            <p>© 2023 Consultia by fleexstudio. All Rights Reserved.</p>
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
