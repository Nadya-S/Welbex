import "./AboutCompany.css";
import bigRedBall from "../../images/big_red_ball.svg";
import smallRedBall from "../../images/small_red_ball.svg";
import redLight from "../../images/red_light.svg";

const AboutCompany = () => {
  return (
    <section className="about-company">
      <img
        className="about-company__big-red-ball"
        alt="red ball"
        src={bigRedBall}
      />
      <img
        className="about-company__small-red-ball"
        alt="red ball"
        src={smallRedBall}
      />
      <img
        className="about-company__red-light"
        alt="red light"
        src={redLight}
      />
      <div className="about-company__title-container">
        <h1 className="about-company__title">
          Зарабатывайте больше
          <span className="about-company__title-span-accent"> с WELBEX</span>
        </h1>
        <h2 className="about-company__title-text">
          Развиваем и контролируем продажи за вас
        </h2>
      </div>
      <div className="about-company__consultation">
        <h3 className="about-company__consultation-text">
          Вместе с 
          <span className="about-company__consultation-span-accent">
            БЕСПЛАТНОЙ КОНСУЛЬТАЦИЕЙ
          </span>{" "}
          мы дарим:
        </h3>
        <ul className="about-company__list">
          <li className="about-company__list-item">
            <h3 className="about-company__list-title">ВИДЖЕТЫ</h3>
            <h3 className="about-company__list-title-mob">
              <div className="about-company__line"></div>SKYPE АУДИТ
            </h3>
            <p className="about-company__list-description">
              30 готовых решений
            </p>
          </li>
          <li className="about-company__list-item">
            <h3 className="about-company__list-title">DASHBOARD</h3>
            <h3 className="about-company__list-title-mob">30 ВИДЖЕТОВ</h3>
            <p className="about-company__list-description">
              с показателями вашего бизнеса
            </p>
          </li>
          <li className="about-company__list-item">
            <h3 className="about-company__list-title">SKYPE АУДИТ</h3>
            <h3 className="about-company__list-title-mob">DASHBOARD</h3>
            <p className="about-company__list-description">
              отдела продаж и CRM системы
            </p>
          </li>
          <li className="about-company__list-item">
            <h3 className="about-company__list-title">35 ДНЕЙ</h3>
            <h3 className="about-company__list-title-mob">МЕСЯЦ AMOCRM</h3>
            <p className="about-company__list-description">использования CRM</p>
          </li>
        </ul>
        <button className="about-company__button">Получить консультацию</button>
      </div>
    </section>
  );
};

export default AboutCompany;
