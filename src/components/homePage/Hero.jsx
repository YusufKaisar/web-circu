import React from 'react'
import heroImage from "../../assets/images/garbage-truck.png"
import Button from '../ui/Button'
import { motion } from "framer-motion"
import { fadeIn, scale } from '../utils/motion'
import { textVariant } from '../utils/motion'
import { FaRecycle } from "react-icons/fa"

const Hero = () => {
  return (
    <section className='container pt-15 md:pt-30 px-12'>
        <div className='inline-flex items-center gap-2 border-1 rounded-3xl px-2 py-1 border-gray-300'>
            <FaRecycle />
            <p className='text-sm'>Zero Waste</p>
        </div>

        <h1 className='text-5xl font-bold my-8'>
            USU Circularity Center
        </h1>

        <img src={heroImage} alt="" className='w-full h-auto'/>

        <p className='my-8'>Pusat Pengelolaan Persampahan di Universitas Sumatera Utara</p>


    </section>
  )
}

export default Hero