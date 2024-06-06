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
  const [loading, setLoading] = useState(false);

  // when you click SignUp button, it creates a Data object with the fields entered
  async function handleSubmit(event){
    event.preventDefault();
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

    // const data = {
    //   name: String(event.target.name.value),
    //   email:String(event.target.email.value),
    //   phone:String(event.target.phone.value)
    // }
    
    // // sending request and wait for response
    // const response = await fetch("api/contact", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type":"application/json",
    //   },
    //   body: JSON.stringify(data),
    // });

    // if (response.ok) {
    //   console.log("Message sent successfully")
    // }

    // if (!response.ok){
    //   console.log("Error sending message")
    // }

    // console.log(data)
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
          <section className='py-10'>
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
          <section className='py-10'>
              <form onSubmit={handleSubmit}>

                <div className='w-full flex flex-col my-4'>
                  <label className='font-bold text-gray-800' htmlFor="name">Name</label>
                  <input 
                  value= {name} 
                  onChange={(e) => setName(e.target.value)} 
                  className='bg-gray-100 border border-grey-100 p-2 mt-3' 
                  type="text" 
                  autoComplete='off' 
                  id="name"/>
                </div>

                <div className='w-full flex flex-col my-4'>
                  <label className='font-bold text-gray-800' htmlFor="email">Email</label>
                  <input 
                  value= {email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  className='bg-gray-100 border border-grey-100 p-2 mt-3' 
                  type="text" 
                  autoComplete='off' 
                  id="email"/>
                </div>

                <div className='w-full flex flex-col my-4'>
                  <label className='font-bold text-gray-800' htmlFor="phone">Phone</label>
                  <input 
                  value= {phone} 
                  onChange={(e) => setPhone(e.target.value)} 
                  className='bg-gray-100 border border-grey-100 p-2 mt-3'
                  type="text" 
                  autoComplete='off' 
                  id="phone"/>
                </div>
                <div className='my-4'>
                  <input type="checkbox" className="required checked:accent-blue-500"/>
                  <label className='pl-2'>Agree to <a href="/terms" className='font-bold text-primary-maroon hover:underline'>Privacy Policy</a></label>
                </div>
                
                <button disabled={loading} type="submit" className='mt-8 px-4 py-2 w-36 bg-gray-700 text-white font-medium disabled:bg-gray-300'>
                  Sign up
                </button>
                
              </form>
          </section>
        </div>

    </main>
  )
}

export default ContactUs

// button (submit) type means it triggers the form submission event