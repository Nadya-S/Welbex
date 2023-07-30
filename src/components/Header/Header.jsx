import Navigation from "../Navigation/Navigation";
import "./Header.css";
import purpleBall from "../../images/purple_ball.svg";
import purpleLight from "../../images/purple_light.svg";
import logo from "../../images/logo_welbex.svg";
import telegram from "../../images/telegram.svg";
import viber from "../../images/viber.svg";
import wa from "../../images/whatsapp.svg";

const Header = () => {
  return (
    <header className="header">
      <img className="header__purple-ball" alt="purple ball" src={purpleBall} />
      <img
        className="header__purple-light"
        alt="purple light"
        src={purpleLight}
      />
      <div className="header__logo">
        <img className="logo" alt="logo" src={logo} />
        <p className="header__logo-text">
          крупный интегратор CRM в Росcии и ещё 8 странах
        </p>
      </div>
      <div className="header__navigation">
        <Navigation />
      </div>
      <div className="header__contacts">
        <p className="header__tel-number">+7 555 555-55-55</p>
        <div className="header__icons">
          <a
            href="#"
            target="_blank"
            className="link header__icon"
            rel="noreferrer"
          >
            <img src={telegram} alt="Telegram icon" />
          </a>
          <a
            href="#"
            target="_blank"
            className="link header__icon"
            rel="noreferrer"
          >
            <img src={viber} alt="Viber icon" />
          </a>
          <a
            href="#"
            target="_blank"
            className="link header__icon"
            rel="noreferrer"
          >
            <img src={wa} alt="WA icon" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
