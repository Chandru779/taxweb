
'use client'
import AOS from 'aos'
import { useEffect, useState } from "react"
import { ToastContainer } from "react-toastify";
import BackToTop from '../elements/BackToTop'
import Breadcrumb from './Breadcrumb'
import MobileMenu from './MobileMenu'
import PageHead from './PageHead'
import Footer from './footer/Footer'
import Header from "./header/Header"

export default function Layout({ headerStyle, footerStyle, headTitle, breadcrumbTitle, children }) {
    const [scroll, setScroll] = useState(0)
    // Moblile Menu
    const [isMobileMenu, setMobileMenu] = useState(false)
    const handleMobileMenu = () => setMobileMenu(!isMobileMenu)

    useEffect(() => {
        AOS.init()

        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    }, [])
    return (
        <>
            <PageHead headTitle={headTitle} />

            <Header scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />
            <MobileMenu isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />

            {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
            {children}
            
            < Footer />
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar closeOnClick pauseOnHover />
            <BackToTop scroll={scroll} />
        </>
    )
}
