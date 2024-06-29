import Main from "../components/Main";
import AccountContent from "../components/AccountContent";
import FooterDesktop from "../components/FooterDesktop";
import "./AccountPage.css";

const AccountPage = () => {
  return (
    <div className="accountpage">
      <Main />
      <AccountContent />
      <FooterDesktop />
    </div>
  );
};

export default AccountPage;
