import React from 'react'
import HeroImage from '../components/UI/HeroImage'
import Button from '../components/UI/Button'

const Hero = () => {
  return (
    <div className='sm:py-[100px] sm:px-[120px] px-[16px] py-[40px] flex flex-col sm:gap-[120px] gap-[56px] justify-between relative overflow-hidden'>
    <HeroImage />
    <div className='sm:max-w-[60%] flex flex-col gap-[20px]'>
      <h1 className='text-[length:var(--heading-h1)] font-bold sm:leading-[72px] leading-[32px]'>Streamline Your Hospital Operations with Us</h1>
      <p className='text-[length:var(--md-text)] max-w-[80%]'>Experience Unparalleled Efficiency with Our Cutting-Edge Hospital Management Software</p>
      <span className='mt-[40px] flex items-center'>
        <Button bg={"purple"} text={"white"}>Get Started With us</Button>
        <Button bg={"transparent"} text={"black"}>
          <div className='flex items-center gap-2'>
            <img src="/play.png" alt="play" />
            How it works

          </div>
        </Button>
      </span>
    </div>

    <div className='flex flex-col gap-[48px] sm:max-w-[50%]'>
      <div className='flex gap-[12px]'>
        <img src="/users.png" alt="users" />
        <span className='flex flex-col'>
          <p className='text-[length:var(--md-text)] font-bold'>Our Happy Users</p>
          <p className='flex'>
            <img src="star.svg" alt="star" />
            4.9 (1.4k reviews)
          </p>
        </span>
      </div>

      <div className='flex flex-col gap-[20px]'>
        <p className='text-[length:var(--lg-text)] font-bold'>Trusted by these hospitals</p>
        <img src="/brands.png" alt="brands" />
      </div>
    </div>
  </div>
  )
}

export default Hero