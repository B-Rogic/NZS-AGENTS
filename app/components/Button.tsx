import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    border?: boolean
    className?: string
}

export const Button = ({text, className, border, ...props}: ButtonProps) => {
  return (
    <button className={`${border ? "border bg-white text-majorgreen border-majorgreen" : "bg-majorgreen text-white"} rounded-2xl ${className}`} {...props}>{text}</button>
  )
}