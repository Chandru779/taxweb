"use client";
import Faq1 from "@/components/elements/Faq1";
import Layout from "@/components/layout/Layout";
import TestimonialSlider3 from "@/components/slider/TestimonialSlider3";
import Link from "next/link";
import { useState } from "react";
export default function Page() {
  const [isToggled, setToggled] = useState(false);
  const handleToggle = () => setToggled(!isToggled);

  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Refund Policy">
        <div>
            <div className="container padding-90">
              <table className="w-100">
                <tr>
                  <th>Name Of The Service</th>
                  <th>Status</th>
                </tr>
                <tr>
                  <td>FEDERAL- STANDARD RETURN(1040)</td>
                  <td>Pending</td>
                </tr>
                <tr>
                  <td>EACH STATE RETURN</td>
                  <td>Pending</td>
                </tr>
                <tr>
                  <td>FEDERAL – NR RETURN(1040NR)</td>
                  <td>Pending</td>
                </tr>
                <tr>
                  <td>ITIN FILING – NON RESIDENT</td>
                  <td>Pending</td>
                </tr>
                <tr>
                  <td>CITY RETURN & COUNTY TAXES</td>
                  <td>Pending</td>
                </tr>
                <tr>
                  <td>AMENDED RETURN CHARGES</td>
                  <td>Pending</td>
                </tr>
              </table>
            </div>
          <div className="subscribe-4 bg12 padding-90 inner-font-1 inner-subscribe">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="heading4 white-heading inner-heading no-margin-heading">
                    <h2>Want to join our team?</h2>
                    <p>
                      We are always looking for talented people, We here to help
                      you to open your bright future.
                    </p>
                  </div>
                </div>
                <div className="col-lg-5 col-md-6 offset-lg-1">
                  <div className="sunscribe-form">
                    <div className="subscribe-from-wrap">
                      <form action="#">
                        <input type="email" placeholder="Email Address" />
                        <button type="submit" name="button">
                          Subscribe Now{" "}
                          <img
                            src="/assets/img/icons/arrow-up-right.svg"
                            alt=""
                          />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
