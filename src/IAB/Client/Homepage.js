import React, { useEffect, useState } from 'react'

import AOS from "aos";
import "aos/dist/aos.css";


import axios from 'axios';
import { Bars } from 'react-loader-spinner';

function Homepage(props) {

  


    useEffect(()=> {
        AOS.init({duration:2000})
    },[])


    const LatestLecture = props.Lecture.slice(0,7)
    console.log(props)


  return (
    <div className='text-[#140a22]'>
    <h1 className='text-center font-semibold font-montserat bg-gradient-to-r  from-[#f9f295]  to-[#e0aa3e] mt-2 py-[2px]'>Al-Qurraa' Schools, Ibadan.</h1>
       <h1 className='text-center font-bold text-xl font-josefins pt-4 pb-3'>Daily Reminder</h1>


       {props.loading ? <div></div>:<div className="flex min-h-screen justify-center items-center text-xl font-bold"><Bars height="100" width="85" radius="10" color="#140a22" ariaLabel="loading"/></div>}
  
      
        
        
       
       { LatestLecture.map((info,i) => (
             LatestLecture.length === 0 ? 
               <div className={`min-h-screen  flex ${props.loading ? "block" : "hidden"} font-montserat font-bold text-2xl  justify-center items-center`}> Oops!!! There is No Lecture Available.</div>  :
            
               <div  key={i} className="flex items-center justify-center">
               <div  className="flex  bg-gradient-to-b  from-[#f3e1c1] to-[#fefbe9] flex-col rounded-lg items-center justify-center w-[300px] md:w-[350px]  shadow-2xl my-8 " data-aos="zoom-in">

               <img src={info.Image[0].url}
                alt={info.Title} className='rounded-lg object-fit h-[350px] shadow-2xl w-[300px] md:w-[350px] md:h-[400px]' />
               <h1 className="text-[15px] font-bold px-4 pt-3 pb-0 ">  {info.Title} </h1>
               <h1 className="text-[14px] font-medium pt-2 px-4 pb-1">  {info.Description} </h1>

                 <h3 className='text-[10px] px-4 pb-1 pt-2 font-semibold'>Posted : {info.date}</h3>
          
               </div>
           </div>

        ))
        
      }
    
     
       
    </div>
  )
}

export default Homepage
