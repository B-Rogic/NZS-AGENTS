'use client'
import React, { useState } from 'react'

interface Props{
    text: string;
    className?: string;
    orange?: boolean
}

export const ButtonSimulation = ({text, className, orange}: Props) => {
  const [active, setActive] = useState<string>("")
  return (
        <div onClick={() => setActive(text)} className={`rounded-full p-2 md:text-md text-sm flex-shrink-0 ${active === text ? (orange ? "bg-verydark text-superlightorange" : "bg-majorgreen text-lightgreen") : (orange ? "text-lightgray bg-transparent" : "bg-lightgreen text-majorgreen")}`}>{text}</div>
  )
}