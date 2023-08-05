

import {React,useEffect,} from "react";



import AOS from "aos";
import "aos/dist/aos.css";
import {Link, useLocation} from "react-router-dom"
import {ThreeDots} from "react-loader-spinner"





function ViewCrp511 (props) {


    const location = useLocation()
     const data = location.state
     
    console.log(props.LectureList1)
                
    const ArrayList = props.LectureListCRP511      


     console.log(data)

           

       


             
    useEffect(()=> {
                     AOS.init({duration:2000})

                },[])

       return (
               < >
           <div className="bg-[#f5f5f5] w-full  min-h-screen">
          <h1 className="text-center font-bold text-white bg-gradient-to-r font-montserat from-indigo-800 to-cyan-600" data-aos="fade-left"> {data.CourseTitle}  {data.CourseCode}</h1>

           {/* show loader */}
             {console.log(props)}
           {props.loading ?<div></div>:<div className="flex min-h-screen justify-center items-center font-montserat text-xl font-bold">loading<ThreeDots height="80" width="80" radius="9" color="blue" ariaLabel="loading"/></div>}
          { ArrayList.length === 0 ? 
          <div className={`min-h-screen text-indigo-800 flex ${props.loading ? "block" : "hidden"} font-montserat justify-center items-center`}> No Lecture Available</div>  :
                  ArrayList.map((info,i) => (
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
                
              </>
              );
                   }

     export default ViewCrp511;
