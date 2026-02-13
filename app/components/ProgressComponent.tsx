import { Check } from 'lucide-react'
import React from 'react'

type Props = {
    index: number, 
    currentIndex: number, 
    step: string | undefined
}

const ProgressComponent = ({currentIndex, index, step}: Props) => {
  return (
    <div
        className="flex flex-col gap-3 cursor-pointer items-center w-16"
    >
        <div
        className={`flex justify-center items-center rounded-full md:w-8 md:h-8 h-6 w-6 ${currentIndex === index ? "text-white bg-majororange" : currentIndex > index ? "bg-lightorange" : "text-majorgray bg-lightgray"} text-center font-bold`}
        >
        {currentIndex > index ? (
            <Check size={20} strokeWidth={3} className="text-lightgray" />
        ) : (
            index
        )}
        </div>
        <p className="text-center md:px-10 md:text-md text-[12px] font-bold">
        {step}
        </p>
    </div>
  )
}

export default ProgressComponent