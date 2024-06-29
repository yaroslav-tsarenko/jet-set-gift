import Button from "./Button";
import PropTypes from "prop-types";
import "./ProductCard1.css";

const ProductCard1 = ({ className = "", emptyCard, instacart }) => {
  return (
    <div className={`product-card1 ${className}`}>
      <img className="empty-card-icon" loading="lazy" alt="" src={emptyCard} />
      <h3 className="instacart">{instacart}</h3>
      <div className="empty-card-content">$100</div>
      <Button />
    </div>
  );
};

ProductCard1.propTypes = {
  className: PropTypes.string,
  emptyCard: PropTypes.string,
  instacart: PropTypes.string,
};

export default ProductCard1;
