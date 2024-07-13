import Container from "../components/Container/Container";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";
import Main from "../components/Main/Main";
import SideBar from "../components/SideBar/SideBar";

const HomePage = () => {
  return (
    <Container>
      <Header />
      <Layout>
        <Main />
        <SideBar />
      </Layout>
      <Footer />
    </Container>
  );
};

export default HomePage;
