import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Home />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
