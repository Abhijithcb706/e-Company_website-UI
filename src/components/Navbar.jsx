import React, { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineCloseSquare } from "react-icons/ai"


const Navbar = () => {
    const [nav,setNav]=useState(false)

    const handleNav =()=>{
        setNav(!nav)
    }

return (
<div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
    {/* <img src='https://st2.depositphotos.com/1024516/7326/v/450/depositphotos_73261477-stock-illustration-vector-logo-for-letter-e.jpg'
        className='h-8 mr-3 pt-1 sm:hidden md:hidden'></img> */}
    <h1 className='w-full text-3xl font-bold text-[#00df9a]'>e-Company</h1>
    <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Resources</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
    </ul>
    <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <AiOutlineCloseSquare size={30}/> : <CiMenuBurger size={20}/>}
        
        
    </div>
    <div  className={!nav ? 'md:hidden fixed left-0 top-0 w-[50%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-700' : 'ease-in-out duration-500 fixed left-[-100%] '}>
    <h1 className='w-full text-3xl font-bold text-[#00df9a] m-3'>e-Company</h1>

    <ul className='pt-3 uppercase '>
        <li className='p-4 border-b border-b-lime-950 '>Home</li>
        <li className='p-4 border-b border-b-lime-950'>Company</li>
        <li className='p-4 border-b border-b-lime-950'>Resources</li>
        <li className='p-4 border-b border-b-lime-950'>About</li>
        <li className='p-4'>Contact</li>
    </ul>
    </div>

</div>
);
};

export default Navbar;