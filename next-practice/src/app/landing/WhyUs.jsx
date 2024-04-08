import React from 'react'
import WhyUsCard from '../components/UI/WhyUsCard'

const WhyUs = () => {
  return (
    <section className='pt-6 pb-12 bg-[#030334] -z-10'>
      <h1 className='text-center text-[32px] leading-[40px] font-medium text-[#ffffff] lg:text-[64px] lg:leading-[72px]'>
        Why Choose Us
      </h1>
      <p className='text-center pt-6 text-white lg:text-sm lg:leading-7' style={{ color: "rgba(255, 255, 255, 0.7)" }}>
        Seamless Hospital management Software offering Ease of use, top notch security <br />and Round-the-clock Support for your peace of mind
      </p>

      <div className='flex justify-center sm:flex-row flex-col sm:gap-[15px] sm:px-[120px] px-[16px] gap-[15px] '>
        {/* <div className='rounded-lg border px-[40px] py-[40px]'> */}
          
          <WhyUsCard             
            title={"Easy to Use"}
            description={"Simplify complete Healthcare with Nidaan’s intuitive Interface."}
            image={'./check-circle.png'}
          />
        {/* </div> */}

        {/* <div className='rounded-lg border  px-[40px] py-[40px]'> */}
          
          <WhyUsCard             
            title={"Easy to Use"}
            description={"Simplify complete Healthcare with Nidaan’s intuitive Interface."}
            image={'./check-circle.png'}
          />
        {/* </div> */}
        {/* <div className='rounded-lg border border-[white] px-[40px] py-[40px]'> */}
          
          <WhyUsCard             
            title={"Easy to Use"}
            description={"Simplify complete Healthcare with Nidaan’s intuitive Interface."}
            image={'./check-circle.png'}
          />
        {/* </div> */}
      </div>
      
    </section>
  )
}

export default WhyUs