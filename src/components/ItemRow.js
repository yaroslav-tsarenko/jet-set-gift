import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import PropTypes from "prop-types";
import "./ItemRow.css";

const ItemRow = ({
  className = "",
  fentyBeauty50OFFGiftCard,
  discount20OFF,
}) => {
  return (
    <div className={`item-row ${className}`}>
      <div className="item-details">
        <img
          className="cart-item-background"
          loading="lazy"
          alt=""
          src="/rectangle-4554@2x.png"
        />
        <div className="item-title">
          <b className="fenty-beauty-50">{fentyBeauty50OFFGiftCard}</b>
          <b className="discount-20-off">{discount20OFF}</b>
        </div>
        <div className="item-actions">
          <div className="quantity">
            <b className="quantity-placeholder">$120.00</b>
            <b className="credits">12 Credits</b>
          </div>
          <div className="increase-quantity">
            <div className="plus-button">
              <div className="add-button-container">
                <img
                  className="icon-plus"
                  loading="lazy"
                  alt=""
                  src="/iconplus.svg"
                />
              </div>
              <b className="increase-placeholder">3</b>
              <input className="quantity-buttons" type="checkbox" />
            </div>
            <FormControl
              className="time-period"
              variant="standard"
              sx={{
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                backgroundColor: "#9c7dcd",
                borderRadius: "8px",
                width: "100%",
                height: "38px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "38px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "38px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "38px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "38px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#fff",
                  fontSize: 18,
                  fontWeight: "Bold",
                  fontFamily: "Archivo",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "16px",
                },
              }}
            >
              <InputLabel color="secondary" />
              <Select
                color="secondary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="16px"
                    height="16px"
                    src="/hourly-placeholder.svg"
                    style={{ marginRight: "16px" }}
                  />
                )}
              >
                <MenuItem>Hourly</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
          </div>
        </div>
        <b className="item-separator">$120.00</b>
      </div>
      <div className="row-separator" />
    </div>
  );
};

ItemRow.propTypes = {
  className: PropTypes.string,
  fentyBeauty50OFFGiftCard: PropTypes.string,
  discount20OFF: PropTypes.string,
};

export default ItemRow;
