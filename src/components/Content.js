import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import "./Content.css";

const Content = ({ className = "" }) => {
  return (
    <section className={`content ${className}`}>
      <form className="product-details-parent">
        <div className="product-details1">
          <img
            className="image-10-icon"
            loading="lazy"
            alt=""
            src="/image-10@2x.png"
          />
          <div className="voucher-information">
            <div className="information-headings">
              <div className="about-this-gift">About this Gift Voucher</div>
              <img className="heading-icon" alt="" src="/heading-icon.svg" />
            </div>
            <div className="information-headings1">
              <div className="how-to-use">How to Use</div>
              <img
                className="information-headings-child"
                alt=""
                src="/heading-icon.svg"
              />
            </div>
            <FormControl
              className="information-headings2"
              variant="standard"
              sx={{
                borderColor: "#787878",
                borderStyle: "SOLID",
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                borderRadius: "8px",
                width: "100%",
                height: "70px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "70px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "70px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "70px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "70px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#545454",
                  fontSize: 16,
                  fontWeight: "Regular",
                  fontFamily: "Almarai",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "30px",
                },
              }}
            >
              <InputLabel color="primary" />
              <Select
                color="primary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="15.7px"
                    height="7.8px"
                    src="/vector-9-2.svg"
                    style={{ marginRight: "30.00000000000073px" }}
                  />
                )}
              >
                <MenuItem>Brands Included In this Voucher</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
            <div className="information-headings3">
              <div className="terms-conditions">{`Terms & Conditions`}</div>
              <img
                className="information-headings-item"
                alt=""
                src="/heading-icon.svg"
              />
            </div>
            <div className="product-description">
              <b className="note">Note:</b>
              <b className="discover-the-perfect">{`Discover the perfect blend of style and utility with our Shoes & Wallet Gift Card. Whether it's stepping out in fashionable footwear or staying organized with a sleek wallet, this versatile gift card offers endless possibilities. Give the gift of choice and let your loved ones indulge in their favorite brands and styles.
`}</b>
            </div>
          </div>
        </div>
        <div className="recipient-selection">
          <div className="recipient-options">
            <div className="recipient-type">
              <h1 className="best-buy-gift">Best Buy Gift Card</h1>
              <div className="introducing-the-shoes">{`Introducing the Shoes & Wallet Gift Card from WishDeck - the perfect pairing for those who appreciate both style and practicality. With this versatile eGift card, recipients can explore a wide array of footwear options to step out in fashion-forward confidence, while also browsing through a selection of sleek wallets to complement their everyday essentials.`}</div>
            </div>
            <div className="recipient-label">
              <div className="i-would-like">I would Like to:</div>
              <div className="recipient-buttons">
                <Button
                  className="recipient-choice"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "16",
                    background: "#000",
                    borderRadius: "10px",
                    "&:hover": { background: "#000" },
                    height: 58,
                  }}
                >
                  Gift a Friend
                </Button>
                <Button
                  className="recipient-choice1"
                  disableElevation
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    color: "#000",
                    fontSize: "16",
                    borderColor: "#000",
                    borderRadius: "10px",
                    "&:hover": { borderColor: "#000" },
                    width: 134,
                    height: 58,
                  }}
                >
                  Gift Myself
                </Button>
              </div>
            </div>
            <div className="value-selection">
              <div className="gift-card-worth">Gift Card Worth:</div>
              <div className="value-options">
                <Button
                  className="value-buttons"
                  disableElevation
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    color: "#000",
                    fontSize: "16",
                    borderColor: "#000",
                    borderRadius: "10px",
                    "&:hover": { borderColor: "#000" },
                    height: 58,
                  }}
                >
                  USD $200
                </Button>
                <Button
                  className="value-buttons1"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "16",
                    background: "#000",
                    borderRadius: "10px",
                    "&:hover": { background: "#000" },
                    height: 58,
                  }}
                >
                  USD $500
                </Button>
                <Button
                  className="value-buttons2"
                  disableElevation
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    color: "#000",
                    fontSize: "16",
                    borderColor: "#000",
                    borderRadius: "10px",
                    "&:hover": { borderColor: "#000" },
                    height: 58,
                  }}
                >
                  USD $700
                </Button>
                <Button
                  className="value-buttons3"
                  disableElevation
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    color: "#000",
                    fontSize: "16",
                    borderColor: "#000",
                    borderRadius: "10px",
                    "&:hover": { borderColor: "#000" },
                    height: 58,
                  }}
                >
                  USD $1000
                </Button>
              </div>
            </div>
            <div className="quantity-selection">
              <div className="select-your-quantity">Select your Quantity</div>
              <div className="quantity-controls">
                <div className="rectangle-parent">
                  <div className="frame-item" />
                  <img
                    className="add-icon"
                    loading="lazy"
                    alt=""
                    src="/add.svg"
                  />
                </div>
                <div className="empty-counter">
                  <div className="counter-placeholder">4</div>
                </div>
                <div className="rectangle-group">
                  <div className="frame-inner" />
                  <div className="add-icon-wrapper">
                    <img
                      className="add-icon1"
                      loading="lazy"
                      alt=""
                      src="/vector-600.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <Button
              className="button7"
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
              Add to Cart
            </Button>
          </div>
        </div>
      </form>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
