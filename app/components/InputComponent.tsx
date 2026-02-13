import React, { forwardRef } from 'react'

type Props = {
    inputId?: string;
    inputType?: string;
    inputPlaceholder?: string;
    handleChange?: (id: any) => void;
    handleKeyDown?: (id: any) => void;
    value?: any, 
    className?: string
}

const InputComponent = forwardRef<HTMLInputElement, Props>(({handleChange, handleKeyDown, inputType, inputId, value, inputPlaceholder, className}, ref) => {
  return (
    <input
        ref={ref}
        onChange={handleChange}
        defaultValue={handleChange ? undefined : (value ?? "")}
        type={inputType}
        id={inputId}
        value={handleChange ? (value ?? "") : undefined}
        className={`outline-none border border-lightgray rounded-xl w-full p-3 ${className}`}
        placeholder={inputPlaceholder}
        onKeyDown={handleKeyDown}
    />
  )
})

export default InputComponent