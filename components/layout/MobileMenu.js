import Link from "next/link"
import { useState } from 'react'
export default function MobileMenu({ isMobileMenu, handleMobileMenu }) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <div className="mobile-header mobile-header-4 d-lg-none">
                <div className="container-fluid">
                    <div className="col-12">
                        <div className="mobile-header-elements">
                            <div className="mobile-logo">
                                <Link href="/"><img src="/assets/img/logo/site-logo-6.svg" alt="" /></Link>
                            </div>
                            <div className="mobile-nav-icon" onClick={handleMobileMenu}>
                                <i className="fa-solid fa-bars" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`mobile-sidebar ${isMobileMenu ? "mobile-menu-active" : ""}`}>
                <div className="menu-close" onClick={handleMobileMenu}>
                    <i className="fa-solid fa-xmark" />
                </div>
                <div className="mobile-nav">
                    <ul className="mobile-nav-list">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li><Link href="/about">About us</Link>
                        </li>
                        <li><Link href="/service">Service</Link>
                        </li>
                        <li><Link href="/price">Pricing</Link>
                        </li>
                        <li><Link href="/refund">Refund</Link>
                        </li>
                        <li><Link href="/refund-estimate">Refund Estimate</Link>
                        </li>
                        <li><Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                    <div className="mobile-contact">
                        <div className="single-footer">
                            <h3>Get in touch</h3>
                            <div className="footer-contact">
                                <div className="single-contact">
                                    <div className="contact-icon">
                                        <img src="/assets/img/icons/contact-phone4.svg" alt="" />
                                    </div>
                                    <Link href="#">USA: +91 02 2585 0556</Link>
                                    <Link href="#">UK: +61 02 2585 0556</Link>
                                </div>
                            </div>
                            <div className="footer-contact">
                                <div className="single-contact">
                                    <div className="contact-icon">
                                        <img src="/assets/img/icons/contact-email4.svg" alt="" />
                                    </div>
                                    <Link href="#">Contacthelp@Demoui.co</Link>
                                    <Link href="#">Info@consultia.co</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
