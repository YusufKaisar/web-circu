import heroImage from "../../assets/images/riset-photo.png"
import Button from '../ui/Button'
import { motion } from "framer-motion"
import { fadeIn, scale } from '../utils/motion'
import { textVariant } from '../utils/motion'
import { RxAccessibility } from "react-icons/rx";


const Research2 = () => {
  return (
    <section className='container pt-15 px-12'>
        <div className='inline-flex items-center gap-2 border-1 rounded-3xl px-2 py-1 border-gray-300'>
            <RxAccessibility />
            <p className='text-sm'>Research</p>
        </div>  

        <h1 className='text-5xl font-bold mt-8 mb-4'>
            Riset di USU Circularity Center        
        </h1>
        
        <p>Beragam penelitian untuk mendukung keberlanjutan lingkungan.</p>

        <div className="flex flex-col md:flex-row gap-4 mt-8">
            {/* Kiri */}
            <div className="w-1/2">

                <div className="border-1 border-[#487629] rounded-3xl p-6 mb-6">
                    <h2 className="pb-2 text-xl">(1) Aplikasi Circularity USU</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga illo blanditiis et. Molestias, ipsa optio.</p>
                </div>

                <div className="border-1 border-[#487629] rounded-3xl p-6 mb-6">
                    <h2 className="pb-2 text-xl">(1) Aplikasi Circularity USU</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga illo blanditiis et. Molestias, ipsa optio.</p>
                </div>

                <div className="border-1 border-[#487629] rounded-3xl p-6 mb-6">
                    <h2 className="pb-2 text-xl">(1) Aplikasi Circularity USU</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga illo blanditiis et. Molestias, ipsa optio.</p>
                </div>

                <div className="border-1 border-[#487629] rounded-3xl p-6">
                    <h2 className="pb-2 text-xl">(1) Aplikasi Circularity USU</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga illo blanditiis et. Molestias, ipsa optio.</p>
                </div>

            </div>

            {/* Kanan */}
            <div className="w-1/2 items-center flex justify-center">
                <img src={heroImage} alt="" className="max-w-full h-full" />
            </div>
        </div>
    </section>
  )
}

export default Research2