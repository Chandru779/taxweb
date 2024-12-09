
import Link from "next/link"

export default function Experience() {
    return (
        <>
            <div className="experience6 sp2">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about6-images">
                                <div className="about6-img1" data-aos="zoom-out" data-aos-duration={1100}>
                                    <img src="/assets/img/image/experience-img.png" alt="" />
                                </div>
                                <div className="about6-img2" data-aos="flip-right" data-aos-duration={900}>
                                    <img src="/assets/img/image/about6-img1.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className=" experience-hadding">
                                <div className="hadding6">
                                    <h1 className="font-f-7" data-aos="fade-left" data-aos-duration={900}>EvoTax has a decade of
                                        experience helping the community.</h1>
                                    <div className="space20" />
                                    <h4><Link href="#" className="font-f-7" data-aos="fade-left" data-aos-duration={1000}>Years of
                                        experience</Link></h4>
                                    <p className="font-f-7" data-aos="fade-left" data-aos-duration={800}>With years of experience in U.S. and Indian tax services, EvoTax has built a reputation for delivering accurate, reliable, and efficient tax solutions for individuals and businesses.</p>
                                    <div className="space10" />
                                    <h4><Link href="#" className="font-f-7" data-aos="fade-left" data-aos-duration={900}>Trusted by
                                        Business</Link></h4>
                                    <p className="font-f-7" data-aos="fade-left" data-aos-duration={1100}>Entrepreneurs and businesses trust EvoTax for expert tax preparation, advanced tax planning, and compliance services. Our team helps businesses navigate complex tax landscapes with confidence.</p>
                                    <div className="space10" />
                                    <h4><Link href="#" className="font-f-7" data-aos="fade-left" data-aos-duration={1100}>Satisfied
                                        customers</Link></h4>
                                    <p className="font-f-7" data-aos="fade-left" data-aos-duration={900}>Our clients consistently express satisfaction with our services, from Federal & State filing to tax representation. We pride ourselves on providing personalized attention and results-driven solutions.</p>
                                </div>
                                <div className="space40" />
                                <div className="button6" data-aos="fade-left" data-aos-duration={1000}>
                                    <Link href="#contactsec">Schedule your appointment <span><i className="fa-solid fa-arrow-right" /></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
