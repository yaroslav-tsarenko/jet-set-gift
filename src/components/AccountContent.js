import PropTypes from "prop-types";
import "./AccountContent.css";

const AccountContent = ({ className = "" }) => {
  return (
    <section className={`account-content ${className}`}>
      <div className="account">
        <div className="account-info">
          <h1 className="user-account">User Account</h1>
          <div className="header1">
            <b className="your-active-downloads">Your Active Downloads</b>
          </div>
          <div className="cart-row-1">
            <div className="product">
              <img
                className="download-item-background"
                loading="lazy"
                alt=""
                src="/rectangle-4554@2x.png"
              />
              <div className="title">
                <b className="fenty-beauty-50">
                  Fenty Beauty 50% OFF Gift Card
                </b>
                <b className="discount-20-off">Discount: 20% OFF</b>
              </div>
            </div>
            <div className="subscription-details">
              <b className="subscription-time">$120.00</b>
              <b className="credits">12 Credits</b>
            </div>
            <div className="subscription-details1">
              <b className="up-time">Up Time</b>
              <b className="hrs">120 Hrs</b>
            </div>
            <div className="renewal">
              <div className="renewal-date">
                <b className="next-renewal">Next Renewal</b>
                <b className="april-2024">24 April, 2024</b>
              </div>
              <div className="links">
                <div className="link">
                  <img
                    className="icons-block"
                    loading="lazy"
                    alt=""
                    src="/icons-block.svg"
                  />
                  <div className="cancel">Cancel</div>
                </div>
                <div className="link1">
                  <img
                    className="icons-block1"
                    alt=""
                    src="/icons-block-1.svg"
                  />
                  <div className="renew">Renew</div>
                </div>
              </div>
            </div>
          </div>
          <div className="account-info-child" />
        </div>
        <div className="details">
          <div className="checkout-details">
            <div className="header2">
              <b className="user-details">User Details</b>
            </div>
            <div className="checkout-info">
              <b className="name">Name</b>
              <b className="darnell-roob">Darnell Roob</b>
            </div>
            <div className="checkout-info1">
              <b className="email-address">Email Address</b>
              <b className="darnellroobhotmailcom">Darnell.Roob@hotmail.com</b>
            </div>
            <div className="checkout-info2">
              <b className="plan">Plan</b>
              <b className="basic">Basic</b>
            </div>
            <div className="checkout-info3">
              <b className="expiry-date">Expiry Date</b>
              <b className="april-20241">24 April, 2024</b>
            </div>
            <div className="checkout-info4">
              <b className="auto-renewal">Auto Renewal</b>
              <b className="on">On</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AccountContent.propTypes = {
  className: PropTypes.string,
};

export default AccountContent;
