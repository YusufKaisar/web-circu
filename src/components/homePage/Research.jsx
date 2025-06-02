import React from 'react'
import Button from '../ui/Button'
import { motion } from "framer-motion"
import { fadeIn, scale } from '../utils/motion'
import { textVariant } from '../utils/motion'
import { IoIosHeartHalf } from "react-icons/io"
import { IoFilterSharp } from "react-icons/io5";

const Research = () => {
  return (
    <section className='container pt-15 px-12'>
        <div className='inline-flex items-center gap-2 border-1 rounded-3xl px-2 py-1 border-gray-300'>
            <IoFilterSharp />
            <p className='text-sm'>Benefit</p>
        </div>   

        <h1 className='text-5xl font-bold my-8'>
            Langkah Awal Menuju Kampus Zero Waste        
        </h1>

        <div className='flex items-center gap-8'>

            <div className='border-2 border-gray-300 rounded-3xl p-6'>
                <div className='border-2 border-gray-300 rounded-3xl py-24 px-30'>
                    <div className='bg-[#487629] p-3 rounded-lg text-white text-5xl'>
                        <IoIosHeartHalf />
                    </div>
                </div>
                
                <div className='text-center pt-6'>
                    <h2 className='text-xl pb-2'>Pengelolaan Sampah Terpadu</h2>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga illo 
                        blanditiis et. Molestias, ipsa optio.</p>
                </div>
            </div>

            <div className='border-2 border-gray-300 rounded-3xl p-6'>
                <div className='border-2 border-gray-300 rounded-3xl py-24 px-30'>
                    <div className='bg-[#487629] p-3 rounded-lg text-white text-5xl'>
                        <IoIosHeartHalf />
                    </div>
                </div>
                
                <div className='text-center pt-6'>
                    <h2 className='text-xl pb-2'>Pengelolaan Sampah Terpadu</h2>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga illo 
                        blanditiis et. Molestias, ipsa optio.</p>
                </div>
            </div>

            <div className='border-2 border-gray-300 rounded-3xl p-6'>
                <div className='border-2 border-gray-300 rounded-3xl py-24 px-30'>
                    <div className='bg-[#487629] p-3 rounded-lg text-white text-5xl'>
                        <IoIosHeartHalf />
                    </div>
                </div>
                
                <div className='text-center pt-6'>
                    <h2 className='text-xl pb-2'>Pengelolaan Sampah Terpadu</h2>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga illo 
                        blanditiis et. Molestias, ipsa optio.</p>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Research