import React from 'react'
import img2 from '../assets/img2.jpg'

function Resources() {
  return (
    <div className='w-full bg-slate-50 py-16 px-4 '>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
      <img className='w-full mx-auto my-4 md:pr-4 md:h-[297px] ' src={img2} alt='/' />
      <div className='flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold shadow-2xl '>RESOURCES DASHBOARD</p>
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage e-Services centrally</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          molestiae delectus culpa hic assumenda, voluptate reprehenderit
          dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
          eveniet ex deserunt fuga?
        </p>
        <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 hover:bg-orange-500 hover:text-zinc-950   '>Get Started</button>
      </div>
    </div>
  </div>
);
};
  
export default Resources