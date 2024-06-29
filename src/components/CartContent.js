import { Button } from "@mui/material";
import ItemRow from "./ItemRow";
import PropTypes from "prop-types";
import "./CartContent.css";

const CartContent = ({ className = "" }) => {
  return (
    <section className={`cart-content ${className}`}>
      <div className="items-container-parent">
        <div className="items-container">
          <div className="header6">
            <div className="header-child" />
            <div className="product-column">
              <b className="product">Product</b>
            </div>
            <div className="price-quantity">
              <b className="price">Price</b>
              <b className="quantity1">Quantity</b>
            </div>
            <b className="total">Total</b>
          </div>
          <ItemRow
            fentyBeauty50OFFGiftCard="Fenty Beauty 50% OFF Gift Card"
            discount20OFF="Discount: 20% OFF"
          />
          <ItemRow
            fentyBeauty50OFFGiftCard="Shopping Spree Gift Card"
            discount20OFF="Worth USD $400"
          />
          <ItemRow
            fentyBeauty50OFFGiftCard="Travel GiftCard"
            discount20OFF="Worth USD $400"
          />
          <div className="action-buttons">
            <Button
              className="button9"
              disableElevation
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#000",
                fontSize: "18",
                borderColor: "#000",
                borderRadius: "10px",
                "&:hover": { borderColor: "#000" },
                width: 134,
                height: 54,
              }}
            >
              Go Back
            </Button>
            <Button
              className="button10"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "18",
                background: "#000",
                borderRadius: "10px",
                "&:hover": { background: "#000" },
                width: 143,
                height: 54,
              }}
            >
              Checkout
            </Button>
          </div>
        </div>
        <div className="checkout-details4">
          <div className="checkout-title-container">
            <div className="header7">
              <b className="checkout-details5">Checkout Details</b>
            </div>
          </div>
          <div className="subtotal-total">
            <div className="subtotal-total-values">
              <b className="cart-subtotal1">Cart Subtotal</b>
              <b className="value-separator">$360.00</b>
            </div>
          </div>
          <div className="charge-details-wrapper">
            <div className="charge-details">
              <div className="charge-labels">
                <b className="shipping-handling1">{`Shipping & Handling`}</b>
                <b className="other-taxes1">Other Taxes</b>
              </div>
              <div className="charge-labels1">
                <b className="b3">$0.00</b>
                <b className="b4">$0.00</b>
              </div>
            </div>
          </div>
          <div className="checkout-header">
            <div className="checkout-header-child" />
          </div>
          <div className="subtotal-total1">
            <div className="grand-total-group">
              <b className="grand-total1">Grand Total</b>
              <b className="b5">$360.00</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

CartContent.propTypes = {
  className: PropTypes.string,
};

export default CartContent;
