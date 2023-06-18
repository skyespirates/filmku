import About from "../components/About";
import Fitur from "../components/Fitur";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Recent from "../components/Recent";
import Team from "../components/Team";

const Home = () => {
  return (
    <div className="bg-background">
      <Hero />
      <About />
      <Recent />
      <Fitur />
      <Team />
      <Footer />
    </div>
  );
};

export default Home;
