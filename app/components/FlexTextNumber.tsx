import React from 'react'

interface Props {
    text: string;
    desc?: string;
    textNum: number
    className?: string
    orange?: boolean
}

export const FlexTextNumber = ({text, desc, textNum, className, orange}: Props) => {
  return (
    <div className={`flex justify-between items-center ${className}`}>
        <div className="flex flex-col gap-2">
            <p>{text}</p>
            <span className="text-majorgray">{desc}</span>
        </div>
        <div className={`w-8 h-8 flex justify-center items-center text-white rounded-full ${orange ? "bg-lightorange" : "bg-majorgreen"} flex-shrink-0`}>
            <p>{textNum}</p>
        </div>
    </div>
  )
}