import React, { useEffect, useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi';
import logo from '../../assets/icons/logo_usucc.png'
import { Link, useLocation } from 'react-router-dom'
import { motion } from "framer-motion"
import { fadeIn } from '../utils/motion'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const activeLink = location.pathname;

    const navItems = [
        { path: "/", label: "Home" },
        { path: "/about", label: "Tentang Kami" },
        { path: "/program", label: "Program" },
        { path: "/edukasi", label: "Edukasi" },
        { path: "/kontak", label: "Kontak" },
    ]
  return (
    <motion.nav 
    variants={fadeIn('down', 0.2)}
    initial="hidden"
    animate="show"
    exit="hidden"
    className='fixed top-0 left-0 right-0 bg-white shadow-md z-50 px-4'>
        <div className='container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16'>
    
            {/* Logo */}
            <Link to='/'>
                <img src={logo} alt="Logo" className="w-20 h-auto" />
            </Link>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='md:hidden p-2'>
                {
                    isMenuOpen ? <HiX className='size-6'/> : <HiMenu className='size-6'/>
                }
            </button>

            {/*Dekstop Menu */}
            <div className='hidden md:flex items-center gap-10'>
                {navItems.map((link, index) => (
                    <Link
                        key={index}
                        to={link.path}
                        className={`text-sm relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:transition-all
                            ${activeLink === link.path 
                            ? "text-[var(--primary)] font-bold after:w-full after:bg-[var(--primary)]" 
                            : "text-gray-600 hover:text-[var(--primary)] hover:font-bold after:w-0 hover:after:w-full after:bg-[var(--primary)]"}
                        `}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </div>

        {/* Mobile Menu */}
        {
            isMenuOpen && (
                <motion.div 
                className='md:hidden bg-white border-t border-gray-100 py-4'>
                    <div className='container mx-auto px-4 space-y-3'>
                        {navItems.map((link, index) => (
                            <Link
                            key={index}
                            to={link.path}
                            onClick={() => {
                                setActiveLink(link.path);
                                setIsMenuOpen(false);
                            }} 
                            
                            className={`block text-sm font-medium py-2 ${activeLink === link.href ? "text-[var(--primary)]" : "text-gray-600 hover:text-gray-900"}`} href={link.href}>{link.label}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            )
        }
    </motion.nav>
  )
}
export default Navbar