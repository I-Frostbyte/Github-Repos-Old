import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Network from "./pages/Network";
import Recruitment from "./pages/Recruitment";
import Contact from "./pages/Contact";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/people-finance" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/network" element={<Network />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
