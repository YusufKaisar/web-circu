import logo from '../../assets/icons/logo_usucc.png'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom'

const Footer = () => {
        const location = useLocation();
        const activeLink = location.pathname;

        const footerLinks = {
        home: [,
            { path: "/about", label: "Tentang Kami" },
            { path: "/program", label: "Program" },
            { path: "/edukasi", label: "Edukasi" },
            { path: "/kontak", label: "Kontak" },
        ],

        Features: [   
        {path: "/app", label: "Aplikasi"},   
        {path: "/game", label: "Game"},   
        {path: "/waste", label: "Zero Waste"},   
        {path: "/maggot", label: "Maggot"},   
        ],
    }

  return (
    <footer className='shadow'>
        <div className='container mx-auto px-10 md:px-20 lg:px-40 pb-16'>
            <div>
                {/*Brand Name*/}
                <div className='flex gap-1 items-cente cursor-pointer justify-between'>
                    <div>
                        <Link to='/'>
                            <img src={logo} alt="logo" className='h-12 w-auto mb-4'/>
                        </Link>
                        <p className='text-sm md:text-base mb-4'>Jl. Dr. T. Mansur No. 9, Kampus Padang Bulan, <br />Medan, 20155, Sumatera Utara</p>     

                        <div>
                            <a href="#" className='flex gap-2 mb-2'><FaPhoneAlt className='mt-1'/> 0821 6888 9060</a>
                            <a href="#" className='flex gap-2'><IoMdMail className='mt-1'/> info@usu.ac.id</a>
                        </div>
                    </div>

                    <div className='flex gap-8 md:gap-16 justify-end text-right pt-'>
                        {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                        <div key={categoryIndex}>
                            <ul className='space-y-2 text-gray-500'>
                            {links.map((link, index) => (
                                <li key={index}>
                                <Link to={link.path} className="hover:text-[var(--primary)] transition-all hover:font-bold
                                ${activeLink === link.path ? 'text-[var(--primary)] font-bold' : ''}">
                                    {link.label}
                                </Link>
                                </li>
                            ))}
                            </ul>
                        </div>
                        ))}
                    </div>
                    
                </div> 
                
            </div>
        </div>

        {/*Bottom Footer*/}
        <div className='bg-gradient-to-l from-[#1a1a1a] via-[#202020] to-[#2a2a2a] py-4'>
            <div className='max-w-7xl mx-auto px-5 md:px-10 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-4'>
                <p className='text-white text-sm md:text-base'>
                Copyright© 2025 USU Circularity Center
                </p>
                <div className='flex gap-2'>
                    <a href="#" className='w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-white border-2 rounded-full
                    hover:bg-[var(--primary)] hover:text-black transition-all duration-200'>
                        <FaFacebookF />
                    </a>
                    <a href="#" className='w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-white border-2 rounded-full
                    hover:bg-[var(--primary)] hover:text-black transition-all duration-200'>
                        <FaInstagram />
                    </a>
                </div>
            </div>
        </div>


    </footer>
  )
}

export default Footer