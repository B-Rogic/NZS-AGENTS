import React from 'react'

type Props = {
  setActiveTab: (id: string) => void;
  activeTab: string;
  activeTabArray: string[];
  num?: number
}

const ActiveTabRadius = ({setActiveTab, activeTab, activeTabArray, num}: Props) => {
  return (
    <div className="flex p-1 rounded-full items-center bg-lightgreentrans w-full">
      {activeTabArray.map((active, index) => (
        <div key={index} onClick={() => setActiveTab(active)} className={`flex justify-center items-center p-3 rounded-full flex-grow ${activeTab === active && "bg-superlightgreen"}`}>{active}</div>
      ))}
    </div>
  )
}

export default ActiveTabRadius