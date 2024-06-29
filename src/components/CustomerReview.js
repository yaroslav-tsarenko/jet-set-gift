import ReviewContent from "./ReviewContent";
import PropTypes from "prop-types";
import "./CustomerReview.css";

const CustomerReview = ({ className = "" }) => {
  return (
    <section className={`customer-review ${className}`}>
      <h1 className="happy-customers-are-container">
        <p className="happy-customers">
          <span>HAPPY CUSTOMERS</span>
          <span className="span1">{` `}</span>
        </p>
        <p className="are-our-true">ARE OUR TRUE WEALTH</p>
      </h1>
      <div className="review-blocks">
        <ReviewContent
          ellipse213="/ellipse-213@2x.png"
          almaRai="Alma Rai"
          reviewStar="/review-star.svg"
          star5="/review-star.svg"
          star4="/review-star.svg"
          star3="/review-star.svg"
          star2="/review-star.svg"
        />
        <ReviewContent
          ellipse213="/ellipse-213@2x.png"
          almaRai="Alma Rai"
          reviewStar="/review-star.svg"
          star5="/review-star.svg"
          star4="/review-star.svg"
          star3="/review-star.svg"
          star2="/review-star.svg"
        />
        <ReviewContent
          ellipse213="/ellipse-213-2@2x.png"
          almaRai="Gagan Lama"
          reviewStar="/review-star.svg"
          star5="/review-star.svg"
          star4="/review-star.svg"
          star3="/review-star.svg"
          star2="/review-star.svg"
        />
        <ReviewContent
          ellipse213="/ellipse-213-3@2x.png"
          almaRai="Ganga Rai"
          reviewStar="/star-1-3.svg"
          star5="/star-1-3.svg"
          star4="/star-1-3.svg"
          star3="/star-1-3.svg"
          star2="/star-1-3.svg"
        />
      </div>
      <div className="review-blocks1">
        <ReviewContent
          ellipse213="/ellipse-213-2@2x.png"
          almaRai="Gagan Lama"
          reviewStar="/review-star.svg"
          star5="/review-star.svg"
          star4="/review-star.svg"
          star3="/review-star.svg"
          star2="/review-star.svg"
        />
        <ReviewContent
          ellipse213="/ellipse-213-5@2x.png"
          almaRai="Asta Giri"
          reviewStar="/review-star.svg"
          star5="/review-star.svg"
          star4="/review-star.svg"
          star3="/review-star.svg"
          star2="/review-star.svg"
        />
        <ReviewContent
          ellipse213="/ellipse-213-6@2x.png"
          almaRai="Alma Rai"
          reviewStar="/review-star.svg"
          star5="/review-star.svg"
          star4="/review-star.svg"
          star3="/review-star.svg"
          star2="/review-star.svg"
        />
        <ReviewContent
          ellipse213="/ellipse-213-7@2x.png"
          almaRai="Ganga Rai"
          reviewStar="/review-star.svg"
          star5="/review-star.svg"
          star4="/review-star.svg"
          star3="/review-star.svg"
          star2="/review-star.svg"
        />
        <ReviewContent
          ellipse213="/ellipse-213-2@2x.png"
          almaRai="Gagan Lama"
          reviewStar="/star-1-3.svg"
          star5="/star-1-3.svg"
          star4="/star-1-3.svg"
          star3="/star-1-3.svg"
          star2="/star-1-3.svg"
        />
      </div>
    </section>
  );
};

CustomerReview.propTypes = {
  className: PropTypes.string,
};

export default CustomerReview;
