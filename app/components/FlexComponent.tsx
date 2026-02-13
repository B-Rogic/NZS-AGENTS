import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode
    className?: string; 
    items?: string
}

const FlexComponent = ({children, className, items}: Props) => {
  return (
    <div className={`flex justify-between ${items ? items : "items-center"} ${className}`}>{children}</div>
  )
}

export default FlexComponent