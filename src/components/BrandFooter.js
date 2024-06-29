import PropTypes from "prop-types";
import "./BrandFooter.css";

const BrandFooter = ({
  className = "",
  brandImages,
  brandImages1,
  image12,
  brandImages2,
  brandImages3,
  brandImages4,
  brandImages5,
  brandImages6,
  brandImages7,
  brandImages8,
  brandImages9,
  brandImages10,
}) => {
  return (
    <section className={`brand-footer ${className}`}>
      <div className="brand-links">
        <h1 className="explore-exclusive-gifts">
          Explore Exclusive Gifts from Top Brands
        </h1>
      </div>
      <div className="brand-links1">
        <div className="have-a-question-container">
          <span>{`Have a question? `}</span>
          <b className="view-our-faqs">View our FAQs</b>
        </div>
      </div>
      <div className="brand-logos">
        <img
          className="brand-images-icon"
          loading="lazy"
          alt=""
          src={brandImages}
        />
        <img
          className="brand-images-icon1"
          loading="lazy"
          alt=""
          src={brandImages1}
        />
        <div className="brand-images">
          <div className="brand-image">
            <div className="logo-background" />
            <img className="image-12-icon" alt="" src={image12} />
          </div>
        </div>
        <img
          className="brand-images-icon2"
          loading="lazy"
          alt=""
          src={brandImages2}
        />
        <img className="brand-images-icon3" alt="" src={brandImages3} />
        <img className="brand-images-icon4" alt="" src={brandImages4} />
        <img
          className="brand-images-icon5"
          loading="lazy"
          alt=""
          src={brandImages5}
        />
        <img className="brand-images-icon6" alt="" src={brandImages6} />
        <img className="brand-images-icon7" alt="" src={brandImages7} />
        <img className="brand-images-icon8" alt="" src={brandImages8} />
        <img className="brand-images-icon9" alt="" src={brandImages9} />
        <img className="brand-images-icon10" alt="" src={brandImages10} />
      </div>
    </section>
  );
};

BrandFooter.propTypes = {
  className: PropTypes.string,
  brandImages: PropTypes.string,
  brandImages1: PropTypes.string,
  image12: PropTypes.string,
  brandImages2: PropTypes.string,
  brandImages3: PropTypes.string,
  brandImages4: PropTypes.string,
  brandImages5: PropTypes.string,
  brandImages6: PropTypes.string,
  brandImages7: PropTypes.string,
  brandImages8: PropTypes.string,
  brandImages9: PropTypes.string,
  brandImages10: PropTypes.string,
};

export default BrandFooter;
