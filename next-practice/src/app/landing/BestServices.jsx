import React from 'react'
import Button from '../components/UI/Button'

const BestServices = () => {
  return (
    <>

      <div className='flex flex-col gap-6'>
        <div className='w-full sm:py-[100px] sm:px-[120px] px-[16px] py-[42px] flex flex-col-reverse sm:flex-row gap-[40px] sm:gap-0'>
          <div className='w-[80%] sm:w-1/2 float-left relative mx-auto'>
            <img src="/badge.png" alt="badge" className='absolute top-[-5%] left-[-5%] hidden sm:block' />
            <img src='./best_service.png' alt='best_service' />
          </div>
          <div className='sm:w-1/2 flex flex-col'>

            <div className='pt-[50px]'>

              <p className='bg-[color:var(--light-grayish-blue)] text-[#201D49] py-[10px] px-[15px] max-w-fit rounded-[100px]'>Our Best Services</p>
              <h1 className='py-[20px] text-[length:var(--heading-h3)] font-extrabold'>Who can use our Products?</h1>
              <p className='text-[#71717A]'>Experience the value of NidaanHMS with our transparent pricing <br /> plans tailored to suit hospitals of all sizes.</p>

              <ul className="flex flex-col gap-y-3 py-8 lg:text-[18px]">
                <li className="flex items-center gap-x-2 text-[#36485C]">
                  <span>
                    <img src='./check-circle.png' alt="Checkmark" />
                  </span>
                  Small Clinics or laboratories
                </li>
                <li className="flex items-center gap-x-2 text-[#36485C]">
                  <span>
                    <img src='./check-circle.png' alt="Checkmark" />
                  </span>
                  Multi-specialty Hospitals
                </li>
                <li className="flex items-center gap-x-2 text-[#36485C]">
                  <span>
                    <img src='./check-circle.png' alt="Checkmark" />
                  </span>
                  Enterprise level Hospitals
                </li>
              </ul>

            </div>
            <span className='sm:self-auto self-center'>
            <Button bg={"purple"} text={"white"} >Check Pricing</Button>
            </span>
          </div>
        </div>

        {/* */}


      </div>


    </>
  )
}

export default BestServices





