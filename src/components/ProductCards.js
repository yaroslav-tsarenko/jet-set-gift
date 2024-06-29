import { useMemo } from "react";
import PropTypes from "prop-types";
import "./ProductCards.css";

const ProductCards = ({ className = "", image5, propHeight }) => {
  const productCardsStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className={`product-cards1 ${className}`} style={productCardsStyle}>
      <img className="image-5-icon1" loading="lazy" alt="" src={image5} />
      <div className="product-details">
        <b className="most-popular-giftcards1">Most Popular Giftcards</b>
        <h3 className="upto-10-off1">Upto 10% OFF</h3>
      </div>
    </div>
  );
};

ProductCards.propTypes = {
  className: PropTypes.string,
  image5: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
};

export default ProductCards;
