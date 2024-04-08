import React from 'react'

const Banner = () => {
  return (
    <div className='sm:flex text-center justify-between px-[120px] py-[60px] text-white bg-[color:var(--dark-blue)] relative hidden'>
                <img src="/bg.png" alt="bg" className='absolute w-full h-full top-0 left-0 -z-10' />

                <div className='flex flex-col '>
                    <h1 className='text-[length:var(--heading-h1)] font-bold text-white'>1.4K</h1>
                    <p>Active Users</p>
                </div>

                <div className='flex flex-col gap-[10px]'>
                    <h1 className='text-[length:var(--heading-h1)] font-bold text-white'>98%</h1>
                    <p>Customer satisfaction</p>
                </div>

                <div className='flex flex-col gap-[10px]'>
                    <h1 className='text-[length:var(--heading-h1)] font-bold text-white'>5</h1>
                    <p>Trusted by Hospital</p>
                </div>

                <div className='flex flex-col gap-[10px]'>

                    <h1 className='text-[length:var(--heading-h1)] font-bold text-white'>$5K</h1>
                    <p>Revenue Generated</p>
                </div>


            </div>
  )
}

export default Banner