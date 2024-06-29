import PropTypes from "prop-types";
import "./FeatureBlocks.css";

const FeatureBlocks = ({
  className = "",
  featureContent,
  wideRangeOfRetailers,
  exploreADiverseSelectionO,
}) => {
  return (
    <div className={`feature-blocks ${className}`}>
      <img
        className="feature-content-icon"
        loading="lazy"
        alt=""
        src={featureContent}
      />
      <h3 className="wide-range-of">{wideRangeOfRetailers}</h3>
      <div className="explore-a-diverse">{exploreADiverseSelectionO}</div>
    </div>
  );
};

FeatureBlocks.propTypes = {
  className: PropTypes.string,
  featureContent: PropTypes.string,
  wideRangeOfRetailers: PropTypes.string,
  exploreADiverseSelectionO: PropTypes.string,
};

export default FeatureBlocks;
