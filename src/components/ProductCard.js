import { useMemo } from "react";
import PropTypes from "prop-types";
import "./ProductCard.css";

const ProductCard = ({ className = "", image5, propHeight }) => {
  const productCardStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className={`product-card ${className}`} style={productCardStyle}>
      <img className="image-5-icon" loading="lazy" alt="" src={image5} />
      <div className="card-info">
        <b className="most-popular-giftcards">Most Popular Giftcards</b>
        <h3 className="upto-10-off">Upto 10% OFF</h3>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  className: PropTypes.string,
  image5: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
};

export default ProductCard;
