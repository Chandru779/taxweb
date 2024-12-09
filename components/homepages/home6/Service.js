
import Link from "next/link"

export default function Service() {
    return (
        <>
            <div className="service6 sp2 bg-13">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 m-auto text-center">
                            <div className="hadding6" data-aos="fade-up" data-aos-duration={700}>
                                <h1 className="font-f-7">EvoTax offers multiple services <br /><span className="after6">throughout the
                                    year.</span></h1>
                            </div>
                        </div>
                    </div>
                    <div className="space30" />
                    <div className="row">
                        <div className="col-lg-6" data-aos="fade-up" data-aos-duration={700}>
                            <div className="service6-box">
                                <div >
                                    <div className="service-box-icon">
                                        <img src="/assets/img/icons/service6-icon1.svg" alt="" />
                                    </div>
                                </div>
                                <div className="hadding6">
                                    <h4><Link href="#" className="font-f-7">Federal & State Taxes</Link></h4>
                                    <p className="font-f-7">From individual returns to business filings, we ensure accurate, timely tax preparation. Our experts help you navigate U.S. Federal and State tax regulations with ease.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-duration={800}>
                            <div className="service6-box">
                                <div >
                                    <div className="service-box-icon">
                                        <img src="/assets/img/icons/service6-icon2.svg" alt="" />
                                    </div>
                                </div>
                                <div className="hadding6">
                                    <h4><Link href="#" className="font-f-7">Tax Representation</Link></h4>
                                    <p className="font-f-7">In need of expert guidance? Our tax representation services provide assistance during audits, disputes, and any other tax-related issues, ensuring your best interests are represented</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-duration={1200}>
                            <div className="service6-box">
                                <div >
                                    <div className="service-box-icon">
                                        <img src="/assets/img/icons/service6-icon3.svg" alt="" />
                                    </div>
                                </div>
                                <div className="hadding6">
                                    <h4><Link href="#" className="font-f-7">ITIN Preparation</Link></h4>
                                    <p className="font-f-7">We help you obtain an Individual Taxpayer Identification Number (ITIN) quickly and efficiently, ensuring compliance with U.S. tax laws.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-duration={900}>
                            <div className="service6-box">
                                <div >
                                    <div className="service-box-icon">
                                        <img src="/assets/img/icons/service6-icon4.svg" alt="" />
                                    </div>
                                </div>
                                <div className="hadding6">
                                    <h4><Link href="#" className="font-f-7">Advanced Tax Planning</Link></h4>
                                    <p className="font-f-7">Our team of tax experts provides strategic tax planning to minimize liabilities and maximize your returns, guiding you toward smarter financial decisions.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-duration={700}>
                            <div className="service6-box">
                                <div >
                                    <div className="service-box-icon">
                                        <img src="/assets/img/icons/service6-icon5.svg" alt="" />
                                    </div>
                                </div>
                                <div className="hadding6">
                                    <h4><Link href="#" className="font-f-7">FBAR & FATCA Compliance</Link></h4>
                                    <p className="font-f-7">Stay compliant with U.S. financial reporting requirements. EvoTax ensures you meet FBAR and FATCA obligations, avoiding penalties and fines.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-duration={1200}>
                            <div className="service6-box">
                                <div >
                                    <div className="service-box-icon">
                                        <img src="/assets/img/icons/service6-icon6.svg" alt="" />
                                    </div>
                                </div>
                                <div className="hadding6">
                                    <h4><Link href="#" className="font-f-7">Amendment Filing</Link></h4>
                                    <p className="font-f-7">If you’ve made errors in your tax filing, we assist in amending your returns, ensuring everything is accurate and compliant with the law.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
