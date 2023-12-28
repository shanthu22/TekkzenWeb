import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Portfolio from "./pages/portfolio/portfolio";
import AboutUs from "./pages/aboutUs/aboutUs";
import HowWeWork from "./pages/howWeWork/howWeWork";
import ContactUs from "./pages/contactUs/contactUs";
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='how-we-work' element={<HowWeWork />} />
          <Route path='about-us' element={<AboutUs />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='contact-us' element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
