
'use client'
import { useState } from 'react'

export default function Faq1() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleClick = (key) => {
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
            <div id="faqs">
                <div className="single-faq">
                    <h2 className={isActive.key == 1 ? "faq-heading" : "faq-heading collapsed"} onClick={() => handleClick(1)}>
                        What makes EvoTax different from other tax service providers?
                    </h2>
                    <div id="collapse1" className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <p>
                            EvoTax stands out because of our deep expertise in both U.S. and Indian tax systems. We offer personalized tax solutions that ensure maximum refunds and minimize liabilities, tailored specifically to your needs. Whether you're an individual or a business, our experienced team provides clear guidance and simplifies the tax filing process.
                        </p>
                    </div>
                </div>
                <div className="single-faq">
                    <h2 className={isActive.key == 2 ? "faq-heading" : "faq-heading collapsed"} onClick={() => handleClick(2)}>
                        How can EvoTax help me with my U.S. tax filings?
                    </h2>
                    <div id="collapse2" className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <p>
                            At EvoTax, we specialize in handling all aspects of U.S. tax filing, including Federal & State tax returns, ITIN preparation, and tax representation. We ensure that your filings are accurate and compliant, while identifying every possible deduction to maximize your refund.
                        </p>
                    </div>
                </div>
                <div className="single-faq">
                    <h2 className={isActive.key == 3 ? "faq-heading" : "faq-heading collapsed"} onClick={() => handleClick(3)}>
                        What tax services do you offer for businesses?
                    </h2>
                    <div id="collapse3" className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <p>
                            For businesses, EvoTax provides a range of services including payroll tax management, tax planning, and business tax filing. We help you stay compliant with tax regulations while minimizing your liabilities through strategic planning and deductions tailored to your business’s specific needs.
                        </p>
                    </div>
                </div>
                <div className="single-faq">
                    <h2 className={isActive.key == 4 ? "faq-heading" : "faq-heading collapsed"} onClick={() => handleClick(4)}>
                        Can EvoTax assist with Indian tax filings?
                    </h2>
                    <div id="collapse4" className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <p>
                            Yes! EvoTax has a deep understanding of the Indian tax system and provides comprehensive services for Indian tax filings. Whether you are an NRI or an Indian resident, we help you navigate through Indian tax laws to ensure timely and accurate filings, and we maximize your deductions.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
