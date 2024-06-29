import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import Main from "../components/Main";
import FooterDesktop1 from "../components/FooterDesktop1";
import "./CheckoutPage.css";

const CheckoutPage = () => {
  return (
    <div className="checkoutpage">
      <Main yourCart="Checkout" />
      <section className="checkoutpage-inner">
        <div className="frame-parent">
          <form className="frame-group">
            <div className="checkout-parent">
              <h2 className="checkout">Checkout</h2>
              <div className="header">
                <b className="billing-details">Billing Details</b>
              </div>
              <div className="form-field-block">
                <div className="row-1">
                  <div className="block-1">
                    <b className="first-name">First Name</b>
                  </div>
                  <div className="block-2">
                    <b className="last-name">Last Name</b>
                  </div>
                </div>
                <div className="row-2">
                  <div className="block-11">
                    <b className="company-name">Company Name</b>
                  </div>
                  <div className="block-21">
                    <b className="country">Country</b>
                    <img className="icon3" alt="" src="/icon-21.svg" />
                  </div>
                </div>
                <div className="row-3">
                  <div className="block-12">
                    <b className="street-address">Street Address</b>
                  </div>
                </div>
                <TextField
                  className="block-22"
                  placeholder="Apartment / Suite / Unit / etc. (Optional)"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#b6b6b6" },
                    "& .MuiInputBase-root": {
                      height: "50px",
                      backgroundColor: "#fff",
                      borderRadius: "5px",
                      fontSize: "18px",
                    },
                    "& .MuiInputBase-input": { color: "#000" },
                  }}
                />
                <div className="row-4">
                  <div className="block-13">
                    <b className="town-city">Town / City</b>
                  </div>
                </div>
                <TextField
                  className="block-23"
                  placeholder="Email Address"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#b6b6b6" },
                    "& .MuiInputBase-root": {
                      height: "50px",
                      backgroundColor: "#fff",
                      borderRadius: "5px",
                      fontSize: "18px",
                    },
                    "& .MuiInputBase-input": { color: "#000" },
                  }}
                />
                <div className="row-5">
                  <TextField
                    className="block-14"
                    placeholder="ZIP"
                    variant="outlined"
                    sx={{
                      "& fieldset": { borderColor: "#b6b6b6" },
                      "& .MuiInputBase-root": {
                        height: "50px",
                        backgroundColor: "#fff",
                        borderRadius: "5px",
                        fontSize: "18px",
                      },
                      "& .MuiInputBase-input": { color: "#000" },
                    }}
                  />
                  <TextField
                    className="block-24"
                    placeholder="Phone"
                    variant="outlined"
                    sx={{
                      "& fieldset": { borderColor: "#b6b6b6" },
                      "& .MuiInputBase-root": {
                        height: "50px",
                        backgroundColor: "#fff",
                        borderRadius: "5px",
                        fontSize: "18px",
                      },
                      "& .MuiInputBase-input": { color: "#000" },
                    }}
                  />
                </div>
              </div>
              <div className="address-separator" />
              <div className="details-header">
                <Button
                  className="button"
                  disableElevation
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    color: "#5a5a5a",
                    fontSize: "16",
                    borderColor: "#b6b6b6",
                    borderRadius: "4px",
                    "&:hover": { borderColor: "#b6b6b6" },
                    width: 100,
                    height: 54,
                  }}
                >
                  Back
                </Button>
                <Button
                  className="button1"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "16",
                    background: "#000",
                    borderRadius: "10px",
                    "&:hover": { background: "#000" },
                    width: 139,
                    height: 54,
                  }}
                >
                  Checkout
                </Button>
              </div>
            </div>
            <div className="checkout-details-parent">
              <div className="checkout-details">
                <div className="header1">
                  <b className="checkout-details1">Checkout Details</b>
                </div>
                <div className="cart-subtotal-parent">
                  <b className="cart-subtotal">Cart Subtotal</b>
                  <b className="order-details-values">$360.00</b>
                </div>
                <div className="shipping-handling-parent">
                  <b className="shipping-handling">{`Shipping & Handling`}</b>
                  <b className="b">$0.00</b>
                </div>
                <div className="other-taxes-parent">
                  <b className="other-taxes">Other Taxes</b>
                  <b className="b1">$0.00</b>
                </div>
                <div className="order-details-separator" />
                <div className="grand-total-parent">
                  <b className="grand-total">Grand Total</b>
                  <b className="b2">$360.00</b>
                </div>
              </div>
              <div className="transfer-options">
                <div className="header2">
                  <b className="transfer-options1">Transfer Options</b>
                </div>
                <div className="checkout-details2">
                  <div className="logos-block">
                    <div className="block-15">
                      <div className="logo-block">
                        <img
                          className="image-1-icon"
                          loading="lazy"
                          alt=""
                          src="/image-11@2x.png"
                        />
                      </div>
                      <b className="bank-transfer">
                        <p className="bank">Bank</p>
                        <p className="transfer">Transfer</p>
                      </b>
                    </div>
                    <div className="block-25">
                      <div className="logo-block1">
                        <img
                          className="image-2-icon"
                          loading="lazy"
                          alt=""
                          src="/image-2@2x.png"
                        />
                      </div>
                      <b className="google-pay">
                        <p className="google">Google</p>
                        <p className="pay">Pay</p>
                      </b>
                    </div>
                  </div>
                  <div className="payment-options">
                    <div className="block-3">
                      <div className="logo-block2">
                        <img
                          className="image-3-icon"
                          loading="lazy"
                          alt=""
                          src="/image-31@2x.png"
                        />
                      </div>
                      <b className="apple-pay">
                        <p className="apple">Apple</p>
                        <p className="pay1">Pay</p>
                      </b>
                    </div>
                    <div className="block-4">
                      <div className="logo-block3">
                        <img
                          className="image-4-icon"
                          loading="lazy"
                          alt=""
                          src="/image-41@2x.png"
                        />
                      </div>
                      <b className="paypal">PayPal</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="checkout1">
            <div className="header3">
              <b className="checkout2">Checkout</b>
            </div>
            <div className="checkout-details3">
              <div className="your-personal-data">
                Your Personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our product
              </div>
              <Button
                className="button2"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "16",
                  background: "#000",
                  borderRadius: "10px",
                  "&:hover": { background: "#000" },
                  height: 54,
                }}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </section>
      <FooterDesktop1 />
    </div>
  );
};

export default CheckoutPage;
