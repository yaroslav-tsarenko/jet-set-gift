import HeaderDesktop from "../components/HeaderDesktop";
import FrameComponent1 from "../components/FrameComponent1";
import FooterDesktop from "../components/FooterDesktop";
import "./RefundPolicyPage.css";

const RefundPolicyPage = () => {
  return (
    <div className="refundpolicypage">
      <HeaderDesktop />
      <section className="page-content">
        <h1 className="refund-policy">Refund Policy</h1>
        <div className="please-refer-to">{`Please refer to our Terms and Conditions for further details regarding the use and redemption of the Shoes & Wallet Gift Card.`}</div>
      </section>
      <section className="wishdeck-we-us-or-our-parent">
        <div className="wishdeck-we-us">
          We value your trust and strive to provide transparent and fair
          cancellation and refund processes. Please read the following policy
          carefully to understand your rights and obligations regarding
          cancellations and refunds:
        </div>
        <div className="eligibility-for-refunds-parent">
          <h1 className="eligibility-for-refunds-container">
            <ol className="eligibility-for-refunds">
              <li> Eligibility for Refunds</li>
            </ol>
          </h1>
          <div className="eligibility-criteria">
            <div className="the-product-or">
              1.1 The product or service you purchased is defective, damaged, or
              not as described.
            </div>
            <div className="you-have-canceled">
              1.2 You have canceled your order or subscription within the
              specified cancellation period, as outlined in our cancellation
              policy.
            </div>
          </div>
        </div>
        <FrameComponent1 />
        <div className="non-refundable-items-and-servi-parent">
          <h1 className="non-refundable-items-and-container">
            <ol className="non-refundable-items-and-servi">
              <li>Non-Refundable Items and Services</li>
            </ol>
          </h1>
          <div className="certain-items-or">
            Certain items or services may not be eligible for refunds, including
            but not limited to: Digital products or services that have been
            accessed, downloaded, or used. Customized or personalized products
            or services that are non-returnable. Services that have already been
            rendered or partially rendered, except where prohibited by law.
          </div>
        </div>
        <div className="exceptions-and-special-circums-parent">
          <h1 className="exceptions-and-special-container">
            <ol className="exceptions-and-special-circums">
              <li>Exceptions and Special Circumstances:</li>
            </ol>
          </h1>
          <div className="exceptions-to-this">
            Exceptions to this refund policy may be granted in cases of force
            majeure, such as natural disasters, government regulations, or other
            unforeseen circumstances beyond our control. Any exceptions or
            special circumstances will be evaluated on a case-by-case basis and
            at the discretion of our customer support team.
          </div>
        </div>
        <div className="contact-us-parent">
          <h1 className="contact-us">
            <ol className="contact-us1">
              <li>Contact Us</li>
            </ol>
          </h1>
          <div className="if-you-have-container">
            <p className="if-you-have">
              If you have any questions, concerns, or requests related to this
              Privacy Policy or our data practices, please contact us at
              LilyLamb Kids.
            </p>
            <p className="blank-line">&nbsp;</p>
            <p className="by-using-our">
              By using our website, products, and services, you agree to the
              terms outlined in this Privacy Policy. We are committed to
              protecting your privacy and ensuring the security of your
              information.
            </p>
          </div>
        </div>
      </section>
      <FooterDesktop />
    </div>
  );
};

export default RefundPolicyPage;
