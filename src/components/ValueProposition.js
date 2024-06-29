import { Button } from "@mui/material";
import FeatureBlocks from "./FeatureBlocks";
import PropTypes from "prop-types";
import "./ValueProposition.css";

const ValueProposition = ({ className = "" }) => {
  return (
    <section className={`value-proposition ${className}`}>
      <div className="value-content">
        <h1 className="we-are-different-container">
          <span>{`WE ARE `}</span>
          <span className="different">DIFFERENT</span>
          <span> IN EVERY WAY</span>
        </h1>
        <Button
          className="button4"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "16",
            background: "#000",
            borderRadius: "10px",
            "&:hover": { background: "#000" },
            width: 177,
            height: 46,
          }}
        >
          Get Started
        </Button>
      </div>
      <div className="features-parent">
        <div className="features">
          <FeatureBlocks
            featureContent="/frame-1000006905.svg"
            wideRangeOfRetailers="Wide Range of Retailers"
            exploreADiverseSelectionO="Explore a diverse selection of retailers from fashion to electronics, ensuring there's something for everyone on your list."
          />
          <FeatureBlocks
            featureContent="/frame-1000006908.svg"
            wideRangeOfRetailers="Balance Tracking"
            exploreADiverseSelectionO="Keep track of your gift card balances and transactions effortlessly, ensuring you always know how much gifting power you have left."
          />
          <FeatureBlocks
            featureContent="/frame-1000006907.svg"
            wideRangeOfRetailers="Passion in every work"
            exploreADiverseSelectionO="Choose from an array of designs to match any occasion or recipient personality, adding that extra touch of thoughtfulness to your gift."
          />
          <FeatureBlocks
            featureContent="/frame-1000006906.svg"
            wideRangeOfRetailers="Instant Delivery Options"
            exploreADiverseSelectionO="Send e-gift cards instantly to your loved ones' email or mobile devices, making last-minute gifting a breeze and ensuring timely surprises."
          />
        </div>
        <img
          className="empty-feature-icon"
          loading="lazy"
          alt=""
          src="/frame-1000006902@2x.png"
        />
      </div>
    </section>
  );
};

ValueProposition.propTypes = {
  className: PropTypes.string,
};

export default ValueProposition;
