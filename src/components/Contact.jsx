import React from 'react'
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("mgedqnze");
  // if (state.succeeded) {
  //   handleSubmit('');
  // }
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form onSubmit={handleSubmit} className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - <span className='text-pink-400'>sainingo254@gmail.com</span></p>
            </div>
            <input  className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' required />
            <ValidationError  prefix="name" field="name" errors={state.errors} />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email'  id="email" name='email' required />
            <ValidationError  prefix="Email" field="email" errors={state.errors} />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10"  id="message" placeholder='Message' required></textarea>
            <ValidationError  prefix="Message"  field="message" errors={state.errors}  />
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center' disabled={state.submitting}>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact