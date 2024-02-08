import React from 'react'

const Contact = () => {
  return (
    <div className='lg:w-2/6 mx-auto w-5/6'>
        <h2 className='text-center text-4xl font-bold mt-10'>Contact</h2>
        <form action="" className='my-10 flex flex-col'>
            <input 
                type="text" 
                name="name" 
                className='border-black p-2 my-2 border-2' 
                placeholder='enter your name' />
            <input 
                type="email" 
                name="email"
                className='border-black p-2 my-2 border-2'
                placeholder='enter your email' />
            <input 
                type="text"
                className='border-black p-2 my-2 border-2'
                placeholder='Leave your meesage' />
            <button 
                className='bg-black border-2 border-black 
                    inline text-white py-2 mt-10 
                    hover:bg-white hover:text-black
                    transition-all duration-300'>Submit</button>
        </form>
    </div>
  )
}

export default Contact