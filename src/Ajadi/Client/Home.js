import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './Button'

function Home() {

  const [Name, setName] = useState("")
  const [Image, setImage] = useState("")
  const [Occupation, setOccupation] = useState("")
  const [School, setSchool] = useState("")
  const [Class, setClass] = useState("")
  const [Status, setStatus] = useState("")
  const [Address, setAddress] = useState("")
  const [Location, setLocation] = useState("")
  const [Email, setEmail] = useState("")
  const [PhoneNo, setPhoneNo] = useState("")
  const [Age, setAge] = useState("")
  const [Qualification, setQualification] = useState("")
  const [WhatsappNo, setWhatsappNo] = useState("")
  const [Sex, setSex] = useState("")



  const navigate = useNavigate()
   

   
  const OnchangeName =(e)=> {
    setName(e.target.value)
  }

  const OnchangeSex =(e)=> {
    setSex(e.target.value)
  }

  const OnchangeOccupation =(e)=> {
    setOccupation(e.target.value)
  }

  const OnchangeSchool =(e)=> {
    setSchool(e.target.value)
  }

  const OnchangeClass =(e)=> {
    setClass(e.target.value)
  }

  const OnchangeStatus =(e)=> {
    setStatus(e.target.value)
  }

  const OnchangeAddress =(e)=> {
    setAddress(e.target.value)
  }

  const OnchangeLocation =(e)=> {
    setLocation(e.target.value)
  }

  const OnchangeEmail =(e)=> {
    setEmail(e.target.value)
  }

  const OnchangeAge =(e)=> {
    setAge(e.target.value)
  }

  const OnchangePhoneNo =(e)=> {
    setPhoneNo(e.target.value)
  }

  const OnchangeQualification =(e)=> {
    setQualification(e.target.value)
  }

  const OnchangeWhatsapp =(e)=> {
    setWhatsappNo(e.target.value)
  }

  const Onchangeimages = async (e) => { 
    const files = Array.from(e.target.files)
    console.log(e.target.files.length)  
  if (e.target.files.length < 1 ) {
   setImage(null)
    alert("please select only 1 image")
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

  const saveForm = async (e) => {
    e.preventDefault();
     axios.post("https://calm-pink-fossa-wear.cyclic.cloud/api/ajadi-form/add",{Name,Occupation,School,
     Class, Image, Status,WhatsappNo,Sex,
     Address, Location, Email, PhoneNo, Age, Qualification})
    .then((res)=>
    { 
    console.log("saved succesfully")
    navigate("/");
    window.location.reload() 
    alert("Thank you! Response recieved,We will get back to you on Whatsapp.")

  }).catch((err)=> {
      console.log(err)
      alert("Unable to submit form, kindly complete the form.")
    })
    
    
  }
  

  return (
    <div  className='bg-[#f5f5f5] pb-[60px] text-[#1a456e] w-full min-h-screen'>
      {/* Heading */}
    <h1 className='text-center font-semibold font-montserat bg-gradient-to-r text-white from-[#1a456e] mt-2 to-[#a4cb3c] py-[2px]'>Ajadi Muslim Youth Forum</h1>
                
             <div className=' text-center  my-[20px] '>
                    <h1 className='font-medium text-[15px] '>Kindly complete the form below to register as a member of the Organization.</h1>
                </div>  

                    {/* Form */}
    <div className='flex font-josefins justify-center items-center '>              
    <div className='flex flex-col shadow-lg w-[320px] sm:w-[350px] h-fit border-2 justify-center border-[#1a456e] bg-white   items-center rounded-[32px]'>

               <div className=' text-center  mt-[15px]'>
                    <h1 className='font-semibold font-arabic text-xl sm:text-2xl '>بِسْمِ ٱللّٰهِ ٱلرَّحْمٰنِ ٱلرَّحِيمِ</h1>
                    <h1 className='font-semibold text-xs pt-2 text-[#a4cb3c] font-josefins'>MOTO : Fostering the bond of brotherhood</h1>
                </div>    
                  {/* Formm details */}

  <form className='w-[280px] mt-[25px]' onSubmit={saveForm} encType="multipart/form-data">
            
    <input placeholder='Full Name'  value={Name} onChange={OnchangeName} required
        className='w-full border-b-[1px] focus:outline-0 px-3 text-[14px] pb-[3.5px] rounded-md border-[#a4cb3c] '/>

    <input placeholder='Occupation'  value={Occupation} onChange={OnchangeOccupation} required
        className='w-full border-b-[1px] focus:outline-0 px-3 text-[14px] pb-[3.5px] mt-[20px] rounded-md border-[#a4cb3c] '/>

    <input placeholder='School'  value={School} onChange={OnchangeSchool} 
        className='w-full border-b-[1px] focus:outline-0 px-3 text-[14px] pb-[3.5px] mt-[20px] rounded-md border-[#a4cb3c]'/>

    <input placeholder='Class/Level'  value={Class} onChange={OnchangeClass} 
        className='w-full border-b-[1px] focus:outline-0 px-3 text-[14px] pb-[3.5px] rounded-md mt-[20px] border-[#a4cb3c] '/>


    <h3 className='text-xs pt-5 text-center'>Kindly upload your image below (Max 1mb)</h3>
   <input  type="file"  name='Image' onChange={Onchangeimages}
         className='w-full border-b-[1px] focus:outline-0 px-3 rounded-md text-[14px] pb-[3.5px]  border-[#a4cb3c] mb-[20px] mt-[20px]' required/>
                    
                     {/* drop down */}
                     <label for="status" className="font-semibold text-[14px]">Status :</label>
                <select name="Status" onChange={OnchangeStatus} className=" focus:outline-0  px-3  " >
                   
                   <option value={false} className ="disabled:" >Select</option>
                    <option value="Single" className="">Single</option>
                    <option value="Married" className="">Married</option>
                    <option value="Divorced" className="">Divorced</option>
                    <option value="Widow" className="">Widow</option>
                    
                </select>


<input placeholder='Home Address'  value={Address} onChange={OnchangeAddress} required
        className='w-full border-b-[1px]  px-3 focus:outline-0 rounded-md text-[14px] pb-[3.5px] mt-[20px] border-[#a4cb3c] '/>

<input placeholder='Location'  value={Location} onChange={OnchangeLocation} required
        className='w-full border-b-[1px] px-3 focus:outline-0 rounded-md text-[14px] pb-[3.5px] mt-[20px] border-[#a4cb3c]'/>

<input placeholder='Email Address'  value={Email} onChange={OnchangeEmail} required
        className='w-full border-b-[1px] px-3 focus:outline-0 rounded-md mb-[20px] text-[14px] pb-[3.5px] mt-[20px] border-[#a4cb3c] '/>

               <label for="Sex" className="font-semibold text-[14px]">Sex :</label>
                <select name="Sex" onChange={OnchangeSex} className=" focus:outline-0  px-3  " >
                   <option value={false} className ="disabled:" >Select</option>
                    <option value="Male" className="">Male</option>
                    <option value="Female" className="">Female</option>
                    
                </select>


<input placeholder='Age' type="Number"  value={Age} onChange={OnchangeAge} required
        className='w-full border-b-[1px] px-3 focus:outline-0 rounded-md text-[14px] pb-[3.5px] mt-[20px] border-[#a4cb3c] '/>

<h3 className='text-xs pt-[25px] text-center'>Kindly include your country code e.g +2348139116879</h3>
<input placeholder='Whatsapp Number e.g +2348139116879'  maxLength={14} value={WhatsappNo} onChange={OnchangeWhatsapp} required
        className='w-full border-b-[1px] px-3 focus:outline-0 rounded-md text-[14px] pb-[3.5px] mt-[10px] border-[#a4cb3c] '/>


<input placeholder='Phone Number' type="Number" value={PhoneNo} onChange={OnchangePhoneNo} required
        className='w-full border-b-[1px] px-3 focus:outline-0 text-[14px] rounded-md pb-[3.5px] mt-[20px] border-[#a4cb3c] '/>

<input placeholder='Qualification'  value={Qualification} onChange={OnchangeQualification} required
        className='w-full border-b-[1px] rounded-md px-3 focus:outline-0 text-[14px] pb-[3.5px] mt-[20px] border-[#a4cb3c] '/>
    
     {/* Upload button */}
     <div className='flex justify-center items-center mb-2'>
        <Button name="Submit"/>
     </div>
  </form>

     </div>
  </div>
      

    </div>
  )
}

export default Home;