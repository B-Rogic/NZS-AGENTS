'use client'
import ActiveTabRadius from '@/app/components/ActiveTabRadius'
import { Button } from '@/app/components/Button'
import FilterTab from '@/app/components/FilterTab'
import FlexComponent from '@/app/components/FlexComponent'
import GlobalContainer from '@/app/components/GlobalContainer'
import MonthComponent from '@/app/components/MonthComponent'
import OnboardNew from '@/app/components/OnboardNew'
import { Barcode, Check, ChevronDown, QrCode, RefreshCcw, Settings2, Star } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import profile from '@/app/src/images/transactionProduct.png'

type Props = {}

const page = (props: Props) => {
    const [activeTab, setActiveTab] = useState<string>("Products")
    const [pay, setPay] = useState<boolean>(false)
    const [withdrawn, setWithdrawn] = useState<boolean>(false)
    const [activeTransTab, setActiveTransTab] = useState<string>("Completed")
    const [showTarget, setShowTarget] = useState<boolean>(false)
    const [filterTab, setFilterTab] = useState<string>("general")
    const [subFilterTab, setSubFilterTab] = useState<string>("restaurant");
    const filterTabArray = ["General", "Food & Beverage", "Fashion & Textile", "Cosmetic Brands", "Legal"];
    const subFilterTabArray = ["RESTAURANT", "PASTRIES", "DRINKS"];
    useEffect(() => {
        if(!withdrawn) return
        const timeout = setTimeout(() => {
            setWithdrawn(false);
        }, 1000)

        return () => clearTimeout(timeout)
    }, [withdrawn])
  return (
    <div className='overflow-y-auto h-screen bg-white pb-50'>
        <GlobalContainer className="flex flex-col gap-5">
            <FlexComponent>
                <h1 className='md:text-3xl text-xl font-light'>2k+ <span className='text-lightorange font-bold'>Transactions</span></h1>
                <div className="rounded-full bg-superlightgreen flex-shrink-0 text-major-green p-2">
                    View Code
                </div>
            </FlexComponent>
            <ActiveTabRadius activeTab={activeTab} setActiveTab={setActiveTab} activeTabArray={["Products", "Services"]} />
            <div className={`md:w-1/2 left-1/2 -translate-x-1/2 h-screen fixed bg-white/20 backdrop-blur-xl w-full top-0 z-1 ${pay || withdrawn ? "block" : "hidden"}`}></div>
            {activeTab === "Products" ? (
                <>
                    <div className="p-3 rounded-xl bg-gradient-trans flex flex-col gap-3">
                        <FlexComponent>
                            <p>Target Info</p>
                            <div className="flex gap-3 items-center">
                                <p>2025</p>
                                <MonthComponent lightOrange text='September' />
                                <ChevronDown strokeWidth={1} />
                            </div>
                        </FlexComponent>
                        <div className="w-full h-1 rounded-full bg-white overflow-hidden">
                            <div className="w-30 h-full bg-lightorange"></div>
                        </div>
                        <div className="flex items-center gap-2 relative">
                            <div className="rounded-full p-1 text-white bg-lightorange">
                                <RefreshCcw strokeWidth={1} size={30} />
                            </div>
                            <div onClick={() => setShowTarget(!showTarget)} className="flex items-center gap-2 text-majorgray cursor-pointer">
                                <p className="text-sm">EARNED (N)</p>
                                <ChevronDown strokeWidth={1} />
                            </div>
                            <p>2,542,522.34</p>
                            <div className={`absolute top-12 left-0 bg-white rounded-lg shadow overflow-hidden ${showTarget ? "block" : "hidden"}`}>
                                <div className="flex flex-col gap-3">
                                    <div className="pb-2 border-b border-majorgray px-4 pt-4">
                                        <p className="semibold md:text-md text-sm">20% of Target Reached</p>
                                    </div>
                                    <div className="flex gap-3 items-start hover:bg-lightgray px-4 py-2 cursor-pointer">
                                        <Star strokeWidth={1} size={20} />
                                        <div className="flex flex-col gap-1">
                                            <p className="md:text-md text-sm">Vendors Reached</p>
                                            <span className="text-sm text-majorgray">200</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 items-start hover:bg-lightgray px-4 py-2 cursor-pointer">
                                        <Star strokeWidth={1} size={20} />
                                        <div className="flex flex-col gap-1">
                                            <p className="md:text-md text-sm">Vendors Target</p>
                                            <span className="text-sm text-majorgray">1,000</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 items-start hover:bg-lightgray px-4 py-2 cursor-pointer">
                                        <Star strokeWidth={1} size={20} />
                                        <div className="flex flex-col gap-1">
                                            <p className="md:text-md text-sm">Vendors Left</p>
                                            <span className="text-sm text-majorgray">800</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 overflow-x-auto">
                        {filterTabArray.map((tab, index) =>  (
                            <div onClick={() => setFilterTab(tab.toLowerCase())} key={index} className={`py-2 flex-shrink-0 ${filterTab === tab.toLowerCase() ? "border-b-2 border-lightorange text-lightorange" : 'text-majorgray'}`}>{tab}</div>
                        ))}
                    </div>
                    <FilterTab orange subFilterTabArray={subFilterTabArray} setSubFilterTab={setSubFilterTab} subFilterTab={subFilterTab} />
                    <ActiveTabRadius
                        activeTab={activeTransTab}
                        setActiveTab={setActiveTransTab}
                        activeTabArray={["Completed", "Pending"]}
                    />
                    <div className="flex flex-col w-full gap-3">
                        <div className="flex items-center justify-between md:p-4 p-2 rounded-2xl bg-superlightgreen">
                            <div className="flex items-center md:gap-3">
                                <div className="bg-superlightgreen shadow p-2 rounded-xl">
                                    <QrCode strokeWidth={1} />
                                </div>
                                <p className="text-majorgray md:text-md text-sm">
                                    30 Sep . Gucci Shoes
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="bg-lightorange shadow p-2 rounded-full md:text-md text-sm">
                                    INCOMING
                                </div>
                                <ChevronDown strokeWidth={1} />
                            </div>
                        </div>
                        <div className="md:p-4 p-2 rounded-2xl bg-superlightgreen flex flex-col gap-3">
                            <Image src={profile} width={1000} height={1000} alt='profile' className='w-full rounded-2xl md:h-50 h-40 ' />
                        </div>
                        <div className="flex justify-between items-center">
                            <h1 className='md:text-3xl text-xl font-bold'>PRODUCT DETAILS</h1>
                            <div className="flex items-center gap-3">
                                <div className="bg-lightorange shadow p-2 rounded-full md:text-md text-sm">
                                    INCOMING
                                </div>
                                <ChevronDown strokeWidth={1} />
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-col gap-3">
                                <div className="flex justify-between gap-3 w-full">
                                    <div className="flex flex-col gap-3">
                                        <p className="text-majorgray">Product Type</p>
                                        <p className="text-lg">Shoes</p>
                                    </div>
                                    <div className="flex flex-col w-40">
                                        <Button border text='8:00 AM - 11:00 AM' className='p-2 md:text-md text-sm' />
                                        <p>September 30, 2024</p>
                                    </div>
                                </div>
                                <div className="flex justify-between gap-3 w-full">
                                    <div className="flex flex-col gap-3">
                                        <p className="majorgray md:text-md:text-sm">Description</p>
                                        <p>The perfect T-shirt for when you want to feel at ease but still stylish...</p>
                                    </div>
                                    <div className="flex flex-col gap-3 flex-shrink-0 w-40">
                                        <p className="text-majorgray md:text-md text-sm">Order Location</p>
                                        <p>Umuhia, Abia</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white flex flex-col gap-3">
                            <div className="flex justify-between w-full">

                                <div className="flex flex-col gap-3">
                                    <div className="flex flex-col gap-3">
                                        <p className="text-majorgray">Extimated Arrival</p>
                                        <p>11 Hours</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <div className="flex flex-col gap-3">
                                        <p className="text-majorgray">Approximate Distance</p>
                                        <p>500 km</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between w-full items-center">
                                <p className="text-majorgray md:text-md text-sm">Size</p>
                                <div className="w-40">
                                    <Button text='XL' className='p-4' />
                                </div>
                            </div>
                            <div className="flex justify-between w-full items-center">
                                <p className="text-majorgray md:text-md text-sm">Price (NGN)</p>
                                <div className="w-40 flex justify-start">
                                    <div className="bg-lightgray rounded-full py-2 px-5 text-xl font-bold ">3,000.00</div>
                                </div>
                            </div>
                            <div className="flex justify-between w-full items-center">
                                <p className="text-majorgray md:text-md text-sm">Delivery</p>
                                <div className="w-40 flex justify-start">
                                    <div className="bg-lightgray rounded-full py-2 px-5 text-xl ">DHL</div>
                                </div>
                            </div>
                            <div className="flex justify-between w-full items-center">
                                <p className="text-majorgray md:text-md text-sm">Commission (%)</p>
                                <div className="w-40 flex justify-start">
                                    <div className="bg-lightgray rounded-full py-2 px-5 text-xl font-bold ">4%</div>
                                </div>
                            </div>
                            <div className={`${pay ? "flex flex-col p-3 md:w-[40%] w-80 left-1/2 -translate-x-1/2 rounded-2xl border border-majorgray fixed bg-white top-1/2 -translate-y-1/2 z-2" : "hidden"}`}>
                                <div className={`flex flex-col gap-3`}>
                                    <div className="flex flex-col gap-3 bg-lightgreen p-3 rounded-xl">
                                        <p>Wallet Info</p>
                                        <div className="flex items-center gap-2 relative">
                                            <div className="rounded-full p-1 text-white bg-lightorange">
                                                <RefreshCcw strokeWidth={1} size={30} />
                                            </div>
                                            <div onClick={() => setShowTarget(!showTarget)} className="flex items-center gap-2 text-majorgray cursor-pointer">
                                                <p className="text-sm">EARNED (N)</p>
                                                <ChevronDown strokeWidth={1} />
                                            </div>
                                            <p>2,542,522.34</p>
                                            {/* <div className={`absolute top-12 left-0 bg-white rounded-lg shadow overflow-hidden ${showTarget ? "block" : "hidden"}`}>
                                                <div className="flex flex-col gap-3">
                                                    <div className="pb-2 border-b border-majorgray px-4 pt-4">
                                                        <p className="semibold md:text-md text-sm">20% of Target Reached</p>
                                                    </div>
                                                    <div className="flex gap-3 items-start hover:bg-lightgray px-4 py-2 cursor-pointer">
                                                        <Star strokeWidth={1} size={20} />
                                                        <div className="flex flex-col gap-1">
                                                            <p className="md:text-md text-sm">Vendors Reached</p>
                                                            <span className="text-sm text-majorgray">200</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-3 items-start hover:bg-lightgray px-4 py-2 cursor-pointer">
                                                        <Star strokeWidth={1} size={20} />
                                                        <div className="flex flex-col gap-1">
                                                            <p className="md:text-md text-sm">Vendors Target</p>
                                                            <span className="text-sm text-majorgray">1,000</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-3 items-start hover:bg-lightgray px-4 py-2 cursor-pointer">
                                                        <Star strokeWidth={1} size={20} />
                                                        <div className="flex flex-col gap-1">
                                                            <p className="md:text-md text-sm">Vendors Left</p>
                                                            <span className="text-sm text-majorgray">800</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                    <p className="font-bold md:text-2xl text-xl text-center">WITHDRAW TO YOUR ACCOUNT</p>
                                    <p className="md:text-md text-sm text-majorgray text-center">Business details are confidential and will only be changed with consent of the vendor.</p>
                                    <div className="grid grid-cols-2 gap-3">
                                        <Button onClick={() => setPay(false)} border={true} className='p-2' text='Nope!' />
                                        <Button onClick={() => {setPay(false), setWithdrawn(true)}} className='p-2' text='Continue' />
                                    </div>
                                </div>
                            </div>
                            <div className={`${withdrawn ? "flex flex-col p-3 md:w-[40%] w-80 left-1/2 -translate-x-1/2 rounded-2xl border border-majorgray fixed bg-white top-1/2 -translate-y-1/2 z-2" : "hidden"}`}>
                                <div className={`flex flex-col gap-3 items-center`}>
                                    <p className="font-bold md:text-2xl text-xl text-center">FUNDS WITHDRAWN</p>
                                    <div className="md:w-8 md:h-8 rounded-full w-6 h-6 flex justify-center items-center bg-lightorange text-lightorange"><Check strokeWidth={1} /></div>
                                    <p className='text-majorgray'>Transfer Processing...</p>
                                </div>
                            </div>
                            <div onClick={() => setPay(true)} className="flex justify-between w-full items-center">
                                <p className="text-lightorange md:text-md text-sm flex gap-3 items-center">Withdraw (NGN) <ChevronDown strokeWidth={1} /></p>
                                <div className="w-40 flex justify-start">
                                    <div className="bg-lightorange rounded-full py-2 px-5 text-xl font-bold">120.00</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <></>
            )}
        </GlobalContainer>
    </div>
  )
}

export default page