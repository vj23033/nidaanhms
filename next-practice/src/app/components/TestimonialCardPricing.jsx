import React from 'react'

const TestimonialCardPricing = ({ testimonial }) => {
  return (
    <div className='flex flex-col gap-[3px] justify-center items-center'>
          <img src={testimonial.image} alt='img' width={40} height={10} />
          <p className=''>“{testimonial.remark}”</p>
          <h3 className='text-[length:var(--lg-text)] font-bold mt-[10px]'>{testimonial.reviewer}</h3>
          <p className='text-[#71717A] text-[length:var(--md-text)]'>{testimonial.role}</p>
        </div>
  )
}

export default TestimonialCardPricing