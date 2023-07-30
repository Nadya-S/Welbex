import './Main.css';
import AboutCompany from "../components/AboutCompany/AboutCompany";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";

const Main = () => {
  return (
    <section className="main">
      <Header />
      <Layout>
        <AboutCompany />
      </Layout>
      <Footer />
    </section>
  );
};

export default Main;
