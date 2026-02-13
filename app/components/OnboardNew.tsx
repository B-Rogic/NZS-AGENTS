import { EllipsisIcon, EllipsisVertical, Plus } from 'lucide-react'
import React from 'react'
import FlexComponent from './FlexComponent'

type Props = {
    setAddProduct: (id: boolean) => void;
    show?: boolean;
    descNum?: number;
    addType: string;
    bg?: boolean;
    productNum?: number;
    orange?: boolean
}

const OnboardNew = ({setAddProduct, show, descNum, addType, bg, productNum, orange}: Props) => {
  return (
    <FlexComponent className={`py-3 ${bg || "bg-superlightgreen"}`}>
        {show ? (
            <div className={`flex gap-3 items-center border-s-2 ${orange ? "border-lightorange":"border-lemongreen"} ps-5`}>
                    <div className={`${orange ? "bg-lightorange":"bg-lemongreen"} rounded-full p-1 px-5`}>
                        <p className="font-bold text-sm">{descNum}</p>
                    </div>
                    <p className="font-bold text-sm">{addType}</p>
            </div>
        ) : (
            <div className={`flex gap-3 items-center border-s-2 ${orange ? "border-lightorange":"border-lemongreen"} ps-5`}>
                    <p className="font-bold text-sm">{addType}</p>
                    <div className="w-8 h-8 rounded-full flex justify-center items-center border-2 border-majorgray">{productNum}</div>
            </div>
        )}

        {show ? (
            <div onClick={() => { setAddProduct(true)}} className={`rounded-full w-10 h-10 ${orange ? "bg-lightorange":"bg-lemongreen"} text-white flex justify-center items-center me-2`}>
                <Plus />
            </div>
        ) : (
            <div className="flex items-center gap-3 text-majorgray p-2">
                <EllipsisIcon />
                <Plus />
            </div>
        )}

    </FlexComponent>
  )
}

export default OnboardNew