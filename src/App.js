 import './App.css';
 import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Components/Home';
import Footer from './Footer/Footer';
import Services from './Components/Services';
 
function App() {
  return (
     <>
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route index element={<Home/>}/>
    <Route path='/services' element={<Services/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
     </>
  );
}

export default App;
