
import Link from "next/link"

export default function HowItWork() {
    return (
        <>
            <div className="works-6 sp2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto text-center">
                            <div className="hadding6-w">
                                <h1 className="font-f-7" data-aos="fade-up" data-aos-duration={900}>EvoTax services specializes
                                    <br />
                                    <span className="after6">
                                        in Tax Preparation.
                                    </span>
                                </h1>
                                <div className="space10" />
                                <p className="font-f-7" data-aos="fade-up" data-aos-duration={1100}>Prepare your taxes in 3 simple
                                    steps!</p>
                            </div>
                        </div>
                    </div>
                    <div className="space30" />
                    <div className="row">
                        <div className="col-lg-4 text-center">
                            <div className="work6-box" data-aos="fade-up" data-aos-duration={1200}>
                                <div className="work6-icon">
                                    <img src="/assets/img/icons/work6-icon1.svg" alt="" />
                                </div>
                                <div className="work6-hadding">
                                    <h4 className="font-f-7"><Link href="#">Schedule a Consultation</Link></h4>
                                    <p className="font-f-7">Book a session with our expert team to discuss your tax needs and gather necessary documents.
                                    </p>
                                </div>
                                <div className="work6-shape">
                                    <img src="/assets/img/shapes/work5-shape1.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center">
                            <div className="work6-box" data-aos="fade-up" data-aos-duration={900}>
                                <div className="work6-icon">
                                    <img src="/assets/img/icons/work6-icon2.svg" alt="" />
                                </div>
                                <div className="work6-hadding">
                                    <h4 className="font-f-7"><Link href="#">We Prepare Your Taxes</Link></h4>
                                    <p className="font-f-7">Our experienced professionals handle your Federal & State Filing, ITIN Preparation, and tax planning with precision.
                                    </p>
                                </div>
                                <div className="work6-shape">
                                    <img src="/assets/img/shapes/work5-shape2.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center">
                            <div className="work6-box" data-aos="fade-up" data-aos-duration={700}>
                                <div className="work6-icon">
                                    <img src="/assets/img/icons/work6-icon3.svg" alt="" />
                                </div>
                                <div className="work6-hadding">
                                    <h4 className="font-f-7"><Link href="#">File and Enjoy Your Refund</Link></h4>
                                    <p className="font-f-7">Once your taxes are prepared, you can confidently file your return and look forward to your refund.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
