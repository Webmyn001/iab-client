import React from 'react'
import {BrowserRouter as Router , Route, Routes, } from "react-router-dom";
import Footer from './Ajadi/Admin/Footer/Footer'
import Navbar from './Ajadi/Admin/header/Navbar'
import Admin from './Ajadi/Admin/Admin';
import Details from './Ajadi/Admin/Details';
import IDcardAdmin from './Ajadi/Admin/IDcardAdmin';




function App() {

 
  return (
    <div className='font-josefins bg-[#f5f5f5]'>
       <Router>
            <Navbar/>
       
         <Routes>
               {/* Admin */}
               <Route path = "/" exact element= {<Admin/>}></Route>
               <Route path = "/details/:id" exact element= {<Details/>}></Route>

               <Route path = "/Idcard/:id" exact element= {<IDcardAdmin />}></Route>







               
         </Routes>
       <Footer/>
         </Router> 

    </div>
  )
}

export default App