import { ChevronDown, Dot, X } from 'lucide-react'
import React, { ReactNode } from 'react'

type Props = {
    name?: string;
    amount?: number;
    sold?: number; 
    notsold?: number;
    children: ReactNode
}

const InventoryContent = ({name, amount, sold, notsold, children}: Props) => {
  return (
    <div className="flex flex-col p-3 rounded-xl bg-superlightgreen">
        <div className='flex justify-between md:gap-5  gap-2 items-center'>
            <div className="md:w-7 md:h-7 w-5 h-5 bg-majorgray text-white flex justify-center items-center rounded-full"><X strokeWidth={1} /></div>
            <p className='md:text-md text-sm'>{name}</p>
            <p className="text-majorgray">N{amount?.toLocaleString()}</p>
            <div className="flex items-start">
                <div className="flex justify-center items-start w-5 h-5">
                    <Dot className='pb-2 text-majorred' />
                </div>
                <p className="md:text-md text-sm"><span className="text-majorred">{sold}</span>/{notsold} <br /> Cartons</p>
            </div>
            <div className="flex items-center md:gap-4">
                <div className="rounded p-1 bg-superlightgreen md:text-md text-sm">EDIT PRODUCT</div>
                <ChevronDown strokeWidth={1} />
            </div>
        </div>
        {children}
    </div>
  )
}

export default InventoryContent