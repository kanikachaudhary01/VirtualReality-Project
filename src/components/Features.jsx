import React from 'react'
import FeatureCard from '../components/FeatureCard'

function Features() {
  return (
    <>
      <div className='px-4 sm:px-10 md:px-20'>
      
        <div className='text-3xl sm:text-4xl md:text-5xl mt-12 sm:mt-16 tracking-wide text-center'>
          Easily build{' '}
          <span className='bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent'>
            your code
          </span>
        </div>

       
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-14 md:gap-20 mt-12 sm:mt-16'>
          {FeatureCard.map((feature, index) => (
            <div key={index} className='flex flex-col gap-6 max-w-sm mx-auto'>
              <div className='flex items-center gap-6'>
                <div className='text-orange-500 text-3xl'>{feature.icon}</div>
                <div className='text-lg sm:text-xl'>{feature.text}</div>
              </div>
              <div className='text-gray-400 text-sm sm:text-base'>
                {feature.descirption}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Features
