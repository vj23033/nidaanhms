import React from 'react'

const FeatureCard = ({ title, description, image , classNames }) => {
    return (
        <div className={"bg-[color:var(--blue-violet)] p-[30px] rounded-[8px] flex flex-col gap-[8px] " + classNames}>
            <h4 className='text-[length:var(--heading-h4)] font-bold'>{title}</h4>
            <p className='text-[length:var(--md-text)] text-[color:var(--grey)]'>{description}</p>
            <img src={image} alt={title} className='mt-[40px] h-full' />
        </div>
    )
}

export default FeatureCard