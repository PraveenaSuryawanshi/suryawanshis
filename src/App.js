import React from 'react';
import './App.css';
import './css/bootstrap.min.css';
import './css/slick.css';
import './css/tooplate-little-fashion.css'
import "aos/dist/aos.css";
import { Route ,BrowserRouter, Routes , Navigate} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Projects from './pages/project';
import Contact from './pages/contact';
import ProjectDetails from './pages/projectDetails';
function App() {
  return (
    <>
    <BrowserRouter>
    < Navbar/>
    <Routes>
      <Route path='/suryawanshis' extact element={<Home/>} />
      <Route path='/suryawanshis/home' element={<Navigate to="/suryawanshis/home"/>} />
      <Route path='/suryawanshis/about' extact element={<About/>} />
      <Route path='/suryawanshis/project' extact element={<Projects/>} />
      <Route path='/suryawanshis/project/detailspage:id' extact element={<ProjectDetails />} />
      <Route path='/suryawanshis/project/detailspage' element={<Navigate to="/suryawanshis/project/detailspage/1"/>} />
      <Route path='/suryawanshis/contact' extact element={<Contact/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  );
}

export default App;
