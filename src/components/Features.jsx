import React from 'react'
import FeatureCard from '../components/FeatureCard'

function Features() {
  return (
   <>
   <div>
    <div className='text-5xl mt-25 tracking-wide text-center'>
       Easily build {""}
        <span className='bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent'>your code</span>
    </div>
    <div className='  grid grid-cols-3 px-10  mt-15 gap-20'>
        {FeatureCard.map((feature,index)=>(
           <div  key={index} className='flex flex-col gap-10 max-w-sm'> 
          <div className='flex items-center gap-10 '>
             <div className='text-orange-500 text-[2rem]'>{feature.icon}</div>
           <div className='text-xl'>{feature.text}</div>
          </div>
          <div className='text-gray-400 '>{feature.descirption}</div>
           </div> 
        ))}
    </div>
   </div>
   </>
  )
}

export default Features