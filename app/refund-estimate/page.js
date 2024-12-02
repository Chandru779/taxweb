"use client";
import Faq1 from "@/components/elements/Faq1";
import Layout from "@/components/layout/Layout";
import TestimonialSlider3 from "@/components/slider/TestimonialSlider3";
import Link from "next/link";
import { useRef, useState } from "react";
export default function Page() {
  const [isToggled, setToggled] = useState(false);
  const handleToggle = () => setToggled(!isToggled);

  const inputRef = useRef()

  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Refund Estimate">
        <div className="main-contact-form section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="main-form lg-mr-15">
                  <form>
                    <div className="row">
                      <div className="col-lg-8">
                        <input
                          type="text"
                          name="fname"
                          placeholder="First Name"
                        />
                      </div>
                      <div className="col-lg-8">
                        <input
                          type="text"
                          name="lname"
                          placeholder="Last Name"
                        />
                      </div>
                      <div className="col-lg-8">
                        <input
                          type="text"
                          name="service"
                          placeholder="Phone Number"
                        />
                      </div>
                      <div className="col-lg-8">
                        <input
                          type="text"
                          name="subject"
                          placeholder="Note"
                        />
                      </div>
                      <div className="col-lg-6 d-flex align-items-center gap-2">
                        <input type="file" className="d-none" ref={inputRef} />
                        <button type="button" onClick={()=>inputRef.current.click()} className="theme-btn-10">
                          Choose File
                        </button>
                        {/* <small>file name*</small> */}
                      </div>
                      <div className="col-lg-8 " style={{padding:'20px 10px'}}>
                        <button type="submit" className="full-btn theme-btn-11">
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
