import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router ,Route, Routes, } from "react-router-dom"

               // Header
import Navbar from './Client/Header/Navbar'
               //  Homepage
import Home from './Client/HomePage/Home'
               // View Lecture
import ViewHome from './Client/ViewLecture/VeiwHome'
import ViewCrp304 from './Client/ViewLecture/ViewCrp304'
import ViewCrp305 from './Client/ViewLecture/ViewCrp305'
import ViewCrp405 from './Client/ViewLecture/ViewCrp405'
import ViewCrp511 from './Client/ViewLecture/ViewCrp511'
import ViewCrp512 from './Client/ViewLecture/ViewCrp512'
import ViewCpt503 from './Client/ViewLecture/ViewCpt503'
import LectureDetails from './Client/ViewLecture/LectureDetails'
                //  Contact
import Contact from './Client/Contact/Contact'
                 // Footer
import Footer from './Client/Footer/Footer'
                // Axios
import axios from 'axios'


function App() {

     const [LectureListCPT503, setLectureListCPT503] =useState([])
     const [LectureListCRP305, setLectureListCRP305] =useState([])
     const [LectureListCRP512, setLectureListCRP512] =useState([])
     const [LectureListCRP511, setLectureListCRP511] =useState([])
     const [LectureListCRP405, setLectureListCRP405] =useState([])
     const [LectureListCRP304, setLectureListCRP304] =useState([])
     
     const [loading, setloading] =useState(false)

     const getLectureCPT503 = async  () => {
      axios.get("https://defiant-lime-tweed-jacket.cyclic.app/api/cpt503/")
      .then(res => {
        console.log(res.data)
        setLectureListCPT503(res.data)
        setloading(true)
      }).catch(err => {
        console.log(err)
      })
     }
       
     const getLectureCRP511 = async  () => {
      axios.get("https://defiant-lime-tweed-jacket.cyclic.app/api/crp511/")
      .then(res => {
        console.log(res.data)
        setLectureListCRP511(res.data)
        setloading(true)
      }).catch(err => {
        console.log(err)
      })
     }

     const getLectureCRP512 = async  () => {
      axios.get("https://defiant-lime-tweed-jacket.cyclic.app/api/crp512/")
      .then(res => {
        console.log(res.data)
        setLectureListCRP512(res.data)
        setloading(true)
      }).catch(err => {
        console.log(err)
      })
     }

     const getLectureCRP405 = async  () => {
      axios.get("https://defiant-lime-tweed-jacket.cyclic.app/api/crp405/")
      .then(res => {
        console.log(res.data)
        setLectureListCRP405(res.data)
        setloading(true)
      }).catch(err => {
        console.log(err)
      })
     }

     const getLectureCRP304 = async  () => {
      axios.get("https://defiant-lime-tweed-jacket.cyclic.app/api/crp304/")
      .then(res => {
        console.log(res.data)
        setLectureListCRP304(res.data)
        setloading(true)
      }).catch(err => {
        console.log(err)
      })
     }

     const getLectureCRP305 = async  () => {
      axios.get("https://defiant-lime-tweed-jacket.cyclic.app/api/crp305/")
      .then(res => {
        console.log(res.data)
        setLectureListCRP305(res.data)
        setloading(true)
      }).catch(err => {
        console.log(err)
      })
     }


   useEffect(() => {
        getLectureCPT503()
        getLectureCRP304()
        getLectureCRP305()
        getLectureCRP405()
        getLectureCRP511()
        getLectureCRP512()
        }, [])


  return (
    <div>

    <Router>
            <Navbar/>
         <Routes>
                                {/* Home Route */}
               <Route path = "/" exact element= {<Home/>}></Route>

                                {/* View lecture Routes */}
               <Route path = "/view" exact element= {<ViewHome/>}></Route>
               <Route path = "view/view-304" exact element= {<ViewCrp304 LectureListCRP304={LectureListCRP304} loading={loading}/> }></Route>
               <Route path = "view/view-305" exact element= {<ViewCrp305 LectureListCRP305={LectureListCRP305} loading={loading}/>}></Route>
               <Route path = "view/view-405" exact element= {<ViewCrp405 LectureListCRP405={LectureListCRP405} loading={loading}/>}></Route>
               <Route path = "view/view-511" exact element= {<ViewCrp511 LectureListCRP511={LectureListCRP511} loading={loading}/>}></Route>
               <Route path = "view/view-512" exact element= {<ViewCrp512 LectureListCRP512={LectureListCRP512} loading={loading}/>}></Route>
               <Route path = "view/view-503" exact element= {<ViewCpt503 LectureListCPT503={LectureListCPT503} loading={loading}/>}></Route>
               <Route path = "/lecturedetails/:id" exact element= {<LectureDetails/>}></Route>
                                   
                                     {/* Contact Route */}
               <Route path = "/contact" exact element= {<Contact/>}></Route>
         </Routes>
       <Footer/>
         </Router> 

         
      </div>
  )
}

export default App