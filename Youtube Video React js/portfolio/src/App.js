import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Intro from "./components/Intro/intro";
import Navbar from "./components/navbar/navbar";
import Skills from "./components/skills/skills";
import Works from "./components/Works/works";




function App() {
  return (
    <div className="App">

      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
