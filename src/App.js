import './App.css';
import { Route, Routes } from 'react-router-dom';
import Aboutscreen from './Screens/Aboutscreen';
import Blogscreen from './Screens/Blogscreen';
import Homescreen from './Screens/Homescreen';
import Nav from './Navbar/Nav';
import Footer from './Footer/Footer';
import Shopscreen from './Screens/Shopscreen';
import ScrollToTopButton from './ScrollToTopButton/ScrollToTopButton';
import Contactscreen from './Screens/Contactscreen';
import ProductDetail from './ProductDetail/ProductDetail';

function App() {
  return (
   <>
   

   <Nav/>

   <Routes>

   <Route path='/' element={<Homescreen/>}/>
   

    <Route path='/about' element={<Aboutscreen/>}/>
    <Route path='/shop' element={<Shopscreen/>}/>
    <Route path='/blog' element={<Blogscreen/>}/>
    <Route path='/contact' element={<Contactscreen/>}/>
    <Route path="/product/:id" element={<ProductDetail/>} />



   </Routes>
   <Footer/>
   <ScrollToTopButton/>
   </>
  );
}

export default App;