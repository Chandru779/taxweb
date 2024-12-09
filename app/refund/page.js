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
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Refund Status ">
        <div>
            <div className="container padding-90">
              <table className="w-100">
                <tr>
                  <th>State</th>
                  <th>Refund Status link</th>
                </tr>
                <tr>
                  <td>New Jersey</td>
                  <td><a href="https://www16.state.nj.us/TYTR_TGI_INQ/servlet/COMMON/prompt"
                         target="_blank">https://www16.state.nj.us/TYTR_TGI_INQ/servlet/COMMON/prompt</a></td>
                </tr>
                <tr>
                  <td>Alabama</td>
                  <td><a href="https://myalabamataxes.alabama.gov/_/#5"
                         target="_blank">https://myalabamataxes.alabama.gov/_/#5</a></td>
                </tr>
                <tr>
                  <td>Alaska</td>
                  <td>Tax free</td>
                </tr>
                <tr>
                  <td>Arkansas</td>
                  <td><a href="https://atap.arkansas.gov/_/#1" target="_blank">https://atap.arkansas.gov/_/#1</a></td>
                </tr>
                <tr>
                  <td>California</td>
                  <td><a href="https://webapp.ftb.ca.gov/refund/login.aspx?Lang=en-US"
                         target="_blank">https://webapp.ftb.ca.gov/refund/login.aspx?Lang=en-US</a></td>
                </tr>
                <tr>
                  <td>Colorado</td>
                  <td><a href="https://www.colorado.gov/revenueonline/_/#1"
                         target="_blank">https://www.colorado.gov/revenueonline/_/#1</a></td>
                </tr>
                <tr>
                  <td>Connecticut</td>
                  <td><a href="https://drsindtax.ct.gov/AUT/welcomeindividual.aspx"
                         target="_blank">https://drsindtax.ct.gov/AUT/welcomeindividual.aspx</a></td>
                </tr>
                <tr>
                  <td>Delaware</td>
                  <td><a href="https://dorweb.revenue.delaware.gov/scripts/refinq/refinq.dll"
                         target="_blank">https://dorweb.revenue.delaware.gov/scripts/refinq/refinq.dll</a></td>
                </tr>
                <tr>
                  <td>Florida</td>
                  <td>Tax free</td>
                </tr>
                <tr>
                  <td>Hawaii</td>
                  <td><a href="https://tax.ehawaii.gov/hoihoi/refund.html"
                         target="_blank">https://tax.ehawaii.gov/hoihoi/refund.html</a></td>
                </tr>
                <tr>
                  <td>Idaho</td>
                  <td><a href="https://idahotap.gentax.com/TAP/_/"
                         target="_blank">https://idahotap.gentax.com/TAP/_/</a></td>
                </tr>
                <tr>
                  <td>Illinois</td>
                  <td><a href="https://mytax.illinois.gov/_/" target="_blank">https://mytax.illinois.gov/_/</a></td>
                </tr>
                <tr>
                  <td>Indiana</td>
                  <td><a href="https://secure.in.gov/apps/dor/tax/refund/"
                         target="_blank">https://secure.in.gov/apps/dor/tax/refund/</a></td>
                </tr>
                <tr>
                  <td>Kentucky</td>
                  <td><a href="https://iitrefundstatus.ky.gov/TRFWeb/"
                         target="_blank">https://iitrefundstatus.ky.gov/TRFWeb/</a></td>
                </tr>
                <tr>
                  <td>Maine</td>
                  <td><a href="https://portal.maine.gov/refundstatus/refund"
                         target="_blank">https://portal.maine.gov/refundstatus/refund</a></td>
                </tr>
                <tr>
                  <td>Maryland</td>
                  <td><a href="https://interactive.marylandtaxes.com/INDIV/refundstatus/home.aspx"
                         target="_blank">https://interactive.marylandtaxes.com/INDIV/refundstatus/home.aspx</a></td>
                </tr>
                <tr>
                  <td>Massachusetts</td>
                  <td><a href="https://www.mass.gov/dor/e-services/masstaxconnect.html"
                         target="_blank">https://www.mass.gov/dor/e-services/masstaxconnect.html</a></td>
                </tr>
                <tr>
                  <td>Michigan</td>
                  <td><a
                      href="https://treas-secure.treas.state.mi.us/eservice_enu/start.swe?SWECmd=Start&SWEHo=treas-secure.treas.state.mi.us"
                      target="_blank">https://treas-secure.treas.state.mi.us/eservice_enu/start.swe?SWECmd=Start&SWEHo=treas-secure.treas.state.mi.us</a>
                  </td>
                </tr>
                <tr>
                  <td>Minnesota</td>
                  <td><a href="https://www.mndor.state.mn.us/tp/refund/_/#1"
                         target="_blank">https://www.mndor.state.mn.us/tp/refund/_/#1</a></td>
                </tr>
                <tr>
                  <td>Mississippi</td>
                  <td><a href="https://tap.dor.ms.gov/_/#2" target="_blank">https://tap.dor.ms.gov/_/#2</a></td>
                </tr>
                <tr>
                  <td>Missouri</td>
                  <td><a href="https://dors.mo.gov/tax/taxinq/welcome.jsp"
                         target="_blank">https://dors.mo.gov/tax/taxinq/welcome.jsp</a></td>
                </tr>
                <tr>
                  <td>Montana</td>
                  <td><a href="https://tap.dor.mt.gov/_/#1" target="_blank">https://tap.dor.mt.gov/_/#1</a></td>
                </tr>
                <tr>
                  <td>Nebraska</td>
                  <td><a href="https://ndr-refundstatus.ne.gov/refundstatus/public/search.faces"
                         target="_blank">https://ndr-refundstatus.ne.gov/refundstatus/public/search.faces</a></td>
                </tr>
                <tr>
                  <td>Nevada</td>
                  <td>Tax free</td>
                </tr>
                <tr>
                  <td>New Hampshire</td>
                  <td>Tax free</td>
                </tr>
                <tr>
                  <td>New Jersey</td>
                  <td><a href="https://www16.state.nj.us/TYTR_TGI_INQ/servlet/COMMON/prompt"
                         target="_blank">https://www16.state.nj.us/TYTR_TGI_INQ/servlet/COMMON/prompt</a></td>
                </tr>
                <tr>
                  <td>New York</td>
                  <td><a href="https://www8.tax.ny.gov/PRIS/prisStart"
                         target="_blank">https://www8.tax.ny.gov/PRIS/prisStart</a></td>
                </tr>
                <tr>
                  <td>North Carolina</td>
                  <td><a href="https://eservices.dor.nc.gov/wheresmyrefund/refundinput.jsp"
                         target="_blank">https://eservices.dor.nc.gov/wheresmyrefund/refundinput.jsp</a></td>
                </tr>
                <tr>
                  <td>North Dakota</td>
                  <td><a href="https://apps.nd.gov/tax/tap/_/#1" target="_blank">https://apps.nd.gov/tax/tap/_/#1</a>
                  </td>
                </tr>
                <tr>
                  <td>Oregon</td>
                  <td><a href="https://revenueonline.dor.oregon.gov/tap/_/"
                         target="_blank">https://revenueonline.dor.oregon.gov/tap/_/</a></td>
                </tr>
                <tr>
                  <td>Rhode Island</td>
                  <td><a href="https://www.ri.gov/taxation/refund/"
                         target="_blank">https://www.ri.gov/taxation/refund/</a></td>
                </tr>
                <tr>
                  <td>South Carolina</td>
                  <td><a href="https://dor.sc.gov/tax/refund-call"
                         target="_blank">https://dor.sc.gov/tax/refund-call</a></td>
                </tr>
                <tr>
                  <td>South Dakota</td>
                  <td>Tax free</td>
                </tr>
                <tr>
                  <td>Tennessee</td>
                  <td>Tax free</td>
                </tr>
                <tr>
                  <td>Texas</td>
                  <td>Tax free</td>
                </tr>
                <tr>
                  <td>Vermont</td>
                  <td><a href="https://myvtax.vermont.gov/_" target="_blank">https://myvtax.vermont.gov/_</a></td>
                </tr>
                <tr>
                  <td>Virginia</td>
                  <td><a href="https://www.individual.tax.virginia.gov/VTOL/IndRefundStatus.seam"
                         target="_blank">https://www.individual.tax.virginia.gov/VTOL/IndRefundStatus.seam</a></td>
                </tr>
                <tr>
                  <td>Washington</td>
                  <td>Tax free</td>
                </tr>
                <tr>
                  <td>West Virginia</td>
                  <td><a href="https://mytaxes.wvtax.gov/_/#1" target="_blank">https://mytaxes.wvtax.gov/_/#1</a></td>
                </tr>
                <tr>
                  <td>Wisconsin</td>
                  <td><a href="https://ww2.revenue.wi.gov/RefundInquiry/"
                         target="_blank">https://ww2.revenue.wi.gov/RefundInquiry/</a></td>
                </tr>
                <tr>
                  <td>Wyoming</td>
                  <td>Tax free</td>
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
                        <input type="email" placeholder="Email Address"/>
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
