import HeaderDesktop from "../components/HeaderDesktop";
import Content from "../components/Content";
import FrameComponent1 from "../components/FrameComponent1";
import FooterDesktop from "../components/FooterDesktop";
import "./ProductDescriptionPage.css";

const ProductDescriptionPage = () => {
  return (
    <div className="productdescriptionpage">
      <HeaderDesktop tickerTop="0" tickerPosition="sticky" />
      <Content />
      <FrameComponent1 />
      <FooterDesktop logo="/logo-11@2x.png" />
    </div>
  );
};

export default ProductDescriptionPage;
