import PropTypes from "prop-types";
import "./ReviewContent.css";

const ReviewContent = ({
  className = "",
  ellipse213,
  almaRai,
  reviewStar,
  star5,
  star4,
  star3,
  star2,
}) => {
  return (
    <div className={`review-content ${className}`}>
      <blockquote className="outstanding-service-verizon">
        “Outstanding service! Verizon TopUp saved the day when I ran out of data
        mid-streaming. Highly recommend!”
      </blockquote>
      <div className="user-avatar">
        <img className="user-avatar-child" alt="" src={ellipse213} />
        <div className="user-detail">
          <div className="user-name">
            <h3 className="alma-rai">{almaRai}</h3>
            <div className="customer">Customer</div>
          </div>
          <div className="rating">
            <img className="review-star-icon" alt="" src={reviewStar} />
            <img className="rating-child" alt="" src={star5} />
            <img className="rating-item" alt="" src={star4} />
            <img className="rating-inner" alt="" src={star3} />
            <img className="star-icon" alt="" src={star2} />
          </div>
        </div>
      </div>
    </div>
  );
};

ReviewContent.propTypes = {
  className: PropTypes.string,
  ellipse213: PropTypes.string,
  almaRai: PropTypes.string,
  reviewStar: PropTypes.string,
  star5: PropTypes.string,
  star4: PropTypes.string,
  star3: PropTypes.string,
  star2: PropTypes.string,
};

export default ReviewContent;
