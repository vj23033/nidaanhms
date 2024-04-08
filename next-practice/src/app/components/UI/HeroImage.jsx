import React from 'react'

const HeroImage = () => {
    return (
        <>
        <div className='max-w-[60%] absolute right-0 -z-10 hidden sm:block'>
            <div className='relative'>
                <img src="/amount.png" alt="hero" className='absolute top-[0%] left-[30%]' />
                <img src="/main.png" alt="hero" />
                <img src="/graph.png" alt="hero" className='absolute top-[30%] left-[-10%]' />
            </div>
        </div>
        <img className='sm:hidden' src='/smallBg.png'/>
        </>
    )
}

export default HeroImage