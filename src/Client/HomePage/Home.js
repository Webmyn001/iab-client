import React, { useEffect } from 'react'



import DrImg from "../Images/Dr.1.jpg"
import image1 from "../Images/Pathology.jpg"
import image2 from "../Images/disease control.jpg"
import image3 from "../Images/large-scale1.jpeg"
import image4 from "../Images/Microorganism.jpeg"
import image5 from "../Images/Nematology.jpeg"
import image6 from "../Images/Roots.jpeg"



import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect"
import { Link } from 'react-router-dom';

import {Swiper, SwiperSlide} from "swiper/react"
import {Autoplay} from "swiper"
import "swiper/css"
import "swiper/css/navigation"






function Home() {

  useEffect(()=> {
    AOS.init({duration:2000})

},[])
 


 const Courses = 
      [
           {
            courseTitle : "Plant Pathology",
            Image : image1,
            Description  : "Plant pathology also known as (phytopathology) is the scientific study of diseases in plants caused by pathogens (infectious organisms) and environmental conditions (physiological factors).",
           },
            {
            courseTitle : "Pests",
            Image : image2,
            Description  : "Pests are animals that damage agricultural produce by feeding on them. Common pests of crops are insects, birds, bats, rodents, and monkeys.",
            },
            {
              courseTitle : "Commercial Farming",
              Image : image3,
              Description  : "Commercial farming is large-scale production of crops and farm animals for sale using modern technology.",
            },
           {
              courseTitle : "Microorganisms",
              Image : image4,
              Description  : "Microrganisms or microbes are organisms that are microscopic. They include bacteria, fungi, archaea or protists. Microbes may exist in its single-celled formed or as a colony of cells.  ",
            },

            {
                courseTitle : "Crop Protection",
                Image : image3,
                Description  : "Crop protection is the process/practice of protecting the crop yields from different agents including pests, plant diseases , weeds and other organisms that can cause damage to the agricultural crops.",
            },

            {
                  courseTitle : "Nematology",
                  Image : image5,
                  Description  : "Nematology is the scientific discipline concerned with the study of nematodes or roundworms.",
             },
             {
              courseTitle : "Root Vegetable",
              Image : image6,
              Description  : "Root vegetables are underground plants parts eaten by humans as food.",
             },

            {
               courseTitle : "Commercial Farming",
               Image : image3,
               Description  : "Commercial farming is large-scale production of crops and farm animals for sale using modern technology.",
            },


      ]


  return (
    <div className='bg-[#f5f5f5] text-gray-900 w-full min-h-screen '>
  
    <h1 className='text-center font-semibold font-montserat bg-gradient-to-r text-white from-indigo-800 to-cyan-600 py-[2px]'>Home Page</h1>

     {/* container */}
     <div className=' flex flex-col justify-center bg-white  items-center pt-4 md:flex-row md:justify-between md:px-9 md:py-4
      rounded-b-[50px] shadow-lg shadow-indigo-800/40'>
      {/* image */}
        <div>
          <img src={DrImg} className="rounded-full h-[300px] w-[300px] object-cover " data-aos="fade-right" alt='ef'/>
          </div>
       {/* text */}
        <div className='max-w-[300px] px-3 py-4 h-fit text-indigo-800 font-josefins sm:max-w-[500px]'>
      <h3>
          <Typewriter 
          options={{
            autoStart:true,
            loop:false,
            delay:50,
            strings:"Olufemi Sunday SOSANYA (PhD) is a Nematologist of repute. A member of NISON (Nigerian Society of Nematologists). He has been handling undergraduate and postgraduate courses in plant pathology, soil borne and root diseases , plant diseases control and crop protection in the Department of Crop Production, Olabisi Onabanjo University, College of Agricultural Sciences Ayetoro Campus, Ogun State."
          }}
          />
            
      </h3>
      <Link to="/view">
      <button className='p-[3px] mt-3 bg-indigo-800 hover:text-indigo-800 duration-300 transition-colors text-white focus:outline-0 hover:border-[0.5px] border-indigo-800 hover:bg-white  rounded-lg'>View Lecture</button>
      </Link>
        </div>
          
     </div>
     {/* recent leture uploaded */}
              <div>
                <Swiper 
                spaceBetween={10}
                centeredSlides={true}
                autoplay= {
                            {
                            delay:3000,
                            disableOnInteraction:false,
                            }
                          }
                modules={[Autoplay]}>

                     {Courses.map((course,i) => (
                      <SwiperSlide key={i} className='flex justify-center text-indigo-800 items-center font-jost font-medium  h-fit'>
                        <div className=' flex flex-col pb-3 items-center max-w-[300px] transition-all duration-300 sm:max-w-[400px] justify-center shadow-md shadow-indigo-800/40 mt-[30px] rounded-xl bg-white'>
                          <img src={course.Image} alt="em" className='w-[300px] rounded-t-xl sm:w-[400px] h-[200px] object-cover'/>
                          <h1 className='px-3 font-bold'>{course.courseTitle}</h1>
                          <h1 className='px-3'>{course.Description}</h1>
                        </div>
                      </SwiperSlide>
                     ))}
                     
                     </Swiper>
               </div>
      {/* for more info. */}
      <div className='p-4 text-center flex items-center justify-center bg-white mt-[30px] h-[50px] rounded-t-[50px] shadow-lg'>
        <div className='text-indigo-800 font-jost font-medium '>For more information, 
             <Link to="/contact">
               <button className='py-1 mb-2 focus:outline-0 px-1 hover:border-indigo-800 text-indigo-800 text-center duration-300 hover:border-[0.2px] rounded-lg bg-transparent'> 
                click here
               </button>
            </Link> 
          </div>
        </div>
              
      
    </div>
  )
}

export default Home