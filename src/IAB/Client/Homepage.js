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
               <div className={`min-h-screen  flex ${props.loading ? "block" : "hidden"} font-montserat text-xl font-semibold justify-center items-center`}> Oops!!! There is No Lecture Available.</div>  :
            
          <div  key={i}>

            <h1 className='bg-[#140a22] h-[2px]  w-full'>.</h1>
         <div className='flex flex-col justify-start w-full p-4 sm:justify-center sm:items-center'>
          <h3 className='text-xs sm:text-base font-bold '>Posted :{info.date}</h3>
        </div>

          <div className=' flex flex-col justify-center items-center'>
                <img src={info.Image[0].url} alt={info.Title} className="rounded-xl shadow-2xl  w-[300px] h-[350px] sm:w-[350px] sm:h-[400px] object-fit" data-aos="zoom-in"/>
          </div>
                <h1 className='px-3 text-xl text-center font-bold pt-5'>{info.Title}</h1>
                <h1 className='px-3  text-center pt-1 font-semibold' data-aos="fade-left">{info.Description}</h1>
               
        
       </div>

        ))
        
      }
    
     
       
    </div>
  )
}

export default Homepage