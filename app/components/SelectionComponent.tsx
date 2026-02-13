'use client'
import { Check } from 'lucide-react';
import React, { useState } from 'react'

interface accountType {
    name: string;
}

type Props = {
    account?: accountType[];
    headText: string;
}

const SelectionComponent = ({account, headText}: Props) => {
    const [activeSelectionType, setActiveSelectionType] = useState<string>("")
  return (
    <div className="flex border rounded-2xl flex-col gap-5 p-3 border-lightgray">
        <div className="flex items-center gap-3">
        <div className="flex justify-center items-center w-6 h-6 rounded-full bg-majorgreen">
            <div className="w-3 h-3 rounded-full bg-white"></div>
        </div>
        <p className="md:font-extrabold font-bold text-xl">
            {headText}
        </p>
        </div>
        <div className="flex flex-col gap-2">
            {account?.map((acc, index) => (
                <div
                key={index}
                onClick={() => setActiveSelectionType(acc.name)}
                className={`flex justify-between items-center p-3 rounded-2xl ${activeSelectionType === acc.name ? "bg-superlightgreen" : "border border-lightgray"}`}
                >
                {acc.name}
                {activeSelectionType === acc.name ? (
                    <Check color="#006838" strokeWidth={1} />
                ) : null}
                </div>
            ))}
        </div>
    </div>
  )
}

export default SelectionComponent