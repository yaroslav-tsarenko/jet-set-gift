import HeaderDesktop from "../components/HeaderDesktop";
import Content from "../components/Content";
import FooterDesktop from "../components/FooterDesktop";
import "./SignInPage.css";

const SignInPage = () => {
  return (
    <div className="signinpage">
      <HeaderDesktop />
      <Content />
      <FooterDesktop />
    </div>
  );
};

export default SignInPage;
