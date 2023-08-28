// import logo from './logo.svg';
import './App.css';
import Contact from './COMPONENTS/PAGES/CONTACT-PAGE/Contact';
import Faq from './COMPONENTS/PAGES/FAQ-PAGE/Faq';
import Footer from './COMPONENTS/FOOTER/Footer';
import About from './COMPONENTS/PAGES/ABOUT/About';
import Nav from './COMPONENTS/NAV-BAR/Nav';
import Home from './COMPONENTS/PAGES/HOME/Home';
// import { useEffect } from 'react';
import Videos from './COMPONENTS/PAGES/ABOUT/VIDEO PAGE/Videos';
import Workstrategy from './COMPONENTS/PAGES/ABOUT/WORK STRATEGY PAGE/Workstrategy';
import Secondsection from './COMPONENTS/PAGES/HOME/SecondSection/Secondsection';
import { Route, BrowserRouter, Router, Routes } from 'react-router-dom';
import Blog from './COMPONENTS/PAGES/CONTACT-PAGE/BLOG/Blog';
import Services from './COMPONENTS/PAGES/SERVICES/Services';
import All_Blogs from './COMPONENTS/PAGES/CONTACT-PAGE/BLOG/ALL_BLOGS/All_Blogs';
import BlogDetail from './COMPONENTS/PAGES/CONTACT-PAGE/BLOG/BLOG_DETAIL/BlogDetail';
import { SideNav } from './COMPONENTS';


import {TweenMax, Power3} from 'gsap'



function App() {


////

   return (
    
    
    <div className="App">
      <Nav/>
     
     
      {/* <Videos/>
      <About/>
      <Workstrategy/>
      <Contact/>
      <Footer/>
      <Faq/> */}
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Services" element={<Services/>}/>
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/allBlog" element={<All_Blogs/>}/>
        
        <Route path="/blog/detail" element={<BlogDetail/>}/>

      
      
      
      </Routes>
  
    
      
    </div>
    
  );
}

export default App;
