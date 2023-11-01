import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Review from "./components/Review";
import Services from "./components/Services";

export default function App() {
  return (
    <main>
      <Navbar />
      <div>
        <Home />
        <About />
        <Services />
        <Portfolio />
        <Review />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
