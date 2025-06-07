import React from 'react'
import PriceCard from './PriceCard'
import { CheckCircle2 } from 'lucide-react'

function Pricing() {
  return (
   <>
   <div className='mt-20 mr-20 ml-20'>
    <div className='grid grid-cols-3 gap-5'>
    {PriceCard.map((item,index)=>(
        <div key={index} className='p-10 border border-neutral-700 rounded-xl'>
           <div> <p className="text-4xl mb-8">
                {item.title}
                {item.title === "Pro" && (
                  <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">
                    (Most Popular)
                  </span>
                )}
              </p></div>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{item.price}</span>
                <span className="text-neutral-400 tracking-tight">/Month</span>
              </p>
              <ul>
                {item.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
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