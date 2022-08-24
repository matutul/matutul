import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './Component/Home/Home';
import Header from './Component/Global/Header/Header';
import Footer from './Component/Global/Footer/Footer';
import Aboutme from './Component/Aboutme/Aboutme';
import Projects from './Component/Projects/Work';
import Contact from './Component/Contact/Contact';
import Skills from "./Component/Skills/Skills";

function App() {
  return (
    <Router>
      <Header />

      {/* routing block */}
      <Routes>
        <Route path="/about" element={<Aboutme />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/work" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
      </Routes>


      <Footer />
    </Router>
    // <div>
    //   <Header />
    //   <Home />
    //   <Aboutme />
    // </div>
  );
}

export default App;
