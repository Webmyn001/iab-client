import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router ,Route, Routes, } from "react-router-dom"

import Navbar from './IAB/Client/header/Navbar'
import axios from 'axios'
import Footer from './IAB/Client/Footer/Footer'
import Homepage from './IAB/Client/Homepage'
import Contact from './IAB/Client/Contact'


function App() {
  const [Lecture, setLecture] =useState([])
  const [loading, setLoading] = useState(false)

  const getLecture = async  () => {
     axios.get("https://naughty-wasp-umbrella.cyclic.app/api/mssnoau/iab/")
     .then(res => {
       console.log(res.data)
       setLecture(res.data)
       setLoading(true)
     }).catch(err => {
       console.log(err)
     })
    }

useEffect(() => {
     getLecture()
     }, [])


     
  return (
    <div className='font-josefins bg-[#f5f5f5]'>

    <Router>
            <Navbar/>
       
         <Routes>

            {/* Client */}
            <Route path = "/" exact element= {<Homepage Lecture={Lecture} loading={loading}/>}></Route>
               <Route path = "/contact" exact element= {<Contact/>}></Route>
         </Routes>
       <Footer/>
         </Router> 

         
      </div>
  )
}

export default App