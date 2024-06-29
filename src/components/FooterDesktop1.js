import PropTypes from "prop-types";
import "./FooterDesktop1.css";

const FooterDesktop1 = ({ className = "" }) => {
  return (
    <footer className={`footer-desktop1 ${className}`}>
      <div className="footer-content1">
        <div className="logo-parent">
          <div className="logo3">
            <img className="logo-icon3" alt="" src="/logo-11@2x.png" />
            <h2 className="jetsetgift1">JetSetGift</h2>
          </div>
          <div className="explore-a-seamless1">
            Explore a seamless blend of Gift Card services at Oracle Orient
          </div>
        </div>
        <div className="footer-links1">
          <div className="product-categories">
            <b className="products1">Products</b>
            <div className="travel-cards1">Travel Cards</div>
            <div className="gaming-cards1">Gaming Cards</div>
            <div className="festival-cards1">Festival Cards</div>
            <div className="food-cards1">Food Cards</div>
            <div className="clothes-cards1">Clothes Cards</div>
          </div>
          <div className="link-categories2">
            <b className="get-to-know1">Get To Know Us</b>
            <div className="about-us1">About Us</div>
            <div className="contact-us1">Contact Us</div>
            <div className="agent-contact1">Agent Contact</div>
            <div className="services1">Services</div>
          </div>
          <div className="link-categories3">
            <b className="legal-pages1">Legal Pages</b>
            <div className="terms1">Terms</div>
            <div className="conditions1">Conditions</div>
            <div className="refund-policy1">Refund Policy</div>
            <div className="cancellation-policy1">Cancellation Policy</div>
          </div>
        </div>
      </div>
      <div className="footer-menu1">
        <div className="shopsphere-all-rights1">
          © 2023 ShopSphere. All Rights Reserved.
        </div>
        <div className="legal-menu1" />
      </div>
    </footer>
  );
};

FooterDesktop1.propTypes = {
  className: PropTypes.string,
};

export default FooterDesktop1;
