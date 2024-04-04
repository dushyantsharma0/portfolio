import React from 'react'
import Section from './section';
import img1 from '../src/assets/1.png'
import img2 from '../src/assets/2.png'
import img3 from '../src/assets/3.png'
import img4 from '../src/assets/4.png'
import img5 from '../src/assets/5.png'
import img6 from '../src/assets/6.png'
import img7 from '../src/assets/7.png'
import img8 from '../src/assets/8.png'
import $ from 'jquery'


const Projects = () => {
   $(document).ready(() => {
      $('.myprj').mouseenter(()=>{
         $('.one1').show(200,function(){
            $('.two2').show(200,function(){
               $('.three3').show(200,function(){
                  $('.four4').show(200,function(){
                     $('.five5').show(200,function(){
                        $('.six6').show(200,function(){
                           $('.seven7').show(200,function(){
                              $('.eight8').fadeIn(200)
                           })
                        })
                     })
                  })
               })
            })
         })
      })
   })
  return (
 <div id='project'>
    <h1 className='text myprj'>PROJECTS</h1>
   <div >
   <div className='flex flex-wrap p-3 gap-4 justify-center '> 
   <div className='one1 hidden'>
   <Section img={img1} color='rgb(118, 239, 118)' name='Contact & Videoplayer' link='https://wonderful-florentine-530021.netlify.app/'/>

   </div>
   <div className='two2 hidden'>
   <Section img={img2} color='#e17270' name='Simple Code Share' link='https://prj-smoky.vercel.app/'/>

   </div>
   <div className='three3 hidden'>
   <Section img={img3} color='#eeee91' name='Form Validation OTP' link='https://login-seven-blond.vercel.app/login'/>

   </div>
   <div className='four4 hidden'>
   <Section img={img4} color='#ee91e8' name='Youtube Clone' link='https://ytclone-mu.vercel.app/'/>

   </div>
   <div className='five5 hidden'>
   <Section img={img5} color='#63def752' name='Awsom Animated' link='https://animated-livid.vercel.app/'/>

   </div>
   <div className='six6 hidden'>
   <Section img={img6} color='#06521152' name='cuberto Animated' link='https://cuberto-2.vercel.app/'/>

   </div>
   <div className='seven7 hidden'>
   <Section img={img7} color='#b9f8ab' name='Sundown Studio' link='https://sundown-gilt.vercel.app/'/>

   </div>
   <div className='eight8 hidden'>
   <Section img={img8} color='#f08e8e52' name='Calling Jadoo' link='https://calling-jadoo-liard.vercel.app/'/>

   </div>

    </div>
   </div>
 </div>
  )
}

export default Projects