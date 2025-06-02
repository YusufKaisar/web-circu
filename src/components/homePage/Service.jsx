import React from 'react'
import heroImage from "../../assets/images/garbage-guy.png"
import Button from '../ui/Button'
import { motion } from "framer-motion"
import { fadeIn, scale } from '../utils/motion'
import { textVariant } from '../utils/motion'
import { FaEarthAsia } from "react-icons/fa6";
import { IoShieldCheckmarkOutline } from "react-icons/io5";


const Service = () => {
  return (
    <section className='container pt-15 px-12'>
          <div className='inline-flex items-center gap-2 border-1 rounded-3xl px-2 py-1 border-gray-300'>
              <IoShieldCheckmarkOutline />
              <p className='text-sm'>Our Service</p>
          </div>   

        <h1 className='text-5xl font-bold my-8'>
            Sistem Pengelolaan Sampah Terpadu        
        </h1>

        <div className='flex flex-col md:flex-row gap-4'>
            <div className='border-2 border-gray-300 rounded-3xl p-6'>
                <div className='inline-flex items-center gap-2'>
                    <div className='bg-[#487629] p-3 rounded-lg'>
                        <FaEarthAsia  className='text-2xl text-white'/>
                    </div>
                    <h2 className='text-xl'>Public Space</h2>
                </div>

                <p className='text-sm my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Nulla, asperiores. Animi possimus dolorum nesciunt praesentium!</p>

                <img src={heroImage} alt="" className='w-full h-auto'/>
            </div>

            <div className='border-2 border-gray-300 rounded-3xl p-6'>
                <div className='inline-flex items-center gap-2'>
                    <div className='bg-[#487629] p-3 rounded-lg'>
                        <FaEarthAsia  className='text-2xl text-white'/>
                    </div>
                    <h2 className='text-xl'>Public Space</h2>
                </div>

                <p className='text-sm my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Nulla, asperiores. Animi possimus dolorum nesciunt praesentium!</p>

                <img src={heroImage} alt="" className='w-full h-auto'/>
            </div>

            <div className='border-2 border-gray-300 rounded-3xl p-6'>
                <div className='inline-flex items-center gap-2'>
                    <div className='bg-[#487629] p-3 rounded-lg'>
                        <FaEarthAsia  className='text-2xl text-white'/>
                    </div>
                    <h2 className='text-xl'>Public Space</h2>
                </div>

                <p className='text-sm my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Nulla, asperiores. Animi possimus dolorum nesciunt praesentium!</p>

                <img src={heroImage} alt="" className='w-full h-auto'/>
            </div>

        </div>
    </section>
  )
}

export default Service