import PropTypes from "prop-types";
import "./InfoCollection.css";

const InfoCollection = ({ className = "" }) => {
  return (
    <div className={`info-collection ${className}`}>
      <h1 className="information-we-collect-container">
        <ol className="information-we-collect">
          <li>Information We Collect</li>
        </ol>
      </h1>
      <div className="info-types">
        <div className="type-info">
          <div className="personal-information">1.1 Personal Information</div>
          <div className="we-may-collect">
            We may collect personal information, such as your name, email
            address, contact details, and payment information, when you register
            for an account or use our services.
          </div>
        </div>
        <div className="type-info1">
          <div className="usage-information">1.2 Usage Information</div>
          <div className="we-automatically-collect">
            We automatically collect information about your usage of our website
            and services, including your IP address, device type, browser type,
            pages visited, and interactions with our platform.
          </div>
        </div>
      </div>
    </div>
  );
};

InfoCollection.propTypes = {
  className: PropTypes.string,
};

export default InfoCollection;
