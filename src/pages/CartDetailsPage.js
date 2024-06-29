import Main from "../components/Main";
import CartContent from "../components/CartContent";
import FooterDesktop1 from "../components/FooterDesktop1";
import "./CartDetailsPage.css";

const CartDetailsPage = () => {
  return (
    <div className="cartdetailspage">
      <Main yourCart="Your Cart" />
      <CartContent />
      <FooterDesktop1 />
    </div>
  );
};

export default CartDetailsPage;
