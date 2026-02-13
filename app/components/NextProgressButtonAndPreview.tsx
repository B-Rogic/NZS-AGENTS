import { ArrowRight, ChevronUp } from 'lucide-react';
import React, { ReactNode } from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import { Button } from './Button';

type Props = {
    previewTitle?: string;
    handleNext?: () => void;
    progress: number;
    children?: ReactNode

}

const NextProgressButtonAndPreview = ({handleNext, children, progress, previewTitle}: Props) => {
  return (
    <div className="flex flex-col gap-2 w-full">
        <div className="flex flex-col">
            <div className="flex justify-between items-center w-full rounded-xl bg-lightgray p-3">
                <p className="font-bold md:text-xl">{previewTitle}</p>
                <ChevronUp strokeWidth={1} />
            </div>
            {children}
        </div>
        <div className="flex gap-3 items-center w-full">
        <Button
            text="NEXT"
            className="tracking-widest p-3 w-full cursor-pointer"
            onClick={handleNext}
        />
        <div className="flex justify-center items-center relative">
            <CircularProgressbar
            className="w-15 mx-auto"
            value={progress}
            strokeWidth={10}
            styles={buildStyles({
                pathColor: "#006838",
                trailColor: "transparent",
            })}
            />
            <ArrowRight strokeWidth={1} color="#006838" className="absolute" />
        </div>
        </div>
    </div>
  )
}

export default NextProgressButtonAndPreview