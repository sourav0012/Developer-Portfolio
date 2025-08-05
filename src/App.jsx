import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Feature from "./pages/Feature";
import Story from "./pages/Story";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Feature />
      <Story />
      <Project />
      <Contact />
      <Footer/>
    </>
  );
};

export default App;
