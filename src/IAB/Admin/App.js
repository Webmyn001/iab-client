import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router ,Route, Routes, } from "react-router-dom"

import Navbar from './IAB/Admim/header/Navbar'
import Footer from './IAB/Admin/Footer/Footer'
import Homepage from './IAB/Admin/Homepage'


function App() {

     
  return (
    <div className='font-josefins bg-[#f5f5f5]'>

    <Router>
            <Navbar/>
       
         <Routes>

           {/* Admin */}
           
               <Route path = "/admin" exact element= {<Homepage />}></Route>
                   
                   {/* List to delete */}

         </Routes>
       <Footer/>
         </Router> 

         
      </div>
  )
}

export default App