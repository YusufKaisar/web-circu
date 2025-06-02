import logo from '../../assets/icons/logo_usucc.png'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom'
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
        const location = useLocation();
        const activeLink = location.pathname;

        const footerLinks = {
        home: [,
            { path: "/about", label: "Tentang Kami" },
            { path: "/program", label: "Navigation" },
            { path: "/edukasi", label: "Edukasi" },
        ],

        Contacts: [   
        {path: "https://maps.app.goo.gl/WeZMWoR2iWCMQwCE6", label: "Jl. Dr. T. Mansur No. 9, Kampus Padang Bulan, Medan, 20155, Sumatera Utara"},   
        {path: "/email", label: "info@usu.ac.id"},   
        {path: "/nomor", label: "+62 821 6888 9060"},     
        ],
    }

  return (
    <footer className='shadow'>
        <div className='container mx-auto px-10 md:px-20 lg:px-12 pb-16'>
            <div>
                {/*Brand Name*/}
                <div className='flex items-center cursor-pointer justify-between'>
                    <div className=''>
                        <div className='flex items-center justify-center gap-2'>
                            <Link to='/'>
                                <img src={logo} alt="logo" className='w-20 h-auto'/>
                            </Link>
                            <h2 className='text-2xl font-bold'>USU Circularity Center</h2>
                        </div>

                        <p className='text-base text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, ipsa facere fugiat ducimus adipisci id ipsum in eligendi dicta! Eius iusto provident pariatur similique ratione illum molestias, perspiciatis sed alias?</p>
                    </div>

                    {/* Navigasi */}
                    <div className='flex gap-10'>
                        <div>
                            <h3 className="font-bold mb-2 text-lg">Navigation</h3>
                            <ul className="space-y-2 text-base text-gray-600">
                                {footerLinks.home.map((link, index) => (
                                <li key={index}>
                                    <Link
                                    to={link.path}
                                    className={`hover:text-[var(--primary)] transition-all ${
                                        activeLink === link.path ? "text-[var(--primary)] font-bold" : ""
                                    }`}
                                    >
                                    {link.label}
                                    </Link>
                                </li>
                                ))}
                            </ul>
                        </div>

                        {/* Kontak */}
                        <div>
                            <h3 className="font-bold mb-2 text-lg">Contacts</h3>
                            <ul className="space-y-2 text-base text-gray-600">
                                {footerLinks.Contacts.map((item, index) => (
                                <li key={index}>
                                    <Link
                                    to={item.path}
                                    className="hover:text-[var(--primary)] transition-all"
                                    >
                                    {item.label}
                                    </Link>
                                </li>
                                ))}
                            </ul>
                        </div>        
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