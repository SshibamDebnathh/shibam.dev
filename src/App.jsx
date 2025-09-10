import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-700 w-full overflow-hidden">
      <Navbar/>
      <HeroSection/>
      <Projects/>
      <About/>
      <Skills/>
      <Contact/>
      <Footer/>

    </div>
  );
}
