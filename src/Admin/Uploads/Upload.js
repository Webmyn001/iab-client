

import {React,useEffect} from "react";
import {Link} from "react-router-dom";
import image1 from "../Images/Pathology.jpg"
import image2 from "../Images/large-scale1.jpeg"
import image3 from "../Images/SoilBorne.jpg"
import image4 from "../Images/disease control.jpg"
import image5 from "../Images/Microorganism.jpeg"
import image6 from "../Images/Nematology.jpeg"


import AOS from "aos";
import "aos/dist/aos.css";





function Upload (props) {

    
  
    const UploadList = [
        {
            CourseTitle : "Plant Pathology ",
            CourseCode: "CRP 304",
            Link : "Upload-304",
            image  : image1,
            Topic : " Demand and supply-1",
            Description : "Headings must have content and the content must be accessible by a screen reader",
        },
        {
            CourseTitle : "Crop Protection and Disease Control",
            CourseCode: "CRP 405",
            Link : "Upload-405",
            image  : image2,
            Topic : " Demand and supply-2",
            Description : "Headings must have content and the content must be accessible by a screen reader",
        },
        {
            CourseTitle : "Soil Borne and Root Diseases ",
            CourseCode: "CRP 511",
            Link : "Upload-511",
            image  : image3,
            Topic : " Demand and supply-3",
            Description : "Headings must have content and the content must be accessible by a screen reader",
        },
        {
            CourseTitle : " Plant Disease Control",
            CourseCode: "CRP 512",
            Link : "Upload-512",
            image  : image4,
            Topic : " Demand and supply-4",
            Description : "Headings must have content and the content must be accessible by a screen reader",
        },
        {
            CourseTitle : "Pests and Microorganisms in Agriculture",
            CourseCode: "CRP 305",
            Link : "Upload-305",
            image  : image5,
            Topic : " Demand and supply-5",
            Description : "Headings must have content and the content must be accessible by a screen reader",
        },
        {
            CourseTitle : "Principles of Nematology",
            CourseCode: "CPT 503",
            Link : "Upload-503",
            image  : image6,
            Topic : " Demand and supply-6",
            Description : "Headings must have content and the content must be accessible by a screen reader",
        },
       ]
    useEffect(()=> {
                     AOS.init({duration:2000})

                },[])

       return (
               < >
          <div className="bg-[#f5f5f5] w-full min-h-screen">
          <h1 className=" text-center font-bold w-full pb-1 font-montserat text-white bg-gradient-to-r from-indigo-800 to-cyan-600 pt-1 px-2  sm:text-xl" data-aos="fade-left"> Kindly select any of the courses below to upload new lecture.</h1>
                    {
                        UploadList.map((info,i) => (
                            
                          <div  key={i} className="flex items-center font-josefins justify-center " data-aos="zoom-in">
                            <div>
                            <button  className="flex flex-col focus:outline-0 rounded-lg hover:border-[2px]  duration-500 hover:border-indigo-800 
                             hover:bg-indigo-800 text-indigo-800 items-center hover:text-white hover:drop-shadow-[0px_9px_4px_rgba(23,255,120,0.3)] 
                              w-[300px] md:w-[400px] h-[400px] sm:h-[500px] shadow-2xl  my-8 ">
                        <Link  to={ {pathname:`/upload/${info.Link}`}}  state={info}>
                                <img src={info.image} alt="Sorry! Not Found" className={`"rounded-lg 
                              text-2xl h-[300px] shadow-sm  ${info.image_url=== null? "hidden" : "block" } 
                              sm:w-[400px] md:w-[500px] sm:h-[400px] object-cover w-[200px]"`}/>

                              <div className="  hover:text-white w-full   ">
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

     export default Upload;
