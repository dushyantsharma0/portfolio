import { Paper, Typography } from '@mui/material'
import React from 'react'
import pdf from '../src/assets/cv2.pdf'
import $ from  'jquery'

const About = () => {
  $(document).ready(function() {
    $('.about').on('mouseenter touchstart', () => {
      $('.heding').show(1000)
    })
  })
    const handleDownload = () => {
        // Create a temporary anchor element
        const anchor = document.createElement('a');
        anchor.href = pdf; // Use the imported PDF file as the document URL
        anchor.download = 'document.pdf'; // Specify the filename for the downloaded file
        document.body.appendChild(anchor);
        anchor.click(); // Trigger the click event to initiate the download
        document.body.removeChild(anchor); // Clean up the temporary anchor element
      };
    
  return (
    <div id='about'className=' about w-[100%]' >
  
      <Paper className=' w-[100wh]  md:w-max' sx={{ margin:'0 auto', padding:'10px', borderRadius:'15px' }}>
      <h1 className='text-center text'>ABOUT US</h1>
      <hr /><hr />
     <div className='heding hidden'>
     <Typography>1. I am a full-stack web developer.</Typography>
<Typography>2. I have 1 year of experience.</Typography>
<Typography>3. I have proper knowledge of Git and GitHub.</Typography>
<Typography>4. I work with APIs.</Typography>
<Typography>5. I have good knowledge of MongoDB and Mongoose.</Typography>
<Typography>6. I have knowledge of Socket.io and have worked on numerous projects using Socket.io.</Typography>
<Typography>7. I have proper knowledge of WebRTC and live video calls.</Typography>
<Typography>8. I am always learning something new.</Typography>
<Typography>9. I am a good team player.</Typography>
     </div>
<hr /><hr />
<div style={{ margin:'0 auto',background:'#f69696ad' }}
      onClick={handleDownload}
      className=' cursor-pointer pb-4 w-[150px] h-[30px] mybtn'
    >
      <h1 style={{ marginTop:'-10px',fontSize:'17px'}} >Download CV</h1>
    </div>
      </Paper>

    </div>
  )
}

export default About