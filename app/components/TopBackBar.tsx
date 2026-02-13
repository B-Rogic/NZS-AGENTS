import React from 'react'
import FlexComponent from './FlexComponent'
import { ChevronLeftIcon } from 'flowbite-react'

type Props = {
    text: string;
    handleClick: (id:boolean) => void
}

const TopBackBar = ({text, handleClick}: Props) => {
  return (
    <FlexComponent>
        <ChevronLeftIcon
        onClick={() => handleClick(false)}
        className="cursor-pointer"
        strokeWidth={1}
        fontSize={40}
        />
        <p className="font-extrabold mx-auto">
        {text}
        </p>
    </FlexComponent>
  )
}

export default TopBackBar