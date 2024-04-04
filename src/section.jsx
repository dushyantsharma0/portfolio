import React from 'react'
 import { Button, Paper, Typography } from '@mui/material'
const  Section = (props) => {
  return (
    
    <div>
     <Paper sx={{
  width: '250px',
  height: '250px',
  bgcolor:  props.color,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}}>
  <img  className='w-[100%] h-[250px]' src={props.img} alt="" />
  <p className='text-2xl'>{props.name}</p>
  <Button   color='secondary' ><a href={props.link}>visit</a></Button>
</Paper>
    </div>
  )
}

export default Section