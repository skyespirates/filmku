import About from "../components/About";
import Fitur from "../components/Fitur";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Recent from "../components/Recent";
import Team from "../components/Team";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Recent />
      <Fitur />
      <Team />
      <Footer />
    </>
  );
};

export default Home;
