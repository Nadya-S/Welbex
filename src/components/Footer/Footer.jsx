import "./Footer.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import telegram from "../../images/telegram.svg";
import viber from "../../images/viber.svg";
import wa from "../../images/whatsapp.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__about-company">
        <h3 className="footer__title">О КОМПАНИИ</h3>
        <div className="footer__links">
          <Link className="link footer__link">Партнёрская программа</Link>
          <Link className="link footer__link">Вакансии</Link>
        </div>
      </div>
      <div className="footer__navigation">
        <h3 className="footer__title">МЕНЮ</h3>
        <div className="footer__two-columns">
          <div className="footer__links">
            <Link className="link footer__link">Расчёт стоимости</Link>
            <Link className="link footer__link">Услуги</Link>
            <Link className="link footer__link">Виджеты</Link>
            <Link className="link footer__link">Интеграции</Link>
            <Link className="link footer__link">Наши клиенты</Link>
          </div>
          <div className="footer__links">
            <Link className="link footer__link">Кейсы</Link>
            <Link className="link footer__link">Благодарственные письма</Link>
            <Link className="link footer__link">Сертификаты</Link>
            <Link className="link footer__link">Блог на Youtube</Link>
            <Link className="link footer__link">Вопрос / Ответ</Link>
          </div>
        </div>
      </div>
      <div className="footer__contacts">
        <h3 className="footer__title">КОНТАКТЫ</h3>
        <p className="footer__tel-number">+7 555 555-55-55</p>
        <div className="footer__icons">
          <a
            href="#"
            target="_blank"
            className="link footer__icon"
            rel="noreferrer"
          >
            <img
              className="footer__icon-img"
              src={telegram}
              alt="Telegram icon"
            />
          </a>
          <a
            href="#"
            target="_blank"
            className="link footer__icon"
            rel="noreferrer"
          >
            <img className="footer__icon-img" src={viber} alt="Viber icon" />
          </a>
          <a
            href="#"
            target="_blank"
            className="link footer__icon"
            rel="noreferrer"
          >
            <img className="footer__icon-img" src={wa} alt="WA icon" />
          </a>
        </div>
        <p className="footer__adress">Москва, Путевой проезд 3с1, к 902</p>
        <p className="footer__author">©WELBEX 2022. Все права защищены.</p>
        <a
          href="#"
          target="_blank"
          className="link footer__icon"
          rel="noreferrer"
        >
          <p className="footer__politics">Политика конфиденциальности</p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
