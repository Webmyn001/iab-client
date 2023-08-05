

import {React,useEffect, } from "react";
import {Link} from "react-router-dom";
import image1 from "../Images/Pathology.jpg"
import image2 from "../Images/large-scale1.jpeg"
import image3 from "../Images/SoilBorne.jpg"
import image4 from "../Images/disease control.jpg"
import image5 from "../Images/Microorganism.jpeg"
import image6 from "../Images/Nematology.jpeg"



import AOS from "aos";
import "aos/dist/aos.css";





function ViewHome (props) {

    
  
    const ViewList = [
        {
            CourseTitle : "Plant Pathology ",
            CourseCode: "CRP 304",
            Link : "View-304",
            image  : image1,
            code: "crp304"
           
        },
        {
            CourseTitle : "Crop Protection and Disease Control",
            CourseCode: "CRP 405",
            Link : "View-405",
            image  : image2,
            code: "crp405"
        },
        {
            CourseTitle : "Soil Borne and Root Diseases ",
            CourseCode: "CRP 511",
            Link : "View-511",
            image  : image3,
            code: "crp511"
        },
        {
            CourseTitle : " Plant Disease Control",
            CourseCode: "CRP 512",
            Link : "View-512",
            image  : image4,
            code: "crp512"
        },
        {
            CourseTitle : "Pests and Microorganisms in Agriculture",
            CourseCode: "CRP 305",
            Link : "View-305",
            image  : image5,
            code: "crp305"
        },
        {
            CourseTitle : "Principles of Nematology",
            CourseCode: "CPT 503",
            Link : "View-503",
            image  : image6,
            code: "cpt503"
        },
       ]
    useEffect(()=> {
                     AOS.init({duration:2000})

                },[])

       return (
               < >
          <div className="bg-[#f5f5f5] w-full min-h-screen">
          <h1 className="text-center font-bold font-montserat text-white bg-gradient-to-r from-indigo-800 to-cyan-600 " data-aos="fade-left"> View Lectures</h1>
                    {
                        ViewList.map((info,i) => (
                            
                          <div  key={i} className="flex items-center font-josefins justify-center " data-aos="zoom-in">
                            <div>
                            <button  className="flex flex-col  rounded-lg hover:border-[2px]  duration-500 hover:border-indigo-800 
                             hover:bg-indigo-800 items-center text-indigo-800 hover:text-white hover:drop-shadow-[0px_9px_4px_rgba(23,255,120,0.3)] 
                              w-[300px] md:w-[400px] h-[400px] sm:h-[500px] shadow-2xl  my-8 ">
                        <Link  to={ {pathname:`/view/${info.Link}`}}  state={info}>
                                <img src={info.image} alt="Sorry! Not Found" className={`"rounded-lg 
                              text-2xl h-[300px] shadow-sm  ${info.image_url=== null? "hidden" : "block" } 
                              sm:w-[400px] md:w-[500px] sm:h-[400px] object-cover w-[200px]"`}/>

                              <div className="  hover:text-white w-full  ">
                                <h1 className=" font-bold  text-center pt-1  mt-2">  {info.CourseTitle} </h1>
                               <h1 className="text-xl font-bold text-center pt-2  ">  {info.CourseCode} </h1>
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

     export default ViewHome;
