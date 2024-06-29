import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import "./ContactAndCarholder.css";

const ContactAndCarholder = ({ className = "" }) => {
  return (
    <div className={`contact-and-carholder ${className}`}>
      <div className="contact-information-parent">
        <div className="contact-information">Contact Information</div>
        <TextField
          className="form-field"
          placeholder="Email"
          variant="outlined"
          sx={{
            "& fieldset": { borderColor: "#6d18f1" },
            "& .MuiInputBase-root": { height: "54px", backgroundColor: "#fff" },
            "& .MuiInputBase-input": { color: "#000" },
          }}
        />
      </div>
      <h3 className="payment-information">Payment Information</h3>
      <div className="card-information-parent">
        <div className="card-information">Card Information</div>
        <div className="form-field1">
          <div className="card-number-placeholder">1234 1234 1234 1234</div>
          <div className="card-number-sub-fields">
            <img
              className="card-number-sub-fields-child"
              loading="lazy"
              alt=""
              src="/frame-1000006882@2x.png"
            />
            <img
              className="card-number-sub-fields-item"
              loading="lazy"
              alt=""
              src="/frame-1000006883@2x.png"
            />
            <img
              className="card-number-sub-fields-inner"
              loading="lazy"
              alt=""
              src="/frame-1000006884@2x.png"
            />
          </div>
          <img className="icon3" alt="" src="/icon1.svg" />
        </div>
        <div className="form-field-parent">
          <TextField
            className="form-field2"
            placeholder="MM/YY"
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#6d18f1" },
              "& .MuiInputBase-root": {
                height: "54px",
                backgroundColor: "#fff",
              },
              "& .MuiInputBase-input": { color: "#d9d9d9" },
            }}
          />
          <TextField
            className="form-field3"
            placeholder="MM/YY"
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#6d18f1" },
              "& .MuiInputBase-root": {
                height: "54px",
                backgroundColor: "#fff",
              },
              "& .MuiInputBase-input": { color: "#d9d9d9" },
            }}
          />
        </div>
      </div>
      <div className="carholder-name-parent">
        <div className="carholder-name">Carholder Name</div>
        <TextField
          className="form-field4"
          placeholder="Name on Card"
          variant="outlined"
          sx={{
            "& fieldset": { borderColor: "#6d18f1" },
            "& .MuiInputBase-root": { height: "54px", backgroundColor: "#fff" },
            "& .MuiInputBase-input": { color: "#d9d9d9" },
          }}
        />
      </div>
      <div className="country-or-region-parent">
        <div className="country-or-region">Country or region</div>
        <div className="form-field5">
          <div className="usa">USA</div>
          <img
            className="form-field-child"
            alt=""
            src="/frame-1000006889.svg"
          />
          <img className="icon4" alt="" src="/icon1.svg" />
        </div>
      </div>
      <div className="frame-group">
        <input className="frame-input" type="checkbox" />
        <div className="i-verified-that">
          I verified that my device is eSIM compatible and is not carrier locked
          and i agree to the refund policy.
        </div>
      </div>
      <img
        className="contact-and-carholder-child"
        loading="lazy"
        alt=""
        src="/vector-342.svg"
      />
      <div className="i-verified-that1">
        I verified that my device is eSIM compatible and is not carrier locked
        and i agree to the refund policy.
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
          height: 54,
        }}
      >
        Pay Now
      </Button>
    </div>
  );
};

ContactAndCarholder.propTypes = {
  className: PropTypes.string,
};

export default ContactAndCarholder;
