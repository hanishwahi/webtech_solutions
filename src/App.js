import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Components/Home';
import Footer from './Footer/Footer';
import Services from './Components/Services/Services';
import DigitalMarketing from './Components/Services/DigitalMarketing';
import WebDevelopment from './Components/Services/WebDevelopment';
import ScrollToTop from './Components/ScrollToTop';
import AppDevelopment from './Components/Services/AppDevelopment';
import '../src/Style/Responsive.css'
import AboutUs from './Components/AboutUs';
import GraphicDesigning from './Components/Services/GraphicDesigning';
import PageNotFound from './Components/PageNotFound';
import ContactForm from './Components/ContactForm';
import OurTeam from './Components/OurTeam';
   
function App() {
  return (
    <>

      <HashRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/about-us' element={<AboutUs/>} />
          <Route path='/services' element={<Services />} />
          <Route path='/services/digital-marketing' element={<DigitalMarketing />} />
          <Route path='/services/web-development' element={<WebDevelopment />} />
          <Route path='/services/app-development' element={<AppDevelopment />} />
          <Route path='/services/graphic-designing' element={<GraphicDesigning/>} />
          <Route path='/contact-us' element={<ContactForm/>} />
          <Route path='/our-team' element={<OurTeam/>} />
           <Route path='*' element={<PageNotFound/>}/>
         </Routes>
 
        <Footer />
        <ScrollToTop />
      </HashRouter>
    </>
  );
}

export default App;


 