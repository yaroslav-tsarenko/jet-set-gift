import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import HeaderDesktop from "../components/HeaderDesktop";
import ProductListing from "../components/ProductListing";
import ValueProposition from "../components/ValueProposition";
import CallToAction from "../components/CallToAction";
import FrameComponent from "../components/FrameComponent";
import CustomerReview from "../components/CustomerReview";
import BrandFooter from "../components/BrandFooter";
import FooterDesktop from "../components/FooterDesktop";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <HeaderDesktop />
      <section className="hero-banner">
        <h1 className="jetsetgift-your-gateway">
          JetSetGift: Your Gateway to Thoughtful Gifting
        </h1>
        <TextField
          className="hero-banner-child"
          placeholder="Search"
          variant="outlined"
          InputProps={{
            endAdornment: <img width="24px" height="24px" src="/icon-2.svg" />,
          }}
          sx={{
            "& fieldset": { borderColor: "#ebebeb" },
            "& .MuiInputBase-root": {
              height: "48px",
              backgroundColor: "#f0f1ea",
              paddingRight: "24px",
              borderRadius: "20px",
            },
            "& .MuiInputBase-input": { color: "#273524" },
            width: "939px",
          }}
        />
      </section>
      <ProductListing />
      <ValueProposition />
      <section className="customer-testimonial">
        <div className="testimonial-heading">
          <h1 className="stories-of-over-container">
            <span>{`Stories of `}</span>
            <span className="over-10000">Over 10,000+</span>
            <span> Customers Satisfied with us</span>
          </h1>
        </div>
        <div className="testimonial-images">
          <img
            className="image-blocks-icon"
            loading="lazy"
            alt=""
            src="/frame-1000007131@2x.png"
          />
          <img
            className="image-blocks-icon1"
            loading="lazy"
            alt=""
            src="/frame-1000007132@2x.png"
          />
        </div>
      </section>
      <CallToAction />
      <FrameComponent />
      <CustomerReview />
      <BrandFooter
        brandImages="/frame-1410065678@2x.png"
        brandImages1="/frame-1410065679@2x.png"
        image12="/image-12@2x.png"
        brandImages2="/frame-1410065677@2x.png"
        brandImages3="/frame-1410065678-1@2x.png"
        brandImages4="/frame-1410065679-1@2x.png"
        brandImages5="/frame-1410065680@2x.png"
        brandImages6="/frame-1410065677-1@2x.png"
        brandImages7="/frame-1410065678-2@2x.png"
        brandImages8="/frame-1410065679-2@2x.png"
        brandImages9="/frame-1410065680-1@2x.png"
        brandImages10="/frame-1410065677-2@2x.png"
      />
      <FooterDesktop logo="/logo-1@2x.png" />
    </div>
  );
};

export default HomePage;
