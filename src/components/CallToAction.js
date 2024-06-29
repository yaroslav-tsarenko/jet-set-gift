import { Button } from "@mui/material";
import ProductCard1 from "./ProductCard1";
import PropTypes from "prop-types";
import "./CallToAction.css";

const CallToAction = ({ className = "" }) => {
  return (
    <section className={`call-to-action ${className}`}>
      <div className="c-t-a-content">
        <h1 className="start-gifting-today">
          Start Gifting Today: Send a gift card to a close one instantly!
        </h1>
        <div className="embrace-the-freedom">
          Embrace the freedom to connect with your loved ones wherever you are.
          With eSIM, the world is at your fingertips, making staying in touch
          effortless. Whether you're sharing a meal, a laugh, or a moment of
          joy, eSIM empowers you to prioritize what truly matters – the
          connections that feed your soul. Experience the convenience of staying
          connected, because in this digital age, family is just a tap away.
        </div>
        <div className="c-t-a-buttons">
          <Button
            className="button-labels"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#000",
              borderRadius: "10px",
              "&:hover": { background: "#000" },
              height: 46,
            }}
          >
            View Best Offers
          </Button>
          <Button
            className="button-labels1"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#000",
              fontSize: "16",
              background: "#fefbf6",
              border: "#000 solid 1px",
              borderRadius: "10px",
              "&:hover": { background: "#fefbf6" },
              width: 163,
              height: 46,
            }}
          >
            View Countries
          </Button>
        </div>
      </div>
      <div className="featured-products">
        <ProductCard1 emptyCard="/5@2x.png" instacart="Instacart" />
        <ProductCard1 emptyCard="/7@2x.png" instacart="Apple" />
        <ProductCard1 emptyCard="/4@2x.png" instacart="Uber" />
        <ProductCard1 emptyCard="/3@2x.png" instacart="Birthday Card" />
      </div>
    </section>
  );
};

CallToAction.propTypes = {
  className: PropTypes.string,
};

export default CallToAction;
