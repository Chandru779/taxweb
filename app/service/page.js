"use client";
import useEmailSubscribeForm from "@/hooks/useEmailSubscribeForm";
import Layout from "@/components/layout/Layout";

export default function Page() {
  const { formData, handleInputChange, handleSubmit } = useEmailSubscribeForm();

  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Services">
        <div>
          <div className="section-padding bg-28">
            <div className="container">
              <div className="row">
                <div className="col-md-12" id="federalstatefiling">
                  <div className="single-inner-service single-inner-service-2 trans-1">
                    <div className="service-icon bg-24">
                      <img src="/assets/img/icons/service-10.png" alt="" />
                    </div>
                    <div className="service-content">
                      <h3 className="font-f-3">Federal & State Filing</h3>
                      <p className="font-f-3">
                        Our tax professionals will do everything from entering
                        the data on all the numerous IRS forms after vigilant
                        analysis with the information and documents provided to
                        us by the clients. The following are the different forms
                        that are usually filed with IRS and also depicts the
                        planning, preparation and filing process at Global Tax.
                      </p>
                      {/* <Link href="#" className="theme-btn-16">Read More <img src="/assets/img/icons/angle-inner.svg" alt="" /></Link> */}
                    </div>
                  </div>
                </div>
                <div className="col-md-12"  id="taxrepresentation">
                  <div className="single-inner-service single-inner-service-2 trans-1">
                    <div className="service-icon bg-24">
                      <img src="/assets/img/icons/service-11.png" alt="" />
                    </div>
                    <div className="service-content">
                      <h3 className="font-f-3">Tax Representation</h3>
                      <p className="font-f-3">
                        230 The IRS has three years from the due date of the tax
                        return to assess any additional taxes that may be owed
                        by issuing an Audit Letter. The IRS has the authority to
                        examine the taxpayer’s books, papers and other records
                        that supports the items considered on your filed tax
                        returns. It is always a good idea to maintain the
                        records that are relevant with respect to the filed tax
                        returns for at least 3 years from the date on which you
                        have filed your taxes.
                      </p>
                      {/* <Link href="#" className="theme-btn-16">Read More <img src="/assets/img/icons/angle-inner.svg" alt="" /></Link> */}
                    </div>
                  </div>
                </div>
                <div className="col-md-12"  id="itinpreparation">
                  <div className="single-inner-service single-inner-service-2 trans-1">
                    <div className="service-icon bg-24">
                      <img src="/assets/img/icons/service-12.png" alt="" />
                    </div>
                    <div className="service-content">
                      <h3 className="font-f-3">ITIN Preparation</h3>
                      <p className="font-f-3">
                        An Individual Taxpayer Identification Number (ITIN) is a
                        tax processing number issued by the Internal Revenue
                        Service (IRS). The IRS issues ITINs to help individuals
                        comply with the U.S. tax laws, and to provide a means to
                        efficiently process and account for tax returns and
                        payments for those not eligible for a Social Security
                        Number (SSN). ITINs are issued by the IRS to certain
                        non-resident aliens who require a number for tax treaty,
                        tax return or other reasons. We provide assistance in
                        applying/filing ITIN to our clients absolutely at no
                        cost.{" "}
                      </p>
                      {/* <Link href="#" className="theme-btn-16">Read More <img src="/assets/img/icons/angle-inner.svg" alt="" /></Link> */}
                    </div>
                  </div>
                </div>
                <div className="col-md-12"  id="advancedtaxfiling">
                  <div className="single-inner-service single-inner-service-2 trans-1">
                    <div className="service-icon bg-24">
                      <img src="/assets/img/icons/service-13.png" alt="" />
                    </div>
                    <div className="service-content">
                      <h3 className="font-f-3">Advanced Tax Planning</h3>
                      <p className="font-f-3">
                        The goal of tax planning is to arrange your financial
                        affairs so as to minimize your tax liability and
                        maximize tax benefits. You can reduce your income,
                        increase your deductions, and take advantage of tax
                        credit. We will help businesses grow by calculating the
                        taxes properly and also at the same time give you
                        suggestions in order to plan your finances in the best
                        possible way. To help you along, we cover the major
                        federal taxes to which you may be subject. We’ll suggest
                        tips for avoiding problem areas and for saving your tax
                        dollars.
                      </p>
                      {/* <Link href="#" className="theme-btn-16">Read More <img src="/assets/img/icons/angle-inner.svg" alt="" /></Link> */}
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="single-inner-service single-inner-service-2 trans-1">
                    <div className="service-icon bg-24">
                      <img src="/assets/img/icons/service-14.png" alt="" />
                    </div>
                    <div className="service-content">
                      <h3 className="font-f-3">FBAR & FATCA Compliance</h3>
                      <p className="font-f-3">
                        All Citizens and Resident Aliens of US are required to
                        file a statement regarding “Report of Foreign Bank and
                        Financial Accounts (FBAR) Form TD F 90-22.1 with IRS,
                        required under Bank Secrecy Act regulations issued by
                        the Financial Crimes Enforcement Network, every year if
                        any taxpayer is having a financial interest / signature
                        authority over financial accounts, including bank(s),
                        securities or any other type of financial accounts in a
                        foreign country, the aggregate value of these financial
                        accounts crosses or exceeds $10,000 at any particular
                        time during the calendar year (Jan 1st 2020 to Dec 31st
                        2020). The due date for filing the FBAR is April 15th
                        2020.
                      </p>
                      {/* <Link href="#" className="theme-btn-16">Read More <img src="/assets/img/icons/angle-inner.svg" alt="" /></Link> */}
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="single-inner-service single-inner-service-2 trans-1">
                    <div className="service-icon bg-24">
                      <img src="/assets/img/icons/service-15.png" alt="" />
                    </div>
                    <div className="service-content">
                      <h3 className="font-f-3">Amendment</h3>
                      <p className="font-f-3">
                        An amended tax return generally allows you to file your
                        tax return again to correct your filing status, add or
                        correct your income, claim or allow deductions or
                        credits which you have missed out in your previously
                        filed tax return.
                      </p>
                      {/* <Link href="#" className="theme-btn-16">Read More <img src="/assets/img/icons/angle-inner.svg" alt="" /></Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*=====Service end=======*/}
          {/*=====Subscribe start=======*/}
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
                      <form onSubmit={handleSubmit}>
                      <input type="email" name='email' value={formData.email} placeholder="Email Address"  onChange={handleInputChange} required />
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
