import React from 'react'

const Card = () => {

    const items = [
        "Customize website", "Customize website", "Customize website", "Customize website", "Customize website", "Customize website" ,"Customize website", "Customize website" ,"Customize website" ,"Customize website" ,"Customize website" ,"Customize website" ,"Customize website","Customize website"
    ]

    return (


        <div className=''>
            <div className='border items-center sm:mt-[100px] sm:mx-[270px] mx-[16px] dark:border-gray-700 rounded-lg gradient shadow overflow-hidden'>

                <div className='flex flex-col gap-[20px] py-[40px] px-[60px]'>
                    <span className='flex items-center justify-between w-full'>
                        <h1 className='text-[length:var(--heading-h1)] font-bold'>Only For <span className='text-[purple]'>Enterprise</span></h1>
                        <div className='flex h-[50px] py-[15px] px-[40px] gap-2 items-center rounded-3xl bg-[green]'>
                            <img src='./wtp.png' alt='wtp'></img>
                            <p className=' text-white '>Lets Talk!</p>
                        </div>
                    </span>
                    <p className='text-[#71717A]'>Elevate your enterprise with bespoke solutions. Enjoy<br />
                        custom packages at unbeatable rates.Lets discuss your <br />
                        unique needs and craft a tailored plan.Join us today for<br /> exceptional service and seamless partnership.
                    </p>
                    <div className='flex gap-[14px] flex-wrap sm:w-[80vw] w-[300vw] sm:ml-[-10vw] ml-[-30vw]'>
                        {
                            items.map((item)=>{
                                return <div className='gradient border border-[color:var(--purple)] px-2 py-1 rounded-[100px]'>{item}</div>
                            })
                        }
                    </div>
                </div>

            </div>

        </div>

    )
}

export default Card