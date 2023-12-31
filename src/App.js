import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Header/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Signup from './Components/Signup/Signup';
import JicBlogs from './Components/Blog Page/Jic Blogs';
import './style.css'
import Programs from './Components/Programs/programs';
import Blog1 from './Components/Blog Page/Blogs/blog1';
import Blog2 from './Components/Blog Page/Blogs/blog2';
import Blog3 from './Components/Blog Page/Blogs/blog3';
import ScrollToTop from './Components/ScrollToTop';
import Contact from './Components/ContactUs/ContactUs';
import Magnate3 from './Components/Magnate/Maganate3';
function App() {
  window.addEventListener('contextmenu', e => {
    e.preventDefault();
  })
  return (
    <Router>
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route element={<Home />} exact path='/' />
        <Route element={<Signup/>} exact path='/Signup' />
        <Route element={<JicBlogs/>} exact path='/JicBlogs' />
        <Route element={<Programs/>} exact path='/Programs'/>
        <Route element={<Contact/>} exact path='/Contact'/>
        <Route element={<Blog1/>} exact path='/Blog1' />
        <Route element={<Blog2/>} exact path='/Blog2' />
        <Route element={<Blog3/>} exact path='/Blog3' />
        <Route element={<Magnate3/>} exact path='/Magnate' />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;