import React from 'react'
import FeatureCard from '../components/FeatureCard'

function Features() {
  return (
   <>
   <div>
    <div className='text-5xl mt-8 tracking-wide text-center'>
       Easily build {""}
        <span className='bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent'>your code</span>
    </div>
    <div>
        {FeatureCard.map((feature,index)=>(
           <div>  key={index}
           <div>{feature.icon}</div>
           <div>{feature.text}</div>
           <div>{feature.descirption}</div>
           </div> 
        ))}
    </div>
   </div>
   </>
  )
}

export default Features