import React from 'react'
import PriceCard from './PriceCard'
import { CheckCircle2 } from 'lucide-react'

function Pricing() {
  return (
    <>
      <div className='mt-16 px-4 sm:px-8 md:px-20'>
      
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10'>
          {PriceCard.map((item, index) => (
            <div key={index} className='p-6 sm:p-8 border border-neutral-700 rounded-xl'>
           
              <p className="text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8">
                {item.title}
                {item.title === "Pro" && (
                  <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-base sm:text-lg md:text-xl ml-2">
                    (Most Popular)
                  </span>
                )}
              </p>

          
              <p className="mb-6 sm:mb-8">
                <span className="text-4xl sm:text-5xl mr-2">{item.price}</span>
                <span className="text-neutral-400 tracking-tight text-sm sm:text-base">/Month</span>
              </p>

          
              <ul>
                {item.features.map((feature, index) => (
                  <li key={index} className="mt-6 sm:mt-8 flex items-center text-sm sm:text-base">
                    <CheckCircle2 />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>

             
              <a
                href="#"
                className="inline-flex justify-center items-center text-center w-full h-12 px-4 py-3 mt-12 sm:mt-20 text-base sm:text-lg hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
              >
                Subscribe
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Pricing
