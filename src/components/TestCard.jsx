
import React from 'react'

function TestCard({heading,subheading,text,image}) {
  return (
    <div className='shadow-2xl shadow-gray-900 hover:scale-95 rounded-2xl px-4 py-2'>
        <div className='tracking-wide'>{text}</div>
        <div className='flex gap-5'>
            <img src={image} alt="" className='rounded-full w-15 mt-4'/> 

            <div>
            <div className='text-xl pt-4'>{heading}</div>
            <div className='text-gray-400'>{subheading}</div>
        </div>
        </div>
        

    </div>
  )
}

export default TestCard
