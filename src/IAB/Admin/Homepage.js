import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import { Oval } from 'react-loader-spinner'


function Homepage() {

    const navigate = useNavigate();

     const [Title, setTitle] = useState("")
     const [Description, setDescription] = useState("")
     const [Image, setImage] = useState("")
     const [date, setDate] = useState("")
     const [Loading , setLoading] = useState(false)

     const saveForm = async (e) => {
        setLoading(true)
      e.preventDefault();
       
       axios.post("https://naughty-wasp-umbrella.cyclic.app/api/mssnoau/iab/add", {Title,date,Description,Image})
      .then((res)=>
      { 
      console.log("saved succesfully")
      navigate("/");
      window.location.reload() 

      alert("Uploaded succesfully!!")
    }).catch((err)=> {
        console.log(err)
        alert("Unable to submit form, this may be due to Network issues. Ensure you are connected to the Internet.")
        setLoading(false)
      })
      
      
    }
    

    const Onchangeimages = async (e) => { 
      const files = Array.from(e.target.files)
      console.log(e.target.files.length)  
    if (e.target.files.length < 1 ) {
     setImage(null)
      alert("please select only 1 images")
      }else{
           setImage([]);
           files.forEach(file => {
    
               const reader = new FileReader();
    
               reader.onload = () => {
                   if (reader.readyState === 2) {
                       setImage(oldArray => [...oldArray, reader.result]);
                       
                   }
               }
    
               reader.readAsDataURL(file)
    
           })
      }
    }

    const OnchangeTitle =(e)=> {
      setTitle(e.target.value)
    }

   

      const OnchangeDescription =(e)=> {
        setDescription(e.target.value)
      }



      useEffect(()=> {
        const today = new Date()
          const f = new Intl.DateTimeFormat("en-us", {
            dateStyle:"full",
            timeStyle: "short"
            
          })
          setDate(f.format(today))
       }, [saveForm])



  return (
    <div className=' text-[#140a22]'>
    <h1 className='text-center font-semibold font-montserat bg-gradient-to-r  from-[#f9f295]  to-[#e0aa3e] mt-1 py-[3px]'>Al-Qurraa' Schools, Ibadan.  (Admin Page)</h1>

<div className='flex justify-center min-h-screen  items-center '>
    <div className="flex flex-col shadow-lg w-[320px] h-fit border-2 border-[#140a22] bg-white items-center rounded-[32px]">

    <form className='w-[280px] mt-[30.5px]' onSubmit={saveForm} encType="multipart/form-data">
    <h1 className='font-bold text-[18px] text-center pb-[30px]'> Upload New Reminder</h1>

    <input placeholder='Topic or Title'  value={Title} onChange={OnchangeTitle} 
      className='w-full border-b-[1px] shadow-md rounded-md focus:outline-0 text-[14px] pb-[3.5px] pl-3 border-[#140a22] mb-4 text-[#140a22] '/>

    <textarea placeholder='Description ...'  value={Description} onChange={OnchangeDescription}
      className='w-full border-b-[1px] shadow-md h-[70px] rounded-md focus:outline-0 text-[14px] pb-[3.5px] pl-3 border-[#140a22] text-[#140a22] mt-[24px]'/>


    <h3 className='text-xs pt-5 text-[#140a22] text-center'>kindly upload Document only below (Max 5mb)</h3>
   <input  type="file"  name='document' onChange={Onchangeimages}
      className='w-full border-b-[1px] shadow-md focus:outline-0 text-[14px] rounded-md pb-[3.5px] pl-3  border-[#140a22]  mt-[12px]' required />


     {/* Upload button */}
     <div className='flex justify-center items-center mb-2'>
        {Loading ? <div className='pt-5 pb-2'><Oval height="30" width="30" radius="4" color="#140a22" ariaLabel="loading"/> </div> : <Button name="Upload"/>}
     </div>
  </form>
    </div>
</div>
 
    </div>
  )
}

export default Homepage