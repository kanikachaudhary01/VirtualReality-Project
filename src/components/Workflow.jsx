import React from 'react'
import codeImg from "../assets/code.jpg"
import WorkCheck from './WorkCheck'
import { CheckCircle } from 'lucide-react'

function Workflow() {
  return (
    <>
      <div className='mt-12 px-4 sm:px-10 md:px-20'>
       
        <div className='text-3xl sm:text-4xl md:text-5xl tracking-wider text-center'>
          Accelerate your{' '}
          <span className='bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent'>
            coding workflow
          </span>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 mt-10 gap-8'>
        
          <div className='flex justify-center'>
            <img className=' w-full object-cover rounded-lg' src={codeImg} alt="Code" />
          </div>

        
          <div className='flex flex-col gap-6 sm:gap-8 mt-6 sm:mt-12'>
            {WorkCheck.map((item, index) => (
              <div key={index} className=''>
                <div className='text-emerald-600'>
                  <CheckCircle />
                </div>
                <div className='text-lg sm:text-xl mt-1'>{item.title}</div>
                <div className='text-sm sm:text-base text-gray-400'>
                  {item.descripton}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Workflow
