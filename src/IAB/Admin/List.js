import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BallTriangle, MutatingDots, Rings } from 'react-loader-spinner';
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import AOS from "aos";
import "aos/dist/aos.css";

function List (props) {


 
 const deleteUser = async (id) => {

  try{
    await axios.delete(`https://naughty-wasp-umbrella.cyclic.app/api/mssnoau/iab/${id}`);
    alert("Data deleted.")
    props.getLecture()
      }catch (err) 
  {
  console.log(err);
  alert("Unable to delete, Kindly refresh this page")
   }
}

useEffect(()=> {
  AOS.init({duration:2000})
},[])

  return (
    <div className='min-h-[900px] text-[#140a22]' >
    <h1 className='text-center font-semibold font-montserat bg-gradient-to-r  from-[#f9f295]  to-[#e0aa3e] mt-1 py-[3px]'>Al-Qurraa' Schools, Ibadan.  (Admin Page)</h1>
     
    {props.Loading ? <div></div>:<div className="flex min-h-screen justify-center items-center text-xl font-bold"><Rings height="100" width="100" radius="50" color="#140a22" ariaLabel="loading"/></div>}
    
     {

      
           props.Lecture.map((info,i) => (
                            
                          <div  key={i} className="flex items-center justify-center">
                            <div  className="flex  bg-gradient-to-b  from-[#f3e1c1] to-[#fefbe9] flex-col rounded-lg items-center justify-center w-[300px] md:w-[350px]  shadow-2xl my-8 " data-aos="zoom-in">

                            <img src={info.Image[0].url}
                             alt={info.Title} className='rounded-lg object-fit h-[300px] shadow-2xl w-[300px] md:w-[350px]' />
                            <h1 className="text-[14px] font-bold px-4 pt-2 pb-0 ">  {info.Title} </h1>
                            <h1 className="text-[14px] font-bold px-4 pb-0">  {info.Description} </h1>

                              
                        <div className="flex px-8  pb-2 pt-2 text-[#140a22] font-semibold w-full items-center justify-end">
                              <button onClick={()=>deleteUser(info._id)}
                              className="bg-[#f32013] text-base sm:text-xl text-white rounded-md px-1 py-1">Delete</button>
                        </div>   
                            </div>
                        </div>
                        ))
                    }

    </div>
  )
}

export default List