import React from 'react'
import { FaInstagramSquare,FaFacebook,FaWhatsapp } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";

function Footer() {
return (
<div className='w-full text-white '>
    <div className='h-48 flex flex-col justify-center items-center '>
        <h1 className='font-bold capitalize text-4xl text-emerald-500  hover:text-orange-700 '>e-Company</h1>
        <div className='w-full flex justify-center gap-4 mt-4 '>
            <FaInstagramSquare className='size-10 hover:text-rose-800 transition-transform duration-300 ease-in-out' />
            <FaFacebook className='size-10 hover:text-sky-600 transition-transform duration-300 ease-in-out' />
            <FaSquareTwitter className='size-10 hover:text-cyan-500 transition-transform duration-300 ease-in-out' />
            <FaWhatsapp className='size-10 hover:text-green-700 transition-transform duration-300 ease-in-out' />
        </div>

    </div>

</div>
)
}

export default Footer