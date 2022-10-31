import Home from './Component/Home/Home';
import Header from './Component/Global/Header/Header';
import Footer from './Component/Global/Footer/Footer';
import Aboutme from './Component/Aboutme/Aboutme';
import Projects from './Component/Projects/Work';
import Contact from './Component/Contact/Contact';
import Skills from "./Component/Skills/Skills";
import { Link } from 'react-scroll';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Aboutme />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
