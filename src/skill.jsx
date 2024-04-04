import React from 'react'
import img from '../src/assets/myimg2.png'
import $, { ready } from 'jquery'
const Skills = (props) => {
   $(document).ready(function(){
      if (props.show == true) {
        $('.img').show(500, function(){
          $('.first').show(500, function(){
            $('.second').show(500);
          });
        });
      }
    });
  $(ready).ready(function(){
   $('.mainskills').scrollTop(function(){
      $('.inner').animate({width:'99%'},300,function(){
         $('.inner2').animate({width:'80%'},300,function(){
            $('.inner3').animate({width:'70%'},300,function(){
               $('.inner4').animate({width:'65%'},300,function(){
                  $('.inner5').animate({width:'68%'},300,function(){
                     $('.inner6').animate({width:'77%'},300,function(){
                        $('.inner7').animate({width:'85%'},300,function(){
                           $('.inner8').animate({width:'60%'},300,function(){
                              $('.inner9').animate({width:'69%'},300)
                           })
                        })
                     })
                  })
               })
            })
         })
      })
   })
  })
// $(document).ready(function () {
  
// })
  return (
   <>
     <div className=' mainskills  min-w-10 min-h-9'>
     <div style={{margin:'0 auto'}} class='pentagen img hidden'>
    <img class='inner-imageinner-image ' src={img} alt="" />
</div>

    <div className=' mt-5 md:mt-0 mb-5 flex flex-col md:flex-row w-[full] justify-between'>
    
{/* left?  */}
<div className='first hidden'>
 <div className='flex justify-center items-center'>
 <p className='md:mr-10 text-xl font-[600]'>Html : </p>  <div className='   w-52 outer  rounded-full '>
  
  <div className=' inner bg-red-400  rounded-full'>
  <p style={{fontSize:'10px', textAlign:'center'}}>99%</p>
     </div>
     
  </div>
 </div>
 <div className='flex justify-center items-center'>
 <p className='md:mr-16 text-xl font-[600]'>css : </p>  <div className='w-52 outer  rounded-full '>
  
  <div className=' inner2 rounded-full'>
  <p style={{fontSize:'10px', textAlign:'center'}}>80%</p>
     </div>
     
  </div>
 </div>

 <div className='flex justify-center items-center'>
 <p className='md:mr-1 text-[15px] md:text-xl font-[600]'>javascript : </p>  <div className='w-52 outer  rounded-full '>
  
  <div className=' inner3   rounded-full'>
  <p style={{fontSize:'10px', textAlign:'center'}}>70%</p>
     </div>
     
  </div>
 </div>
 <div className='flex justify-center items-center'>
 <p className=' text-[15px] md:text-xl font-[600]'>tailwind_css:</p>  <div className='w-52 outer  rounded-full '>
  
  <div className=' inner4  rounded-full'>
  <p style={{fontSize:'10px', textAlign:'center'}}>65%</p>
     </div>
     
  </div>
 </div>
 <div className=' flex justify-center items-center'>
 <p className='md:mr-9 text-xl font-[600]'>jquery : </p>  <div className='w-52 outer  rounded-full '>
  
  <div className=' inner5  rounded-full'>
  <p style={{fontSize:'10px', textAlign:'center'}}>68%</p>
     </div>
     
  </div>
 </div>
 


</div>
{/* left?  */}
<div className='second hidden'>
<div className='flex justify-center items-center'>
 <p className='md:mr-4 text-xl font-[600]'>bootscap: </p>  <div className='w-52 outer  rounded-full '>
  
  <div className=' inner6   rounded-full'>
  <p style={{fontSize:'10px', textAlign:'center'}}>77%</p>
     </div>
     
  </div>
 </div>
 <div className='flex justify-center items-center'>
 <p className='md:mr-6  text-xl font-[600]'>React js : </p>  <div className='w-52 outer  rounded-full '>
  
  <div className=' inner7   rounded-full'>
  <p style={{fontSize:'10px', textAlign:'center'}}>85%</p>
     </div>
     
  </div>
 </div>
 <div className='flex justify-center items-center'>
 <p className=' text-xl font-[600]'>material ui : </p>  <div className='w-52 outer  rounded-full '>
  
  <div className=' inner8   rounded-full'>
  <p style={{fontSize:'10px', textAlign:'center'}}>60%</p>
     </div>
     
  </div>
 </div>
 <div className='flex justify-center items-center'>
 <p className='md:mr-6 text-xl font-[600]'>node js : </p>  <div className='w-52 outer  rounded-full '>
  
  <div className=' inner9  rounded-full'>
  <p style={{fontSize:'10px', textAlign:'center'}}>69%</p>
     </div>
     
  </div>
 </div>
</div>
    </div>
     </div>
    </>
  )
}

export default Skills