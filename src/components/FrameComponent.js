import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={`frame-container ${className}`}>
      <img
        className="frame-child"
        loading="lazy"
        alt=""
        src="/frame-1000007122@2x.png"
      />
      <div className="world-content">
        <div className="world-message">
          <div className="message-block">
            <h1 className="gifts-for-your-container">
              <span className="gifts-for-your-friends-all-aro">
                <span>Gifts for your Friends all around</span>
                <span className="the-world"> the world</span>
              </span>
              <span className="span">
                <span>.</span>
              </span>
            </h1>
            <div className="let-your-creativity">
              Let your creativity roam free, unencumbered by limitations, as you
              explore the vast expanse of possibility. Embrace the liberation of
              your ideas, for in their unrestricted flight lies the true essence
              of creativity.
            </div>
          </div>
          <Button
            className="button6"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#000",
              borderRadius: "10px",
              "&:hover": { background: "#000" },
              width: 175,
              height: 46,
            }}
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
