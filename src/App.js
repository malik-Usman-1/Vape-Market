import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Aboutscreen from './Screens/Aboutscreen';
import Pagescreen from './Screens/Pagescreen';
import Blogscreen from './Screens/Blogscreen';
import Homescreen from './Screens/Homescreen';
import Nav from './Navbar/Nav';
import Footer from './Footer/Footer';

function App() {
  return (
   <>
   {/* <Navbar/> */}

   {/* <Nav/> */}

   <Routes>

   <Route path='/' element={<Homescreen/>}/>

    <Route path='/about' element={<Aboutscreen/>}/>
    <Route path='/page' element={<Pagescreen/>}/>
    <Route path='/blog' element={<Blogscreen/>}/>


   </Routes>
   <Footer/>
   </>
  );
}

export default App;