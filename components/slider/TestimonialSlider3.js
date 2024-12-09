'use client'
import Link from "next/link"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay],
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
}
export default function TestimonialSlider3() {
    return (
        <>
            <Swiper {...swiperOptions} className="testimonials-3 owl-carousel">
                <SwiperSlide className="single-testimonial">
                    <div className="testimonial-icon">
                        <img src="/assets/img/icons/quote-1.png" alt="" />
                    </div>
                    <p>
                        “EvoTax has been amazing in handling my taxes. I’ve always had a complicated tax situation, but their team made the process so smooth and easy. They took the time to explain everything, and I really felt like they had my best interests at heart. Highly recommended!”
                    </p>
                    <div className="author-reviews">
                        <div className="author">
                            <Link href="#">Jason B</Link>
                        </div>
                        <div className="review-1">
                            <div className="review">
                                <ul>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star-half" /></li>
                                </ul>
                            </div>
                            <div className="review-rate">
                                <p>(4.5)</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="single-testimonial">
                    <div className="testimonial-icon">
                        <img src="/assets/img/icons/quote-1.png" alt="" />
                    </div>
                    <p>
                        I had the privilege of working with EvoTax for my Indian tax filings. They understood the intricacies of both Indian and U.S. tax systems, and I was able to save money through their expert advice. Their professionalism and quick responses were outstanding!”
                    </p>
                    <div className="author-reviews">
                        <div className="author">
                            <Link href="#">Rajesh M</Link>
                        </div>
                        <div className="review-1">
                            <div className="review">
                                <ul>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star-half" /></li>
                                </ul>
                            </div>
                            <div className="review-rate">
                                <p>(4.7)</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="single-testimonial">
                    <div className="testimonial-icon">
                        <img src="/assets/img/icons/quote-1.png" alt="" />
                    </div>
                    <p>
                        “I was initially worried about handling my taxes in the U.S. while living in India, but EvoTax made the entire process clear and manageable. Their team is attentive, responsive, and highly knowledgeable about both U.S. and Indian tax laws. Thank you Team!!”
                    </p>
                    <div className="author-reviews">
                        <div className="author">
                            <Link href="#">Neha Sharma</Link>
                        </div>
                        <div className="review-1">
                            <div className="review">
                                <ul>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star-half" /></li>
                                </ul>
                            </div>
                            <div className="review-rate">
                                <p>(4.4)</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="single-testimonial">
                    <div className="testimonial-icon">
                        <img src="/assets/img/icons/quote-1.png" alt="" />
                    </div>
                    <p>
                        EvoTax has been a game-changer for my business. They handle all our tax filings, ensuring we are compliant and maximizing deductions. Their team is professional, knowledgeable, and always ready to assist with any questions. I highly recommend them!”
                    </p>
                    <div className="author-reviews">
                        <div className="author">
                            <Link href="#">Anjali Patel</Link>
                        </div>
                        <div className="review-1">
                            <div className="review">
                                <ul>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                    <li><i className="fa-solid fa-star" /></li>
                                </ul>
                            </div>
                            <div className="review-rate">
                                <p>(5)</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
