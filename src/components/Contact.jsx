import React from 'react'
import image from "../images/asma006.png"

const Contact = () => {
  return (
    <>
    <div id='Contact' className='flex flex-col items-center font-serif'>
           <div className="w-1/3 text-center mt-10">
        <h6>Contact</h6>
        <h1 className='text-3xl font-bold my-3'>Contact Me</h1>
        <p className='mt-4'>Get In touch</p>
          </div>
    </div>
    <div className="flex items-center py-16">
        
    <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
      <div className="flex flex-col md:flex-row">
        <div className="h-full p-6 lg:p-0  md:w-1/2">
          <img
            className="object-cover w-full h-full"
            src={image}
            alt="img"
          />
        </div>
        <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
          <div className="w-full">
         
            
            <div className="flex items-center mt-5">
           <p className='w-20 font-bold text-lg'> Email: </p> <a className="text-blue-700 hover:text-[#f0e1d5] underline" href="mailto:Asmarasheed4599@gmail.com">Asmarasheed4599@gmail.com</a>

            </div>
            <div className="flex items-center mt-5">
            <p className='w-20 font-bold text-lg'> Phone: </p> <a className="text-blue-700 hover:text-[#f0e1d5] underline"  href="tel:+962795208162"> 0795208162
            </a>
            </div>
            <div className="flex items-center mt-5">
            <p className='w-20 font-bold text-lg'> Linkdin : </p> <a className="text-blue-700 hover:text-[#f0e1d5] underline" href="https://www.linkedin.com/in/asma-rasheed-18b441267/" target='_blank'>Asma Rasheed</a>
            </div>
            <div className="flex items-center mt-5">
            <p className='w-20 font-bold text-lg'> Github: </p> <a className="text-blue-700 hover:text-[#f0e1d5] underline" href="https://github.com/AsmaRasheed99?tab=repositories" target='_blank'>Asma Rasheed</a>
            </div>
           
          
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Contact