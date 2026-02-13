import { ChevronLeft, ListFilter } from 'lucide-react'
import React from 'react'



type Props = {
    setSubFilterTab: (id: string) => void;
    subFilterTab: string;
    subFilterTabArray: string[];
    orange?: boolean
}

const FilterTab = ({setSubFilterTab, subFilterTab, subFilterTabArray, orange}: Props) => {
  return (
    <div className="flex items-center gap-3">
        <div className={`flex gap-3 items-center text-majorgray`}>
            <ListFilter strokeWidth={1} />
            <p>Filter</p>
            <ChevronLeft strokeWidth={1} />
        </div>
        <div className="flex gap-3 items-center md:overflow-x-auto overflow-x-scroll">
            {subFilterTabArray.map((tab, index) => (
                <div onClick={() => setSubFilterTab(tab.toLowerCase())} key={index} className={`md:text-sm text-[12px] p-2 rounded-full ${subFilterTab === tab.toLowerCase() ? (orange ? "bg-verydark text-superlightorange" : "bg-majorgreen text-superlightgreen") : (orange ? "bg-superlightorange text-verydark":"bg-superlightgreen text-majorgreen")} flex-shrink-0`}>{tab.toLocaleUpperCase()}</div>
            ))}
        </div>
    </div>
  )
}

export default FilterTab