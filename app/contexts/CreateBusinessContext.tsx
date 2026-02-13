'use client'
import React, { ReactNode, useState, createContext, useContext } from "react";

interface ProviderContextType {
    addProduct: boolean;
    setAddProduct: (id: boolean) => void
}

const ProviderContext = createContext<ProviderContextType | undefined>(undefined)

interface Prop {
    children: ReactNode
}

export const CreateBusinessContext = ({children}: Prop) => {
    const [addProduct, setAddProduct] = useState<boolean>(false)
    return(
        <ProviderContext.Provider value={{addProduct, setAddProduct}}>
            {children}
        </ProviderContext.Provider>
    )
} 

export const useProductProvider = () => {
    const provider = useContext(ProviderContext);
    if(!provider) throw new Error("useContext must be within productProvider") 
    return provider
}