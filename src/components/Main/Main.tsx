import ContactUs from "./ContactUs/ContactUs";
import About from "./Content/About/About";
import Projects from "./Content/Projects/Projects";
import RecentWorks from "./Content/RecentWorks/RecentWorks";
import Team from "./Content/Team/Team";
import Slider from "./Silder/Slider";

const Main = () => {
  return (
    <main>
      <Slider />
      <About />
      <RecentWorks />
      <Team />
      <Projects />
      <ContactUs />
    </main>
  );
};

export default Main;
