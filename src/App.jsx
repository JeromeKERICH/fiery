import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Team from "./pages/Team";

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/team" element={<Team/>}/>
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
};
export default App;
