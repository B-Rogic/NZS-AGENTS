'use client'
import React, { useEffect, useState, useRef } from 'react'
import GlobalContainer from '../components/GlobalContainer'
import { useProgress } from '../contexts/OnboardingContext'
import FlexComponent from '../components/FlexComponent'
import { ChevronLeft } from 'lucide-react'
import GoBack from '../components/GoBack'
import InputComponent from '../components/InputComponent'
import ProgressBar from '../components/ProgressBar'
import { Button } from '../components/Button'
import Link from 'next/link'

const page = () => {
    const [activeNumber, setActiveNumber] = useState(1);
    const number = [{id: 1, name: "Sign Up Mail",}, {id: 2, name: "Input Password"}]
    const [timer, setTimer] = useState(0)
    const [emailValue, setEmailValue] = useState("")
    const [code, setCode] = useState<(number[])>(new Array(4).fill(null))

    const inputRefs = useRef<(HTMLInputElement | null)[]>([])

    useEffect(() => {
        if(activeNumber > 1) return
       const timeout = setTimeout(() => {
        setTimer(prev => prev + 1)
       }, 1000) 

       return () => clearTimeout(timeout)
    }, [timer])

    const handleNextInput = (value: any, index: any) => {
        if(isNaN(value)) return
        const newCode = [...code];
        newCode[index] = value.slice(-1);
        setCode(newCode);

        if(value && index < code.length -1) {
            inputRefs.current[index + 1]?.focus()
        }
    }
    const handleNext = () => {
        setActiveNumber(prev => prev < number.length ? prev + 1 : prev)
    }
    const handlePrevInput = (value: string, index: number ) => {
        if(value === "Backspace" && !code[index] && index > 0) {
            inputRefs.current[index - 1]?.focus()
        } 
    }
  return (
    <GlobalContainer className='py-5 bg-white h-screen overflow-y-scroll flex flex-col gap-10'>
        <GoBack text='Login' />
        <div className="flex justify-between">
            {number.map((num) =>( 
                <div key={num.id} className="flex flex-col gap-3 items-center">
                    <div className={`w-6 h-6 rounded-full flex justify-center items-center ${activeNumber === num.id ? "bg-majorgreen text-white" : "bg-lightgray text-majorgray"}`}>
                        {num.id}
                    </div>
                    <p className='text-sm font-bold'>{num.name}</p>
                </div>
            ))}
        </div>
        {activeNumber === 1 ? (
            <div className='flex flex-col gap-10'>
                <div className="flex flex-col gap-3">
                    <p className="font-extrabold text-lg">Provide your Sign Up Email</p>
                    <span className="text-majorgray">Use only the mail you created your Naijazone Sales Agent account with...</span>
                </div>
                <InputComponent handleChange={(e) => setEmailValue(e.target.value)} value={emailValue} inputPlaceholder='someone@gmail.com' inputType='text' />
                <FlexComponent>
                    <div className="bg-lightgray rounded-lg p-1 text-sm">GET CODE</div>
                    <div className="flex justify-center items-center relative">
                        <ProgressBar size='w-20' progress={timer} />
                        <p className="absolute">{timer}</p>
                    </div>
                </FlexComponent>
                <div className="flex flex-col items-center gap-5">
                    <div className="flex flex-col gap-3 items-center">
                        <p className="font-extrabold text-xl">Enter confirmation code</p>
                        <span className='text-majorgray text-sm text-center'>A 4-digit code was sent to {emailValue.includes("com") ? emailValue : 'someone@gmail.com'}</span>
                    </div>
                    <div className="flex gap-2">
                        {code.map((co, index) => (
                            <InputComponent handleKeyDown={(e) => handlePrevInput(e.key, index)} key={index} handleChange={(e) => handleNextInput(e.target.value, index)} ref={(el) => {if(el)inputRefs.current[index] = el}} inputType='text' inputPlaceholder='' className='text-center' value={co} />
                        ))}
                    </div>
                </div>
            </div>
        ) : (
            <div className="flex flex-col gap-10 justify-between mb-auto">
                <div className="flex flex-col gap-3">
                    <p className="text-xl font-extrabold">Please type in your Password</p>
                    <span className="text-majorgray">Use only the password you created your Naijazone account with...</span>
                </div>
                <InputComponent inputType='password' inputPlaceholder='*********' />
            </div>
        )}
        {activeNumber === 2 ? (
            <Link href={"/welcome"}>
                <Button onClick={handleNext} text='CONFIRM' className='tracking-widest w-full p-3' />
            </Link>
        ) : (
            <Button onClick={handleNext} text='NEXT' className='tracking-widest w-full p-3' />
        )}
    </GlobalContainer>
  )
}

export default page