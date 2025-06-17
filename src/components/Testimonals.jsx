import React from 'react'
import TestCard from './TestCard'


function Testimonals() {
  return (
    <>
       <div className='mt-20 mx-20'>
  <div className='tracking-wide text-4xl text-center'>What people are saying</div>
  <div className='mt-15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
               <TestCard
               text={"I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations."}
               heading={"John Doe"}
               subheading={"Steller Soulmate"}
               image="/user1.jpg"
               />
         
               <TestCard
               text={"I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life"}
               heading={"Jane Smith"}
               subheading={"Blue Horizon Technologies"}
               image={"/user2.jpg"}
               />
                <TestCard
               text={"Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service."}
               heading={"David Johnson"}
               subheading={"Quantum Innovations"}
               image={"/user3.jpg"}
               />
                <TestCard
               text={"Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible."}
               heading={"Ronee Brown"}
               subheading={"Fusion Dynamics"}
               image={"/user4.jpg"}
               />
                <TestCard
               text={"I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results."}
               heading={"Michael Wilson"}
               subheading={"Visionary Creations"}
               image={"/user5.jpg"}
               />
                <TestCard
               text={"The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future."}
               heading={"Emily Davis"}
               subheading={"Synergy Systems"}
               image={"/user6.jpg"}
               />
            </div>
        </div>
    </>
  )
}

export default Testimonals