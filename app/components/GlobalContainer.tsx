import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode;
    className?: string;
}

const GlobalContainer = ({children, className}: Props) => {
  return (
    <div className={`p-5 w-full ${className}`}>
        {children}
    </div>
  )
}

export default GlobalContainer