import React, { useEffect } from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import {Link} from "react-router-dom";






import AOS from "aos";
import "aos/dist/aos.css";
import {TailSpin} from 'react-loader-spinner'


function Home(props) {

  useEffect(()=> {
    AOS.init({duration:2000})

},[])

    
    // to get latest lecture uploaded, first 3 lecture uploaded
   const LatestListCPT503 = props.LectureListCPT503.slice(0,3)
   const LatestListCRP304 = props.LectureListCRP304.slice(0,3)
   const LatestListCRP305 = props.LectureListCRP305.slice(0,3)
   const LatestListCRP405 = props.LectureListCRP405.slice(0,3)
   const LatestListCRP511 = props.LectureListCRP511.slice(0,3)
   const LatestListCRP512 = props.LectureListCRP512.slice(0,3)


    


  return (
    <div className='bg-[#f5f5f5] w-full min-h-screen'>
   <h1 className='text-center font-semibold font-montserat bg-gradient-to-r text-white from-indigo-800 to-cyan-600 pt-[8px]'>Admin Page</h1> 
   <h1 className=' pt-3 px-4 sm:pl-9 font-normal font-jost text-indigo-800'><span className='flex items-center justify-start gap-x-1 ' ><AiFillPlusCircle/>Recent Lectures Uploaded</span></h1>

                                                {/*Plant Pathology (CRP 304)*/}
   <h1 className='text-center font-bold text-white font-montserat bg-gradient-to-r from-indigo-800 to-cyan-600 '> Plant Pathology (CRP 304)</h1>

   {props.loading ? <div></div>:<div className="flex min-h-[400px] justify-center items-center text-xl font-bold"><TailSpin height="80" width="80" radius="9" color="blue" ariaLabel="loading"/></div>}
          { LatestListCRP304.length === 0 ? 
          <div className={`min-h-[400px] text-indigo-800 flex ${props.loading ? "block" : "hidden"} font-montserat justify-center items-center`}>No Lecture Available</div>  :
                  LatestListCRP304.map((info,i) => (
                         <div  key={i} className={`flex items-center ${props.loading ? "block" : "hidden"} font-josefins justify-center `} data-aos="zoom-in">
                            <div>
                            <button  className="flex flex-col  rounded-lg hover:border-[2px] transition-all duration-300  border-indigo-800 
                              items-center text-indigo-800 
                             justify-center w-[300px] md:w-[400px] h-fit  shadow-2xl  my-8 ">
                        <Link  to={ {pathname:`/lecturedetails/${info._id}`}}  state={info}>
                              
                              <div className=" ">
                                <h1 className=" font-bold  text-center pt-1 mt-2">  {info.CourseTitle} </h1>
                               <h1 className="text-xl font-bold text-center p-2  ">  {info.CourseCode} </h1>
                              </div>
       <div className='text-center'>
                <h1 className=' text-[15px] font-bold px-2 text-indigo-700 '>{info.Topic}  </h1>
                <h3 className=' pb-3 pt-2'>View</h3>
        </div>                 
               


                         </Link>
                            </button>
                            </div>
                        </div>
                        ))
                    }


                             {/* Crop Protection and Disease Control (CRP 405)*/}
 <h1 className='text-center font-bold text-white bg-gradient-to-r font-montserat from-indigo-800 to-cyan-600 '> Crop Protection and Disease Control (CRP 405)</h1>
            
 {props.loading ?<div></div>:<div className="flex min-h-[400px] justify-center items-center text-xl font-bold"><TailSpin height="80" width="80" radius="9" color="blue" ariaLabel="loading"/></div>}
          { LatestListCRP405.length === 0 ? 
          <div className={`min-h-[400px] text-indigo-800 flex ${props.loading ? "block" : "hidden"} font-montserat justify-center items-center`}> No Lecture Available</div>  :
                  LatestListCRP405.map((info,i) => (
                         <div  key={i} className={`flex items-center ${props.loading ? "block" : "hidden"}  font-josefins justify-center `} data-aos="zoom-in">
                            <div>
                            <button  className="flex flex-col  rounded-lg hover:border-[2px] transition-all duration-300  border-indigo-800 
                              items-center text-indigo-800 
                             justify-center w-[300px] md:w-[400px] h-fit  shadow-2xl  my-8 ">
                        <Link  to={ {pathname:`/lecturedetails/${info._id}`}}  state={info}>
                              
                              <div className=" ">
                                <h1 className=" font-bold  text-center pt-1 mt-2">  {info.CourseTitle} </h1>
                               <h1 className="text-xl font-bold text-center p-2  ">  {info.CourseCode} </h1>
                              </div>
       <div className='text-center'>
                <h1 className=' text-[15px] font-bold px-2 text-indigo-700 '>{info.Topic}  </h1>
                <h3 className=' pb-3 pt-2'>View</h3>
        </div>                 
               


                         </Link>
                            </button>
                            </div>
                        </div>
                        ))
                    }


                             {/* Soil Borne and Root Diseases (CRP 511)*/}
    <h1 className='text-center font-bold text-white bg-gradient-to-r font-montserat from-indigo-800 to-cyan-600 '>Soil Borne and Root Diseases (CRP 511)</h1>
             
    {props.loading ?<div></div>:<div className="flex min-h-[400px] justify-center items-center text-xl font-bold"><TailSpin height="80" width="80" radius="9" color="blue" ariaLabel="loading"/></div>}
          { LatestListCRP511.length === 0 ? 
          <div className={`min-h-[400px] text-indigo-800 flex ${props.loading ? "block" : "hidden"} font-montserat justify-center items-center`}> No Lecture Available</div>  :
                  LatestListCRP511.map((info,i) => (
                         <div  key={i} className={`flex items-center ${props.loading ? "block" : "hidden"} font-josefins justify-center `} data-aos="zoom-in">
                            <div>
                            <button  className="flex flex-col  rounded-lg hover:border-[2px] transition-all duration-300  border-indigo-800 
                              items-center text-indigo-800 
                             justify-cente w-[300px] md:w-[400px] h-fit  shadow-2xl  my-8 ">
                        <Link  to={ {pathname:`/lecturedetails/${info._id}`}}  state={info}>
                              
                              <div className=" ">
                                <h1 className=" font-bold  text-center pt-1 mt-2">  {info.CourseTitle} </h1>
                               <h1 className="text-xl font-bold text-center p-2  ">  {info.CourseCode} </h1>
                              </div>
       <div className='text-center'>
                <h1 className=' text-[15px] font-bold px-2 text-indigo-700 '>{info.Topic}  </h1>
                <h3 className=' pb-3 pt-2'>View</h3>
        </div>                 
               


                         </Link>
                            </button>
                            </div>
                        </div>
                        ))
                    }  
                    
                    
                     {/* CRP 512*/}
  <h1 className='text-center font-bold text-white bg-gradient-to-r font-montserat from-indigo-800 to-cyan-600 '> Plant Disease Control  (CRP512)</h1>
           
  {props.loading ?<div></div>:<div className="flex min-h-[400px] justify-center items-center text-xl font-bold"><TailSpin height="80" width="80" radius="9" color="blue" ariaLabel="loading"/></div>}
          { LatestListCRP512.length === 0 ? 
          <div className={`min-h-[400px] text-indigo-800 flex ${props.loading ? "block" : "hidden"} font-montserat justify-center items-center`}> No Lecture Available</div>  :
                  LatestListCRP512.map((info,i) => (
                         <div  key={i} className={`flex items-center ${props.loading ? "block" : "hidden"} font-josefins  justify-center `} data-aos="zoom-in">
                            <div>
                            <button  className="flex flex-col  rounded-lg hover:border-[2px] transition-all duration-300  border-indigo-800 
                              items-center text-indigo-800 
                             justify-cente w-[300px] md:w-[400px] h-fit  shadow-2xl  my-8 ">
                        <Link  to={ {pathname:`/lecturedetails/${info._id}`}}  state={info}>
                              
                              <div className=" ">
                                <h1 className=" font-bold  text-center pt-1 mt-2">  {info.CourseTitle} </h1>
                               <h1 className="text-xl font-bold text-center p-2  ">  {info.CourseCode} </h1>
                              </div>
       <div className='text-center'>
                <h1 className=' text-[15px] font-bold px-2 text-indigo-700 '>{info.Topic}  </h1>
                <h3 className=' pb-3 pt-2'>View</h3>
        </div>                 
               


                         </Link>
                            </button>
                            </div>
                        </div>
                        ))
                    }  
                    
                             {/* Pests and Microorganisms in Agriculture  (CRP305)*/}
<h1 className='text-center font-bold text-white bg-gradient-to-r font-montserat from-indigo-800 to-cyan-600 '>Pests and Microorganisms in Agriculture  (CRP305)</h1>
            
{props.loading ?<div></div>:<div className="flex min-h-[400px] justify-center items-center text-xl font-bold"><TailSpin height="80" width="80" radius="9" color="blue" ariaLabel="loading"/></div>}
          { LatestListCRP305.length === 0 ? 
          <div className={`min-h-[400px] text-indigo-800 flex ${props.loading ? "block" : "hidden"} font-montserat justify-center items-center`}> No Lecture Available</div>  :
                  LatestListCRP305.map((info,i) => (
                         <div  key={i} className={`flex items-center ${props.loading ? "block" : "hidden"}  font-josefins justify-center `} data-aos="zoom-in">
                            <div>
                            <button  className="flex flex-col  rounded-lg hover:border-[2px] transition-all duration-300  border-indigo-800 
                              items-center text-indigo-800 
                             justify-cente w-[300px] md:w-[400px] h-fit  shadow-2xl  my-8 ">
                        <Link  to={ {pathname:`/lecturedetails/${info._id}`}}  state={info}>
                              
                              <div className=" ">
                                <h1 className=" font-bold  text-center pt-1 mt-2">  {info.CourseTitle} </h1>
                               <h1 className="text-xl font-bold text-center p-2  ">  {info.CourseCode} </h1>
                              </div>
       <div className='text-center'>
                <h1 className=' text-[15px] font-bold px-2 text-indigo-700 '>{info.Topic}  </h1>
                <h3 className=' pb-3 pt-2'>View</h3>
        </div>                 
               


                         </Link>
                            </button>
                            </div>
                        </div>
                        ))
                    }  
                             {/* CPT 503*/}
  <h1 className='text-center font-bold bg-gradient-to-r font-montserat text-white from-indigo-800 to-cyan-600 '>Principles of Nematology (CPT503)</h1>
            
  {props.loading ?<div></div>:<div className="flex min-h-[400px] justify-center items-center text-xl font-bold"><TailSpin height="80" width="80" radius="9" color="blue" ariaLabel="loading"/></div>}
          { LatestListCPT503.length === 0 ? 
          <div className={`min-h-[400px] text-indigo-800 flex ${props.loading ? "block" : "hidden"} font-montserat justify-center items-center`}> No Lecture Available</div>  :
                  LatestListCPT503.map((info,i) => (
                         <div  key={i} className={`flex items-center ${props.loading ? "block" : "hidden"} font-josefins justify-center `} data-aos="zoom-in">
                            <div>
                            <button  className="flex flex-col  rounded-lg hover:border-[2px] transition-all duration-300  border-indigo-800 
                              items-center text-indigo-800 
                             justify-cente w-[300px] md:w-[400px] h-fit  shadow-2xl  my-8 ">
                        <Link  to={ {pathname:`/lecturedetails/${info._id}`}}  state={info}>
                              
                              <div className=" ">
                                <h1 className=" font-bold  text-center pt-1 mt-2">  {info.CourseTitle} </h1>
                               <h1 className="text-xl font-bold text-center p-2  ">  {info.CourseCode} </h1>
                              </div>
       <div className='text-center'>
                <h1 className=' text-[15px] font-bold px-2 text-indigo-700 '>{info.Topic}  </h1>
                <h3 className=' pb-3 pt-2'>View</h3>
        </div>                 
               


                         </Link>
                            </button>
                            </div>
                        </div>
                        ))
                    }  
</div>
)
}

export default Home