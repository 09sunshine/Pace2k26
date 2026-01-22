
import Hero from "../components/Hero";
import About from "../components/About";
import Sponsors from "../components/Sponsor";
import SponsorSection from "../components/SponsorSection";
import EventSlider from "../components/EventSlider";
import Countdown from "../components/Countdown";
import TeamSection from "../components/TeamSection";
import Gallery from "../components/Gallery"


const Home = () => {
  return (
    <>
      <div className="mb-10">
        <Hero />
      </div>
      <div className="mb-25">
        <About />
      </div>
      <div className="mb-25">
        <Countdown />
      </div>
      <div className="mb-25">
        <EventSlider />
      </div>
      <div className="mb-25">
        <TeamSection />
      </div>
      <div className="mb-25">
        <Sponsors />
      </div>
      <div>
        <Gallery />
      </div>
      <div className="mb-16">
        <SponsorSection />
      </div>
    </>
  );
};

export default Home;
