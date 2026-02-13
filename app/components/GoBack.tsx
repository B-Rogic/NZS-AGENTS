'use client'
import React, { useEffect, useState } from 'react'
import { useProgress } from '../contexts/OnboardingContext'
import { useRouter } from 'next/navigation';
import { ChevronLeftIcon } from 'flowbite-react';
import FlexComponent from './FlexComponent';

type Props = {
    text:string;
}

const GoBack = ({text}: Props) => {
    const {accountTypeValue} = useProgress()
    const router = useRouter();
    const [mounted, setMounted] = useState<boolean>(false)

    useEffect(() => {
      setMounted(true) 
    }, [])
  return (
    <FlexComponent>
        <ChevronLeftIcon
        className="cursor-pointer"
        onClick={() => router.back()}
        strokeWidth={1}
        fontSize={40}
        color="#e6e6e6"
        />
        <p className="font-extrabold mx-auto">
        {text} - {mounted && accountTypeValue}
        </p>
    </FlexComponent>
  )
}

export default GoBack