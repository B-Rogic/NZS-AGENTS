import React from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'

type Props = {
    size?: string; 
    progress?: any;
    strokeWidth?: number;
    orange?: boolean
}

const ProgressBar = ({size, progress, strokeWidth, orange}: Props) => {
  return (
    <CircularProgressbar
        className={`${size || 'w-15'}`}
        value={progress || 0}
        strokeWidth={strokeWidth ?? 10}
        styles={buildStyles({
            pathColor: orange ? "#ff9900" :"#006838",
            trailColor: orange ? "#e0932780" : "#00683810",
        })}
    />
  )
}

export default ProgressBar