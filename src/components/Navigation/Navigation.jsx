import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="navigation">
      <Link className="link navigation__link">Услуги</Link>
      <Link className="link navigation__link">Виджеты</Link>
      <Link className="link navigation__link">Интеграции</Link>
      <Link className="link navigation__link">Кейсы</Link>
      <Link className="link navigation__link">Сертификаты</Link>
    </nav>
  );
};

export default Navigation;
