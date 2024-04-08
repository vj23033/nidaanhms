import React from 'react'
import Button from '../components/UI/Button'

const SetupBanner = () => {
    return (
        <div className='flex flex-col-reverse sm:flex-row sm:items-center justify-between items-start sm:px-[120px] px-[16px] py-[40px] sm:py-0 sm:gap-[80px] gap-[50px] text-white bg-[#030334]'>


            <div className='flex sm:max-w-[60%] flex-col gap-[20px] sm:py-[81px]]'>
                <h1 className='text-[length:var(--heading-h1)] font-bold sm:leading-[72px] leading-[42px] text-white'>Easy Setup Nidaan HMS in 30 Minutes</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Purus  blandit arcu sem purus.<br /> Posuere lorem egestas auctor amet nisi. Pretium nisl nec et tempus </p>
                <Button bg={"purple"} text={"white"} style={{ width: '200px', marginTop: '100px' }}>Get Started Now</Button>

            </div>

            <img src='./pc.png' alt='pc' className='h-[60%]' />

        </div>
    )
}

export default SetupBanner