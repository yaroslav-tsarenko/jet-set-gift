import { useMemo } from "react";
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
import "./HeaderDesktop.css";

const HeaderDesktop = ({ className = "", tickerTop, tickerPosition }) => {
  const headerDesktopStyle = useMemo(() => {
    return {
      top: tickerTop,
      position: tickerPosition,
    };
  }, [tickerTop, tickerPosition]);

  return (
    <header
      className={`header-desktop ${className}`}
      style={headerDesktopStyle}
    >
      <div className="ticker">
        <div className="get-100-off-container">
          <span className="get-100-off">{`Get $100 off on purchases over $30. `}</span>
          <span className="add-voucher">Add Voucher</span>
        </div>
      </div>
      <div className="header4">
        <div className="logo">
          <img className="logo-icon" loading="lazy" alt="" src="/logo@2x.png" />
          <h1 className="cryptonovax">JetSetGift</h1>
        </div>
        <div className="navigation">
          <FormControl
            className="nav-header-link-block"
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
            className="nav-header-link-block1"
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
                <img width="16px" height="16px" src="/icon-1.svg" style={{}} />
              )}
            >
              <MenuItem>Our Story</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
          <div className="nav-header-link-block2">
            <a className="shop">{`Subscribe & Save`}</a>
            <img className="icon4" alt="" src="/icon.svg" />
          </div>
          <div className="nav-header-link-block3">
            <a className="shop1">Contact</a>
            <img className="icon5" alt="" src="/icon.svg" />
          </div>
          <div className="nav-header-link-block4">
            <a className="shop2">Download</a>
            <img className="icon6" alt="" src="/icon.svg" />
          </div>
          <Button
            className="button3"
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
              height: 38,
            }}
          >
            Sign in
          </Button>
          <img className="navigation-child" alt="" src="/frame-9.svg" />
        </div>
      </div>
    </header>
  );
};

HeaderDesktop.propTypes = {
  className: PropTypes.string,

  /** Style props */
  tickerTop: PropTypes.any,
  tickerPosition: PropTypes.any,
};

export default HeaderDesktop;
