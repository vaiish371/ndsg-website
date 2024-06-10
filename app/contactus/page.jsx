'use client'
import SectionHeader from '@app/components/common_components/SectionHeader'
import React, { useState } from 'react'
import { GoogleMapsEmbed } from '@next/third-parties/google'
import { db } from '@app/firebaseconfig'
import { collection, addDoc } from 'firebase/firestore'

// handles the request, sends back a response
async function addDataToFireStore(name, email, phone) {
  try {
    const docRef = await addDoc(collection(db, "signups"), {
      name: name,
      email: email,
      phone: phone,
    });
    // addDoc returns a promise -> resolves to a docref object which containts information on newly created doc
    console.log("Document written with ID: ", docRef.id)
    return true;
  } catch (error) {
    console.error("Error adding document", error)
    return false;
  }
}


const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // when you click SignUp button, it creates a Data object with the fields entered

  /*
  Basic validation check:
  no field should be empty except phone
  email validation
  agree to terms must be mandatory
  */
  async function handleSubmit(event){
    event.preventDefault();
    if(!error){
        setLoading(true);
        const requestSuccess = await addDataToFireStore(name, email, phone);
        setLoading(false);
        if (requestSuccess){
          setName("")
          setEmail("")
          setPhone("")
        
          alert("Successfully signed up!")
          console.log("Document added with id: ")
        } else {
          alert("Error signing up. Try again.")
        }
    }
    

  }

  function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setEmail(email)
      if (!(emailRegex.test(email))){
        setError("Please enter valid address.")
      } else {
        setError("")
      }
  }

  return (
    <main>
        <SectionHeader sectionLabel="Contact Us"/>
        <div className='max-container padding-y px-10'>
          <section className='flex flex-row max-sm:flex-col gap-10'>
            <div className='w-1/2 max-sm:w-full flex flex-col gap-5 max-sm:gap-3'>
              <h1 className='font-caudex text-3xl font-bold'>Location</h1>
              <p className='text-lg leading-8'>448, Serangoon Road, Level #02-01
                <br/>
                Singapore 218138
              </p>
              <p className='text-lg leading-8 mt-3'>
                <b>Operating Hours:</b>
                <br/> Mon - Sun, 8.30 - 11.00am | 5.30 - 8.00pm
              </p>
            </div>
            <div className='w-1/2 max-sm:w-full flex flex-col gap-5 max-sm:gap-3'>
             <h1 className='font-caudex text-3xl font-bold'>Contact Information</h1>
             <p className='text-lg leading-8'>Phone : +65 91458270/91832207 
                <br/>
                E-mail : contact@namadwaarsg.org
             </p>
            </div>
          </section>
          <section className='my-20'>
            <div>
              <GoogleMapsEmbed
                apiKey="AIzaSyAde41v4o5WsSVJu7-rsu4zb-auh9UfQEs"
                height={300}
                width="100%"
                mode="place"
                q="448,Serangoon Road, Singapore 218138"
                zoom={18}
              />

            </div>
          
          </section>

          <section className='my-20'>
            <div className='h-[550px] max-md:h-[500px] bg-third-hero bg-top bg-cover lg:bg-fixed relative'>
             <div className='flex justify-start items-start flex-col w-1/2 h-full whitespace-normal bg-primary-blue bg-opacity-75 max-md:w-full absolute right-0 inset-y-0'>
                <h1 className='font-caudex text-beige text-4xl max-md:text-3xl max-md:leading-8 max-sm:text-2xl font-bold py-8 px-14 '>Sign up for updates!</h1>
                <form onSubmit={handleSubmit} className='w-full px-14 text-lg'>

                  <div className='flex flex-col'>
                    <label className='font-bold font-caudex text-beige' htmlFor="name">Name</label>
                    <input 
                    value= {name} 
                    onChange={(e) => setName(e.target.value) } 
                    className='inputfields' 
                    type="text" 
                    autoComplete='off' 
                    id="name"
                    required/>
                  </div>

                  <div className='flex flex-col my-8'>
                    <label className='font-bold font-caudex text-beige' htmlFor="email">Email</label>
                    <input 
                    value= {email} 
                    onChange={(e) => validateEmail(e.target.value)} 
                    className='inputfields' 
                    type="text" 
                    autoComplete='off' 
                    id="email"
                    required/>
                    <span style={{color:"red"}}>{error}</span>
                  </div>

                  <div className='flex flex-col my-8'>
                    <label className='font-bold font-caudex text-beige' htmlFor="phone">Phone (optional) </label>
                    <input 
                    value= {phone} 
                    onChange={(e) => setPhone(e.target.value)} 
                    className='inputfields'
                    type="text" 
                    autoComplete='off' 
                    id="phone"/>
                  </div>
                  <div className='mt-8 flex items-center font-caudex text-beige'>
                    <input id="terms-checkbox" type="checkbox" className="w-5 h-5 checked:accent-blue-500" required/>
                    <label htmlFor="terms-checkbox" className='pl-2'>Agree to <a href="/terms" className='font-bold text-white hover:underline'>Privacy Policy</a></label>
                  </div>
                  
                  <button disabled={loading} type="submit" className='max-lg:mt-4 mt-8 px-4 py-2 w-36 font-inter rounded-md bg-primary-orange text-white disabled:bg-[#FFA778]'>
                    Sign up
                  </button>
                
                </form> 
             </div>
            </div>
        </section>
        
        </div>

    </main>
  )
}

export default ContactUs

// button (submit) type means it triggers the form submission event