'use client'
import Image from 'next/image';
import React, { useEffect } from 'react'
import Link from 'next/link';
import profile from '@/app/src/images/profile.png'
import { Check } from 'lucide-react';
import { Button } from '@/app/components/Button';
import { Spinner } from 'flowbite-react';
import ClipLoader from 'react-spinners/ClipLoader'
import { useRouter } from 'next/navigation';

type Props = {}

const page = () => {
    const router = useRouter()
    useEffect(() => {
        const timeout = setTimeout(() => {
            router.push('/sales-agent-dashboard/vendor')
        }, 5000)

        return () => {
            clearTimeout(timeout)
        }
    }, [])
    return (
      <div className="h-screen overflow-y-scroll">
            <div className="bg-gradient-agent h-screen flex flex-col justify-between pt-10 gap-10 items-center pb-20 md:px-5 px-3">
                <p className="font-extrabold text-2xl">Profile</p>
                <div className="flex border border-white justify-center items-center relative rounded-full p-1">
                    <Image src={profile} width={1000} height={1000} alt="profile" className="w-40 h-40 object-cover rounded-full" />
                </div>
                <div className="flex flex-col gap-4">
                    <p className="font-bold text-center">Hello Moses-Akpor Akpan</p>
                    <p className="text-majorgray">stanleyatabiishabor@gmail.com</p>
                </div>
                <div className="flex flex-col gap-3 items-center">
                    <p className="text-3xl font-bold">WELCOME MOSES</p>
                    <div className="w-7 h-7 flex justify-center items-center bg-lemongreen rounded-full">
                        <Check strokeWidth={1} />
                    </div>
                    <p className="text-sm text-majorgray">Logging in to your Dashboard</p>
                    <ClipLoader color='#006838' size={50}/>
                </div>
            </div>
        </div>
    )
}

export default page