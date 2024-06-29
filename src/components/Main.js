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
import "./Main.css";

const Main = ({ className = "", yourCart }) => {
  return (
    <section className={`main ${className}`}>
      <div className="header-desktop1">
        <div className="ticker1">
          <div className="get-100-off-container1">
            <span className="get-100-off1">{`Get $100 off on purchases over $30. `}</span>
            <span className="add-voucher1">Add Voucher</span>
          </div>
        </div>
        <header className="header5">
          <div className="logo2">
            <img
              className="logo-icon2"
              loading="lazy"
              alt=""
              src="/logo@2x.png"
            />
            <h2 className="cryptonovax1">JetSetGift</h2>
          </div>
          <div className="header-navigation">
            <FormControl
              className="nav-header-link-block5"
              variant="standard"
              sx={{
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                borderRadius: "0px 0px 0px 0px",
                width: "65px",
                height: "22px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "22px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "22px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "22px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "22px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#1d1d1d",
                  fontSize: 16,
                  fontWeight: "Regular",
                  fontFamily: "Inter",
                  textAlign: "left",
                  p: "0 !important",
                },
              }}
            >
              <InputLabel color="primary" />
              <Select
                color="primary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img width="16px" height="16px" src="/icon.svg" style={{}} />
                )}
              >
                <MenuItem>Shop</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
            <FormControl
              className="nav-header-link-block6"
              variant="standard"
              sx={{
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                borderRadius: "0px 0px 0px 0px",
                width: "99px",
                height: "22px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "22px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "22px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "22px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "22px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#1d1d1d",
                  fontSize: 16,
                  fontWeight: "Regular",
                  fontFamily: "Inter",
                  textAlign: "left",
                  p: "0 !important",
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
                    width="16px"
                    height="16px"
                    src="/icon-1.svg"
                    style={{}}
                  />
                )}
              >
                <MenuItem>Our Story</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
            <div className="nav-header-link-block7">
              <a className="shop3">{`Subscribe & Save`}</a>
              <img className="icon8" alt="" src="/icon.svg" />
            </div>
            <div className="nav-header-link-block8">
              <a className="shop4">Contact</a>
              <img className="icon9" alt="" src="/icon.svg" />
            </div>
            <div className="nav-header-link-block9">
              <a className="shop5">Download</a>
              <img className="icon10" alt="" src="/icon.svg" />
            </div>
            <Button
              className="button8"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#000",
                borderRadius: "10px",
                "&:hover": { background: "#000" },
                width: 83,
              }}
            >
              Sign in
            </Button>
            <img
              className="empty-icon"
              loading="lazy"
              alt=""
              src="/frame-9.svg"
            />
          </div>
        </header>
      </div>
      <div className="main-inner">
        <div className="cart-title-parent">
          <div className="cart-title">
            <h1 className="your-cart">{yourCart}</h1>
          </div>
          <b className="view-or-edit">View or edit your cart before checkout</b>
        </div>
      </div>
    </section>
  );
};

Main.propTypes = {
  className: PropTypes.string,
  yourCart: PropTypes.string,
};

export default Main;
