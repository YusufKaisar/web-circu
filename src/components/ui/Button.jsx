import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Button = ({ children, to, onClick, className = "", type = "button" }) => {
  const navigate = useNavigate();
  
    const handleClick = (e) => {
      if (onClick) onClick(e);
      if (to) navigate(to);
    }

  if (to) {
    return (
      <Link
        to={to}
        onClick={onClick}
        className={` inline-flex items-center justify-center bg-[var(--primary)] w-42 h-12 text-white rounded-3xl hover:bg-white 
          cursor-pointer transition-all hover:text-black hover:border-2 text-sm ${className}`}
      >  
          {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`bg-[var(--primary)] w-42 h-12 text-white rounded-3xl hover:bg-white 
        cursor-pointer transition-all hover:text-black hover:border-2 text-sm ${className}`}
    >
      {children}
    </button>
  )
}

export default Button