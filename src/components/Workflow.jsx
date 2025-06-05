import React from 'react'
import codeImg  from "../assets/code.jpg"
import WorkCheck from './WorkCheck'
import { CheckCircle } from 'lucide-react'

function Workflow() {
  return (
    <>
    <div className='mt-20'>
        <div className='text-5xl tracking-wider text-center '>
            Accelerate your {""}
            <span className='bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent'>coding workflow</span>
        </div>
        <div>
            <div className='w-1/2 p-2 ml-2' >
                <img src={codeImg} alt="" />
            </div>
            <div className='flex '>
           {WorkCheck.map((item,index)=>(
            <div>
                <div key ={index} className=''>
                    <div className='text-emerald-600'><CheckCircle/></div>
                    <div className='text-xl'>{item.title}</div>
                    <div className='text-gray-400'>{item.descripton}</div>
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