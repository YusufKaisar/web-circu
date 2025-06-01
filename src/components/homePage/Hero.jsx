import React from 'react'
import heroImage from "../../assets/images/garbage-can.jpg"
import Button from '../ui/Button'
import { motion } from "framer-motion"
import { fadeIn, scale } from '../utils/motion'
import { textVariant } from '../utils/motion'
const Hero = () => {
  return (
    <section className='container mx-auto flex flex-col md:flex-row items-center justify-between py-15 md:py-20 lg:py-16'>
        {/* Left Col */}
        <div className='pt-20 md:pt-0 lg:pt-0 order-2 md:order-1 w-full md:w-1/2 md:px-6 lg:px-20'>
            <h1 className='text-5xl md:text-3xl lg:text-5xl mb-4 text-center'>
                Describe why your company exists [mission statement]
            </h1>

            <p className='text-base text-center'>
                USU Circularity Center adalah bagian dari upaya menciptakan sistem pengelolaan sampah 
                terpadu Universitas Sumatera Utara untuk mendukung visi 
            </p>
        </div>

        {/* Right Col */}
        <div className='hidden md:block order-1 md:order-2 w-full md:w-1/2'>
            <img src={heroImage} alt="" />
        </div>


    </section>
  )
}

export default Hero