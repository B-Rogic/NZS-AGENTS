import React from 'react'

type Props = {
  setActiveTab: (id: string) => void;
  activeTab: string;
  activeTabArray: string[];
}

const ActiveTabStraight = ({setActiveTab, activeTab, activeTabArray}: Props) => {
  return (
    <div className="flex p-1 items-center bg-lightgreentrans w-full">
      {activeTabArray.map((active, index) => (
        <div key={index} onClick={() => setActiveTab(active)} className={`flex justify-center items-center p-3 flex-grow ${activeTab === active ? "bg-lightgreen border-b-2 border-majorgreen" : "border-b border-majorgray"}`}>{active}</div>
      ))}
    </div>
  )
}

export default ActiveTabStraight