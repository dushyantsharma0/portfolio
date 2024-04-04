
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import $ from 'jquery'
import SwipeableTemporaryDrawer from './sidebar';
import Footer from './footer';
import { Margin } from '@mui/icons-material';

import img from '../src/assets/myimg2.png'
import Skills from './skill';
import About from './about';
import Projects from './projects';


const Header = () => {
const [showpic, setshowpic] = useState(false)
$(document).ready(function() {
  $('.showw').on('mouseenter touchstart', function () {
    setshowpic(true);
  });
});

 useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/typed.js@2.0.12';
    script.async = true;

    document.body.appendChild(script);

    script.onload = () => {
      // Initialize Typed instance once the script is loaded
      const options = {
        strings: [
          " i am dushyant",
          "Hi, i am Dushyant",
          "I'm a Full Stack Web Developer",
          " I'm a freelancer",
          "I'm a software engineer",
        ],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1000,
        startDelay: 1000,
        loop: true
      };
      new Typed(".multiple-text2", options);
      const options2 = {
        strings: [
          " i am dushyant",
          "html",
          "css2 and css3",
          "  javascript",
          "react js",
          "node js",
          "bootscape",
          "material ui",
          "tailwindcss",
          "jquery"

        ],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1000,
        startDelay: 1000,
        loop: true
      };
      new Typed(".multiple-text", options2);
    };
    

    // Clean up the script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  $(document).ready(function() {
    $('.maintop').show(500, function() {
      $('.oflow').show(700,function(){
        $('.movingtxt').show(500)
      });
    });
  });
  return (

 <>
  <div id='home' className=' hidden maintop'>
     <div className='   flex  pr-5 items-center justify-between w-[100%] '>
    
    <div className=' h-[100px] namediv'><h1 className=" mytext text-3xl font-bold ">
    <img style={{ marginLeft: '50%', transform: 'translateX(-50%)' }} width={150} src={img} alt="" />
     <abbr title="welcome to my portfolio website"> MY SELF DUSHYANT </abbr>
    </h1></div>
  
   <SwipeableTemporaryDrawer/>
  </div>
  </div>
  <hr />
   <div className=' hidden oflow'>
   <div className='animate whitespace-nowrap '>
    <div className='inline-block'>
        <h1 className=' mr-3 inline-block text-2xl font-[900]'> Dushyant</h1>
        <h1 className='mr-3 inline-block text-3xl font-[900]' >.</h1>
        <h1 className='mr-3 inline-block  text-2xl font-[900]'>Portfolio</h1>
    </div>
    <div className=' inline-block' >
        <h1 className=' mr-1 inline-block text-2xl font-[900]' >using languages are *</h1>
        <h1  className=' ml-3 mr-3 inline-block text-2xl font-[900]'>html css javascript react js node js bootscape material ui tailwindcss jquery etc </h1>
    </div>
    <div className='inline-block'>
        <h1 className=' mr-3 inline-block text-2xl font-[900]'> Dushyant</h1>
        <h1 className='mr-3 inline-block text-3xl font-[900]' >.</h1>
        <h1 className='mr-3 inline-block  text-2xl font-[900]'>Portfolio</h1>
    </div>
    <div className=' inline-block' >
        <h1 className=' mr-1 inline-block text-2xl font-[900]' >using languages are *</h1>
        <h1  className=' ml-3 mr-3 inline-block text-2xl font-[900]'>html css javascript react js node js bootscape material ui tailwindcss jquery etc </h1>
    </div>
    <div className='inline-block'>
        <h1 className=' mr-3 inline-block text-2xl font-[900]'> Dushyant</h1>
        <h1 className='mr-3 inline-block text-3xl font-[900]' >.</h1>
        <h1 className='mr-3 inline-block  text-2xl font-[900]'>Portfolio</h1>
    </div>
    <div className=' inline-block' >
        <h1 className=' mr-1 inline-block text-2xl font-[900]' >using languages are *</h1>
        <h1  className=' ml-3  mr-3 inline-block text-2xl font-[900]'>html css javascript react js node js bootscape material ui tailwindcss jquery etc </h1>
    </div>
   </div>
   </div>
  <hr />



 
 <h1 className='movingtxt text hidden '>   <p className=' md:text-4xl text-xl multiple-text2'>  </p></h1>

<div className=' img w-[100%]  h-[80vh]'>
   
</div>

<h1 id='newskill' className=' text  showw '>SKILLS</h1>
{/* <a href="https://wonderful-florentine-530021.netlify.app/"> 1click me</a>
<br />
<br />
<a href="https://prj-smoky.vercel.app/main"> third</a>
<br />
<a href="https://ytclone-mu.vercel.app/">yt vcone</a>
<a href="https://login-seven-blond.vercel.app/loginhttps://login-seven-blond.vercel.app/login">2 clcik</a> */}
<h1 id='skills' className='md:text-4xl  text-xl text'>skills : <p className='md:text-4xl text-xl multiple-text'>  </p></h1>

<Skills show={showpic}/>

<Projects/>
    <About/>
    <Footer/>
    
  
 </>
  )
}

export default Header





