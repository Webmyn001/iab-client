import React, { useEffect, useState } from 'react'

import AOS from "aos";
import "aos/dist/aos.css";
import axios from 'axios';
import { Bars } from 'react-loader-spinner';

function Homepage(props) {

  


    useEffect(()=> {
        AOS.init({duration:2000})
    },[])


    const LatestLecture = props.Lecture.slice(0,1)
    console.log(props)


  return (
    <div className='text-[#1a456e]'>
    <h1 className='text-center font-semibold font-montserat bg-gradient-to-r text-white from-[#1a456e]  to-[#a4cb3c] mt-2 py-[2px]'>Islamic Affairs Board (mssnoau)</h1>
       <h1 className='text-center font-bold text-xl font-josefins pt-4 '>Daily Reminder</h1>


       {props.loading ? <div></div>:<div className="flex min-h-screen justify-center items-center text-xl font-bold"><Bars height="100" width="85" radius="10" color="#1a456e" ariaLabel="loading"/></div>}
  
      
        
        
       
       { LatestLecture.map((info,i) => (
             LatestLecture.length === 0 ? 
               <div className={`min-h-screen  flex ${props.loading ? "block" : "hidden"} font-montserat text-xl font-semibold justify-center items-center`}> Oops!!! There is No Lecture Available.</div>  :

          <div className='min-h-screen flex flex-col  gap-2 justify-center items-center' key={i}>
         <div className='flex flex-col justify-start w-full p-4 sm:justify-center sm:items-center'>
          <h3 className='text-[15px] sm:text-base '>Uploaded : {info.date}</h3>
        </div>

                <img src={info.Image[0].url} alt={info.Title} className="rounded-xl shadow-2xl  w-[350px] h-[410px] sm:w-[400px] sm:h-[450px] object-cover" data-aos="zoom-in"/>

                <h1 className='p-3 text-xl  font-bold pt-10'>{info.Title}</h1>
                <h1 className='p-3 font-medium'>{info.Content1}</h1>
                <h1 className='p-3 font-meduim'>{info.Content2}</h1>
                <h1 className='p-3 font-meduim'>{info.Conclusion}</h1>
        
       </div>

        ))
        
      }
    
     
       
    </div>
  )
}

export default Homepage