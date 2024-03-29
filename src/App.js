import './App.css';
import { Header } from './Component/Header';

import Footer from './Component/Footer';
import OurFoods from './Component/OurFoods';
import { BrowserRouter } from 'react-router-dom';
import Aboutus from './Component/Aboutus';
import { Route,Routes } from 'react-router-dom';
import Home from './Component/Home';
import Signin from './Component/Signin';
import Slider from './Component/Slider';
import { useState } from 'react';



function App() {

  const[count,setCount]=useState(0);

  const addToCart=()=>{
    setCount(count+1);
  }


  
  return (
    <> 
   <BrowserRouter>
   
   <Header count={count}/>
   
   <Routes>
    <Route path='/' element={<Home addToCart={addToCart}/>}/>
    <Route path='/aboutus' element={<Aboutus/>}/>
    <Route path='/ourfoods' element={<Slider/>}/>
    <Route path='/signin' element={<Signin/>}/>

   </Routes>
   
  
   <OurFoods/>
   {/* <Signin/> */}
   <Footer/>
   </BrowserRouter>

   
    </>
  );
}

export default App;
