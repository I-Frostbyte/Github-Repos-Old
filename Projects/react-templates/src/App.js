import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Hero from "./pages/Hero";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import FAQs from "./pages/FAQs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/faqs" element={<FAQs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
