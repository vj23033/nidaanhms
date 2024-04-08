import React from 'react'
import Button from '../components/UI/Button'

const UserRole = () => {

    const roles = [
        {
            role: "Receptionist",
            image: "/play.png"
        },
        {
            role: "Receptionist",
            image: "/play.png"
        },
        {
            role: "Receptionist",
            image: "/play.png"
        },
        {
            role: "Receptionist",
            image: "/play.png"
        },
        {
            role: "Receptionist",
            image: "/play.png"
        },
        {
            role: "Receptionist",
            image: "/play.png"
        },
        {
            role: "Receptionist",
            image: "/play.png"
        },
    ]

    return (
        <div className='sm:py-[60px] sm:px-[120px] px-[16px] py-[42px] bg-[#E6F0FF] flex flex-col gap-[20px]'>

            <div className='py-[20px] gap-4'>
                <h1 className='text-center text-[32px] leading-[40px] font-bold text-[#172026] lg:text-[44px] lg:leading-[72px]'> 8+ Versatile User Roles </h1>
                <p className='text-center text-[#71717A]'>Enhance hospital management efficiency with robust user role system,ensuring<br /> privacy, security, and tailored functionality for diverse healthcare professionals</p>
            </div>

            {/* <div className='flex flex-col gap-[60px]'> */}

                <div className=' flex justify-center flex-wrap sm:gap-[20px] gap-[10px] max-w-[1270px] mt-[20px]'>

                    {
                        roles?.map((role) => {
                            return <button className="bg-white border border-[#998100] rounded-3xl sm:px-[40px] sm:py-[25px] p-[14px] max-w-[175px] sm:max-w-none">
                                <div className='flex items-center gap-2'>
                                    <img src={role.image} alt="play" className='w-[20px] aspect-square sm:w-[50px]' />
                                    <h1 className='  font-bold text-[#172026] lg:text-[28px]'>{role.role}</h1>
                                </div>
                            </button>
                        })
                    }

                </div>

            {/* </div> */}
            <div className='flex justify-center py-8'>

                <Button bg={"purple"} text={"white"}>Get Started With Us</Button>

            </div>
        </div>
    )
}

export default UserRole