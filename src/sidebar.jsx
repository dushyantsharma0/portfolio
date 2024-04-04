import React from 'react'
import $ from 'jquery'
const Menus = () => {
  $(document).ready(function(){
    $('.one').show(600, function(){
      $('.two').show(500, function(){
        $('.three').show(500, function(){
          $('.four').show(500, function(){
            $('.five').show(500);
          });
        });
      });
    });
  });
  $('document').ready(function(){
   $('.menu').click(function(){
    $('.allbox').removeClass('hidden')
    $('.menu').addClass('hidden')
   })
  })
  $('document').ready(function(){
    $('.allbox').click(function(){
     $('.menu').removeClass('hidden')
     $('.allbox').addClass('hidden')
    })
   })
  return (
    
   <>
     <button className=' md:hidden  mybtn menu'><a href='#home' ><h1 style={{marginTop:'-10px'}}>MENU</h1></a> </button>

<div className=' md:block md:static hidden allbox absolute top-0 right-0'>
<div className='flex gap-2 flex-col md:flex-row '>
    <button className='  mybtn one hidden'><a href='#home' ><h1 style={{marginTop:'-10px'}}>HOME</h1></a> </button>
    <button className='mybtn two hidden'><a href='#about' ><h1 style={{marginTop:'-10px'}}>ABOUT</h1></a> </button>

    <button className='mybtn three hidden'><a href='#newskill' ><h1 style={{marginTop:'-10px'}}>SKILLS</h1></a> </button>

    <button className='mybtn four hidden'><a href='#project' ><h1 style={{marginTop:'-10px'}}>PROJECTS</h1></a> </button>

    <button className='mybtn five hidden'><a  href='#footer' ><h1 style={{marginTop:'-10px'}}>CONTACT</h1></a> </button>

   </div>
</div>
   </>
  )
}

export default Menus