
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';

import AboutUs from './pages/aboutUs/aboutUs';
import HowWeWork from './pages/howWeWork/howWeWork';
function App() {
  return (
    <div className="App">
     < Router>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='how-we-work' element={<HowWeWork/>}/>
      <Route path='about-us' element={<AboutUs/>}/>
      </Routes>
      
      </Router>
    </div>
  );
}

export default App;
