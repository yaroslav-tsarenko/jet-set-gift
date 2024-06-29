import HeaderDesktop from "../components/HeaderDesktop";
import ProductCards from "../components/ProductCards";
import BrandFooter from "../components/BrandFooter";
import FooterDesktop from "../components/FooterDesktop";
import "./ProductListingPage.css";

const ProductListingPage = () => {
  return (
    <div className="productlistingpage">
      <HeaderDesktop tickerTop="0" tickerPosition="sticky" />
      <section className="content-banner">
        <img className="content-banner-child" alt="" src="/group-5@2x.png" />
        <h1 className="explore-our-gift">Explore Our Gift Cards</h1>
        <div className="banner-description">
          <div className="whether-youre-celebrating">
            Whether you're celebrating a birthday, expressing gratitude, or
            simply spreading joy, our curated selection of eGift cards offers
            something for everyone.
          </div>
        </div>
      </section>
      <section className="filter-bar-parent">
        <div className="filter-bar">
          <div className="filter-options">
            <div className="sort-2">
              <div className="find">Find</div>
              <div className="form-field">
                <div className="form-label">Search</div>
                <img className="icon" alt="" src="/icon-2.svg" />
              </div>
            </div>
            <div className="sort-1">
              <div className="sort-by">{`Sort by `}</div>
              <div className="form-field1">
                <div className="form-label1">Latest</div>
                <img className="icon1" alt="" src="/icon-31.svg" />
              </div>
            </div>
            <div className="sort-3">
              <div className="explore-our-gift1">Explore Our Gift Cards</div>
              <div className="form-field2">
                <div className="form-label2">Select by Brands</div>
                <img className="icon2" alt="" src="/icon-31.svg" />
              </div>
            </div>
          </div>
          <div className="clear-filter">
            <img className="clear-filter-child" alt="" src="/group-8796.svg" />
            <div className="clear-all-filters">Clear All Filters</div>
          </div>
        </div>
        <div className="product-grid">
          <ProductCards image5="/image-5@2x.png" />
          <ProductCards image5="/image-6@2x.png" propHeight="336px" />
          <ProductCards image5="/image-3@2x.png" propHeight="336px" />
          <ProductCards image5="/image-7@2x.png" propHeight="336px" />
          <ProductCards image5="/2@2x.png" propHeight="336px" />
          <ProductCards image5="/1@2x.png" propHeight="336px" />
          <ProductCards image5="/41@2x.png" propHeight="336px" />
          <ProductCards image5="/image-1@2x.png" propHeight="326px" />
          <ProductCards image5="/image-7@2x.png" propHeight="336px" />
          <ProductCards image5="/image-8@2x.png" propHeight="336px" />
          <ProductCards image5="/14@2x.png" propHeight="336px" />
          <ProductCards image5="/image-9@2x.png" propHeight="336px" />
        </div>
      </section>
      <BrandFooter
        brandImages="/frame-14100656781@2x.png"
        brandImages1="/frame-14100656791@2x.png"
        image12="/image-12@2x.png"
        brandImages2="/frame-14100656771@2x.png"
        brandImages3="/frame-1410065678-11@2x.png"
        brandImages4="/frame-1410065679-11@2x.png"
        brandImages5="/frame-14100656801@2x.png"
        brandImages6="/frame-1410065677-11@2x.png"
        brandImages7="/frame-1410065678-21@2x.png"
        brandImages8="/frame-1410065679-21@2x.png"
        brandImages9="/frame-1410065680-11@2x.png"
        brandImages10="/frame-1410065677-21@2x.png"
      />
      <FooterDesktop logo="/logo-11@2x.png" />
    </div>
  );
};

export default ProductListingPage;
