import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router ,Route, Routes, } from "react-router-dom"

import Navbar from './IAB/Admin/header/Navbar'
import Footer from './IAB/Admin/Footer/Footer'
import Homepage from './IAB/Admin/Homepage'
import axios from 'axios'
import List from './IAB/Admin/List'


function App() {
  const [Lecture, setLecture] =useState([])
  const [Loading , setLoading] = useState(false)

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

           {/* Admin */}
           
               <Route path = "/" exact element= {<Homepage />}></Route>
               <Route path = "/list" exact element= {<List Lecture={Lecture} Loading={Loading} getLecture={getLecture} />}></Route>

                   
                   {/* List to delete */}

         </Routes>
       <Footer/>
         </Router> 

         
      </div>
  )
}

export default App