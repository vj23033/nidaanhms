import React from 'react'

const Brands = ({ height }) => {
  return (
    <div className='flex justify-between flex-wrap sm:gap-[70px] gap-[30px] w-full'>
        <img src="/brand1.png" alt="brand1" height={height} className='aspect-[30/9] max-w-[40%]'/>
        <img src="/brand2.png" alt="brand2" height={height} className='aspect-[30/9] max-w-[40%]'/>
        <img src="/brand3.png" alt="brand3" height={height} className='aspect-[30/9] max-w-[40%]'/>
        <img src="/brand4.png" alt="brand4" height={height} className='aspect-[30/9] max-w-[40%]'/>
    </div>
  )
}

export default Brands