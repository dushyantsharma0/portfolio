import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import $ from "jquery"
import Header from './header';
function App() {
 
  $('.btn').click(function(){
    alert('You have')
  })
  return (
   <>
 <Header/>
   

   </>
  )
}

export default App
