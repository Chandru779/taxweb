"use client";
import useEmailSubscribeForm from "@/hooks/useEmailSubscribeForm";
import Layout from "@/components/layout/Layout";

export default function Page() {
  const { formData, handleInputChange, handleSubmit } = useEmailSubscribeForm();

  const listItemStyle = {
    fontFamily: '"satoshi" !important',
    fontWeight: 500,
    fontSize: "16px",
  };

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

                      <h3 className="font-f-3">Tax Return Forms - Federal</h3>
                      <ol className="font-f-3">
                        <li style={listItemStyle}>
                          Resident Tax Returns – 1040, 1040A, 1040-EZ
                        </li>
                        <li style={listItemStyle}>
                          Non-Resident Tax Returns – 1040NR, 1040NR-EZ
                        </li>
                        <li style={listItemStyle}>
                          Amended Tax Return – 1040X
                        </li>
                        <li style={listItemStyle}>
                          Tax return Preparation – Federal, State, City & Local
                        </li>
                      </ol>

                      <h3 className="font-f-3">
                        Return Preparation and Filing Process:
                      </h3>
                      <ol className="font-f-3">
                        <li style={listItemStyle}>
                          All the data will pass through our Quality Assurance
                          process, and multiple reviews will be carried out on
                          your tax return at various levels.
                        </li>
                        <li style={listItemStyle}>
                          We ensure that your returns don’t miss out on the
                          deductions and credits that you are eligible for.
                        </li>
                        <li style={listItemStyle}>
                          The returns will be signed electronically by a tax
                          professional governed by the IRS code as a paid
                          preparer.
                        </li>
                        <li style={listItemStyle}>
                          Your tax return can be filed electronically so you
                          will get a refund back quicker.
                        </li>
                        <li style={listItemStyle}>
                          Non-Resident returns will be signed by our Paid
                          Preparer, and we file paper returns in an expedited
                          fashion for better tracking and faster refund.
                        </li>
                      </ol>

                      <h5 className="font-f-3">
                        We offer tax planning in the following areas:
                      </h5>
                      <ol className="font-f-3">
                        <li style={listItemStyle}>
                          A study of Itemized vs Standard deduction
                        </li>
                        <li style={listItemStyle}>
                          Stock options (ESOP) or Stock purchase plans (ESPP)
                          tax planning
                        </li>
                        <li style={listItemStyle}>
                          Rental Income / Loss vs Itemized Deductions
                        </li>
                        <li style={listItemStyle}>
                          Investments into retirement plans like 401K, IRA tax
                          planning services, etc.
                        </li>
                        <li style={listItemStyle}>
                          Free Refund Estimates for current year (TY2024) in
                          Just 24 To 36 Hours**
                        </li>
                        <li style={listItemStyle}>
                          Free Tax evaluation for 3 years (TY2023, 2022, 2021)
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>

                <div className="col-md-12" id="taxrepresentation">
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
                        <br />
                        <br />
                        Global Tax will be providing Free tax representation
                        services Individual or Business Entity receives any
                        audit notice from the IRS with regards to the previously
                        filed tax returns. The taxpayer can write a Power of
                        Attorney, Form 2848, appointing our Enrolled Agents to
                        represent the case before the IRS, this Power of
                        Attorney will authorize us to act on behalf of taxpayers
                        in the tax matters only.
                      </p>
                      {/* <Link href="#" className="theme-btn-16">Read More <img src="/assets/img/icons/angle-inner.svg" alt="" /></Link> */}
                    </div>
                  </div>
                </div>

                <div className="col-md-12" id="itinpreparation">
                  <div className="single-inner-service single-inner-service-2 trans-1">
                    <div className="service-icon bg-24">
                      <img src="/assets/img/icons/service-12.png" alt="" />
                    </div>
                    <div className="service-content">
                      <h3 className="font-f-3">ITIN Preparation</h3>
                      <p className="font-f-3">
                        <b>
                          An Individual Taxpayer Identification Number (ITIN)
                        </b>{" "}
                        is a tax processing number issued by the Internal
                        Revenue Service (IRS). The IRS issues ITINs to help
                        individuals comply with the U.S. tax laws, and to
                        provide a means to efficiently process and account for
                        tax returns and payments for those not eligible for a
                        Social Security Number (SSN). ITINs are issued by the
                        IRS to certain non-resident aliens who require a number
                        for tax treaty, tax return or other reasons.
                        <b>
                          {" "}
                          We provide assistance in applying/filing ITIN to our
                          clients absolutely at no cost. For more information
                          about ITIN,
                          <br />
                          please click on the below mentioned link.
                        </b>
                        <br />
                        <br />
                        <a href="https://www.irs.gov/individuals/international-taxpayers/general-itin-information">
                          https://www.irs.gov/individuals/international-taxpayers/general-itin-information
                        </a>
                      </p>
                      {/* <Link href="#" className="theme-btn-16">Read More <img src="/assets/img/icons/angle-inner.svg" alt="" /></Link> */}
                    </div>
                  </div>
                </div>

                <div className="col-md-12" id="advancedtaxfiling">
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
                        <br />
                        <br />
                        We understand each client’s situation and then apply our
                        knowledge of the changing tax rules to plan the best
                        business and personal decisions. Our experts can
                        efficiently prepare your tax return for filing your
                        taxes correctly and on time as per IRS Regulations.
                      </p>
                      {/* <Link href="#" className="theme-btn-16">Read More <img src="/assets/img/icons/angle-inner.svg" alt="" /></Link> */}
                    </div>
                  </div>
                </div>

                <div className="col-md-12" id="compliance">
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
                        <br />
                        <br />
                        If Taxpayer(s) has more than $50,000 in foreign country
                        as in form of Bank/Securities/Deposits, then each
                        taxpayer has to report it to IRS.FATCA stands for
                        Foreign Account & Tax Compliance Act, FATCA should be
                        Reported by using Form 8938 with IRS along with Income
                        Tax Return on or before April 15th.
                        <br />
                        <br />
                        <a href="https://www.irs.gov/businesses/small-businesses-self-employed/report-of-foreign-bank-and-financial-accounts-fbar">
                          https://www.irs.gov/businesses/small-businesses-self-employed/report-of-foreign-bank-and-financial-accounts-fbar
                        </a>
                      </p>
                      {/* <Link href="#" className="theme-btn-16">Read More <img src="/assets/img/icons/angle-inner.svg" alt="" /></Link> */}
                    </div>
                  </div>
                </div>

                <div className="col-md-12" id="amendment">
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

                      <h6 className="font-f-3">
                        At Global Tax we will help you to file your Amendment
                        Tax Return in any of the following reasons
                      </h6>
                      <ol className="font-f-3">
                        <li style={listItemStyle}>
                          Claiming additional Dependents.
                        </li>
                        <li style={listItemStyle}>
                          Removing Dependents you previously claimed by mistake.
                        </li>
                        <li style={listItemStyle}>
                          Reporting your proper filing status.
                        </li>
                        <li style={listItemStyle}>
                          Reporting additional income.
                        </li>
                        <li style={listItemStyle}>
                          Making changes in your ‘Above the line Deductions’,’
                          Standard Deduction’ or’ Itemized Deductions’.
                        </li>
                        <li style={listItemStyle}>
                          Changing your personal exemptions.
                        </li>
                        <li style={listItemStyle}>
                          Claiming additional Tax Credits, removing Tax Credits
                          mistakenly taken, or recalculating the amount of the
                          Credits and Reporting additional withholding etc.
                        </li>
                      </ol>
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
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          placeholder="Email Address"
                          onChange={handleInputChange}
                          required
                        />
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
