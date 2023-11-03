import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Myheader from './Components/Myheader';
import Amplify from './Components/Amplify';
import Sampl from './Components/Sampl';
import "aos/dist/aos.css"
import Aos from "aos"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Eefi from './Components/Eefi';
import Myfooter from './Components/Myfooter';
import Team from './Components/Team';
import Eco from './Components/Eco';
import Roadmap from './Components/Roadmap';
import Total from './Components/Total';
import Future from './Components/Future';
import Myform from './Components/Myform';
import { useEffect, useState } from 'react';


function App() {
// Aos-start

  useEffect (() => {
  Aos.init({once:false,});
}, [])
// Aos-end

//  preloader-end

  return (
    <div className=' overflow-hidden'>
        <Myheader/>
        <Amplify/>
        <Sampl/>
        <Eefi/>
        <Total/>
        <Future/>
        <Team/>
        <Eco/>
        <Roadmap/>
        <Myform/>
        <Myfooter/>
    </div>
  );
}

export default App;
