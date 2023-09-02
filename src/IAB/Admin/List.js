import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Link, Navigate} from "react-router-dom";
import { useNavigate } from 'react-router-dom';


function List (props) {

    const navigate = useNavigate();

 
 const deleteUser = async (id) => {
  // i want to do yes or no alert here
  alert("This Reminder will be deleted")
  try{
    await axios.delete(`https://naughty-wasp-umbrella.cyclic.app/api/mssnoau/iab/${id}`);
    alert("Data deleted.")
    navigate("/");
      }catch (err) 
  {
  console.log(err);
  alert("Unable to delete, Kindly refresh this page")
   }
}


  return (
    <div className='min-h-[900px] text-[#140a22]' >
    <h1 className='text-center font-semibold font-montserat bg-gradient-to-r  from-[#f9f295]  to-[#e0aa3e] mt-2 py-[2px]'>Al-Qurraa' Schools, Ibadan.</h1>
     {
           props.Lecture.map((info,i) => (
                            
                          <div  key={i} className="flex items-center justify-center">
                            <div  className="flex  bg-gradient-to-b  from-[#f3e1c1] to-[#fefbe9] flex-col rounded-lg items-center justify-center w-[350px] md:w-[400px]  shadow-2xl my-8 ">

                            <img src={info.Image[0].url}
                             alt={info.Title} className='rounded-lg object-cover  w-[350px] md:w-[400px]' />
                            <h1 className="text-2xl font-bold px-4 pt-1 pb-0 mt-1">  {info.Title} </h1>
                              
                        <div className="flex px-8  pb-2 text-[#140a22] font-semibold w-full items-center justify-end">
                              <button onClick={()=>deleteUser(info._id)}
                              className="bg-[#f32013] text-base sm:text-xl text-white rounded-md px-2 py-1">Delete</button>
                        </div>   
                            </div>
                        </div>
                        ))
                    }

    </div>
  )
}

export default List