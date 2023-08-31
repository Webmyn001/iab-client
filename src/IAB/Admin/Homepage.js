import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import { Oval } from 'react-loader-spinner'

function Homepage() {

    const navigate = useNavigate();

     const [Title, setTitle] = useState("")
     const [Content1, setContent1] = useState("")
     const [Content2, setContent2] = useState("")
     const [Conclusion, setConclusion] = useState("")
     const [Image, setImage] = useState("")
     const [date, setDate] = useState("")
     const [Loading , setLoading] = useState(false)

     const saveForm = async (e) => {
        setLoading(true)
      e.preventDefault();
       
       axios.post("https://red-muddy-gecko.cyclic.app/api/mssnoau/iab/add", {Title,date,Content1,Content2,Conclusion,Image})
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

    const OnchangeContent1 =(e)=> {
      setContent1(e.target.value)
    }

    const OnchangeContent2 =(e)=> {
        setContent2(e.target.value)
      }

      const OnchangeConclusion =(e)=> {
        setConclusion(e.target.value)
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
    <div className='min-h-[900px] text-[#1a456e]'>
    <h1 className='text-center font-semibold font-montserat bg-gradient-to-r text-white from-[#1a456e]  to-[#a4cb3c] mt-2 py-[2px]'>Islamic Affairs Board (mssnoau)</h1>
    <h1 className='text-center font-bold text-xl font-josefins pt-4 '>Admin Page</h1>

<div className='flex justify-center h-[700px] items-center '>
    <div className="flex flex-col shadow-lg w-[320px] h-fit border-2 border-[#1a456e] bg-white items-center rounded-[32px]">

    <form className='w-[280px] mt-[30.5px]' onSubmit={saveForm} encType="multipart/form-data">
    <h1 className='font-bold text-[17px] text-center pb-[30px]'> Upload New Reminder</h1>

    <input placeholder='Topic or Title'  value={Title} onChange={OnchangeTitle} 
      className='w-full border-b-[1px] shadow-md rounded-md focus:outline-0 text-[14px] pb-[3.5px] pl-3 border-[#1a456e] mb-4 text-[#1a456e] '/>

    <textarea placeholder='First Content'  value={Content1} onChange={OnchangeContent1}
      className='w-full border-b-[1px] shadow-md h-[70px] rounded-md focus:outline-0 text-[14px] pb-[3.5px] pl-3  border-[#1a456e] text-[#1a456e] mt-[30px]'/>

    <textarea placeholder='Second Content'  value={Content2} onChange={OnchangeContent2}
      className='w-full border-b-[1px] shadow-md h-[70px] rounded-md focus:outline-0 text-[14px] pb-[3.5px] pl-3 border-[#1a456e] text-[#1a456e] mt-[24px]'/>

    <textarea placeholder='Conclusion'  value={Conclusion} onChange={OnchangeConclusion}
      className='w-full border-b-[1px] shadow-md h-[70px] rounded-md focus:outline-0 text-[14px] pb-[3.5px] pl-3 border-[#1a456e] text-[#1a456e] mt-[24px]'/>


    <h3 className='text-xs pt-5 text-[#1a456e] text-center'>kindly upload document only below (Max 5mb)</h3>
   <input  type="file"  name='document' onChange={Onchangeimages}
      className='w-full border-b-[1px] shadow-md focus:outline-0 text-[14px] rounded-md pb-[3.5px] pl-3  border-[#1a456e]  mt-[12px]' />


     {/* Upload button */}
     <div className='flex justify-center items-center mb-2'>
        {Loading ? <div className='pt-5 pb-2'><Oval height="30" width="30" radius="4" color="#1a456e" ariaLabel="loading"/> </div> : <Button name="Submit"/>}
     </div>
  </form>
    </div>
</div>
 
    </div>
  )
}

export default Homepage