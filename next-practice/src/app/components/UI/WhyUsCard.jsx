import React from 'react'

const WhyUsCard = ({title, description, image, className}) => {
  return (
    <div className={'relative flex sm:flex-col flex-row gap-[30px] items-start sm:gap-[60px] border px-[40px] py-[40px] '+className} >
      <img src="/grid-bg.png" alt="bg" className='absolute w-full h-full top-0 left-0 z-10' />
      <img src="/blue-bg.png" alt="bg" className='absolute w-full h-full top-0 left-0 z-10 ' />
  
    <div className='flex max-w-[80%] flex-col gap-[8px] z-20 bg-transparent'>
      <img  src={image} alt={title} width={45} height={45} className='mb-[50px]' />
      <h1 className='sm:text-[28px] text-[20px] font-bold text-white'>{title}</h1>
      <p className='leading-[24px] sm:text-[16px]  text-[11px] text-[white] text-opacity-50'>{description}</p>
    </div>
  </div>
  )
}

export default WhyUsCard