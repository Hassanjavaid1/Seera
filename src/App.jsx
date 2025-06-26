import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Profile from "./components/Profile.jsx";
import HeroSection from "./components/HeroSection.jsx";
import Projects from "./components/Projects.jsx";
import Tools from "./components/Tools.jsx";
import FAQ from "./components/FAQ.jsx";
import Reviews from "./components/Reviews.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";
import Blog from "./components/Blog.jsx";

function App() {
  return (
    <>
      <Navbar />
      <div className="md:px-6 lg:px-20 xl:flex xl:flex-1 gap-3 xl:justify-center xl:max-w-[80%] xl:m-auto xl:py-12">
        <Profile />
        <div className="xl:w-[65%] xl:m-auto">
          <HeroSection />
          <Projects />
          <Tools />
          <Reviews />
          <Blog />
          <FAQ />
          <Contact />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
