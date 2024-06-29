import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ className = "" }) => {
  return (
    <Button
      className={`button5 ${className}`}
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
      Buy Now
    </Button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
};

export default Button;
