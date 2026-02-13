import React, { ReactNode } from 'react'

type Props = {
    text: string
    className?: string
    padding?: string
    lightOrange?: boolean
}

const MonthComponent = ({text, className, padding, lightOrange}: Props) => {
  return (
    <button className={`rounded-full ${padding ?? "p-1"} text-sm ${lightOrange ? "bg-superlightorange":"bg-lightgreen"} ${className}`}>{text}</button>
  )
}

export default MonthComponent