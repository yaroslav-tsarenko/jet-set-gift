import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent = ({
  className = "",
  useOfServices,
  eligibility,
  toUseOurServicesYouMustBe,
  accountCreation,
  someOfOurServicesMayRequi,
}) => {
  return (
    <div className={`use-of-services-parent ${className}`}>
      <h1 className="use-of-services-container">
        <ol className="use-of-services">
          <li>{useOfServices}</li>
        </ol>
      </h1>
      <div className="please-read-these1">
        Please read these Terms carefully before using our services. Your use of
        our services indicates your acceptance of these Terms and your agreement
        to comply with them. If you do not agree with any part of these Terms,
        you may not use our services.
      </div>
      <div className="eligibility-content-parent">
        <div className="eligibility-content">
          <h1 className="eligibility">{eligibility}</h1>
          <div className="to-use-our">{toUseOurServicesYouMustBe}</div>
        </div>
        <div className="account-creation-parent">
          <h1 className="account-creation">{accountCreation}</h1>
          <div className="some-of-our">{someOfOurServicesMayRequi}</div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  useOfServices: PropTypes.string,
  eligibility: PropTypes.string,
  toUseOurServicesYouMustBe: PropTypes.string,
  accountCreation: PropTypes.string,
  someOfOurServicesMayRequi: PropTypes.string,
};

export default FrameComponent;
