"use client";
// import Faq1 from "@/components/elements/Faq1";
import Layout from "@/components/layout/Layout";
// import TestimonialSlider3 from "@/components/slider/TestimonialSlider3";
import useEmailSubscribeForm from "@/hooks/useEmailSubscribeForm";

export default function Page() {
  const { formData, handleInputChange, handleSubmit } = useEmailSubscribeForm();

  const heading1 = {
    fontFamily: "satoshi",
    fontWeight: 800,
    fontSize: "32px",
  };

  const heading2 = {
    fontFamily: "satoshi",
    fontWeight: 800,
    fontSize: "24px",
  };

  const heading4 = {
    fontFamily: "satoshi",
    fontWeight: 500,
    fontSize: "18px",
  }

  const listItem = {
    fontFamily: 'satoshi',
    fontWeight: 500,
    fontSize: "16px",
  }

  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Refund Status ">
        <div>
          <div className="container padding-90">
            <div>
              <h1 style={heading1}>Privacy & Policy</h1>
              <p style={heading4}>
                <strong>Last Updated:</strong> December 18, 2024
              </p>

              <h2 style={heading2}>1. Information We Collect</h2>
              <p style={heading4}>We may collect the following types of information:</p>
              <ol>
                <li style={listItem} >
                  <strong>Personal Information:</strong> When you use our
                  services, we collect details such as your name, address,
                  email, phone number, and other contact information.
                </li>
                <li style={listItem}>
                  <strong>Tax-related Information:</strong> We collect data
                  related to your tax filings, including income, deductions,
                  dependents, and other relevant financial details.
                </li>
                <li style={listItem}>
                  <strong>Usage Data:</strong> We collect information about your
                  interactions with our website, such as IP addresses, browser
                  types, and browsing activities to improve our website and
                  services.
                </li>
              </ol>

              <h2 style={heading2}>2. How We Use Your Information</h2>
              <p  style={heading4}>
                We use the information we collect for the following purposes:
              </p>
              <ol>
                <li style={listItem}>To provide and manage tax filing services.</li>
                <li style={listItem}>
                  To communicate with you about your tax return, updates, and
                  changes to our services.
                </li>
                <li style={listItem}>To comply with legal obligations and tax regulations.</li>
                <li style={listItem}>
                  To improve our website and services based on usage data.
                </li>
              </ol>

              <h2 style={heading2}>3. How We Protect Your Information</h2>
              <p  style={heading4}>
                We implement reasonable security measures to protect your
                information, including encryption and secure servers. However,
                no method of data transmission or storage is 100% secure, and
                while we strive to protect your information, we cannot guarantee
                its absolute security.
              </p>

              <h2 style={heading2}>4. Sharing Your Information</h2>
              <p  style={heading4}>
                We will not sell, trade, or rent your personal information to
                third parties. However, we may share your information with
                trusted partners or service providers who assist us in providing
                tax filing services, under strict confidentiality agreements. We
                may also disclose your information if required by law.
              </p>

              <h2 style={heading2}>5. Cookies and Tracking Technologies</h2>
              <p  style={heading4}> 
                We use cookies and similar technologies to enhance your
                experience on our website, analyze traffic, and gather
                information about usage patterns. You can control cookie
                settings through your browser settings.
              </p>

              <h2 style={heading2}>6. Your Rights</h2>
              <p  style={heading4}>You have the right to:</p>
              <ol>
                <li style={listItem}>Access, update, or delete your personal information.</li>
                <li style={listItem}>Request a copy of your information.</li>
                <li style={listItem}>Opt-out of receiving marketing communications.</li>
              </ol>
              <p  style={heading4}>
                If you have any questions or concerns about how we handle your
                data, please contact us at{" "}
                <a href="mailto:info@evotaxes.com">info@evotaxes.com</a>.
              </p>

              <h2 style={heading2}>7. Changes to This Privacy Policy</h2>
              <p  style={heading4}>
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page, and the "Last Updated" date will be
                revised accordingly.
              </p>
            </div>
          </div>

          <div className="subscribe-4 bg12 padding-90 inner-font-1 inner-subscribe">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="heading4 white-heading inner-heading no-margin-heading">
                    <h2>Want to join our team?</h2>
                    <p >
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
