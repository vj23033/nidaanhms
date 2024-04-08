import { cva } from 'class-variance-authority'
import React from 'react'

const Button = ({ bg, text, radius, ...props }) => {
  return (
    <button {...props} className={buttonVariants({ bg, text, radius })} />
  )
}

const buttonVariants = cva("sm:py-[15px] sm:px-[28px] px-[19px] py-[12px] text-[length:var(--md-text)]", {
    variants : {
        bg : {
            purple : "bg-[color:var(--purple)]",
            transparent : "bg-transparent"
        },
        text : {
            white : "text-white",
            black : "text-[color:var(--black)]"
        },
        radius : {
          full : "rounded-full",
          sm : "rounded-[10px]"
        }
    },
    defaultVariants : {
      bg : "purple",
      text : "white",
      radius : "sm"
    }
})

export default Button