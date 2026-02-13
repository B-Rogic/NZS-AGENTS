'use client'
import React, { useEffect, useState } from 'react'
import FlexComponent from '@/app/components/FlexComponent'
import GlobalContainer from '@/app/components/GlobalContainer'
import { ArrowUp, Check, ChevronDown, ChevronLeft, ListFilter, Plus, RefreshCcw, Settings2, Star, X } from 'lucide-react'
import MonthComponent from '@/app/components/MonthComponent'
import Image from 'next/image'
import profile from '@/app/src/images/profile.png'
import { useProductProvider } from '@/app/contexts/CreateBusinessContext' 
import ProgressComponent from '@/app/components/ProgressComponent'
import { FlexTextNumber } from '@/app/components/FlexTextNumber' 
import { ButtonSimulation } from '@/app/components/ButtonSimulation' 
import NextProgressButtonAndPreview from '@/app/components/NextProgressButtonAndPreview'
import Link from 'next/link'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import ProgressBar from '@/app/components/ProgressBar'
import InputComponent from '@/app/components/InputComponent'
import SelectionComponent from '@/app/components/SelectionComponent'
import food from '@/app/src/images/food.png'
import { Button } from '@/app/components/Button'
import FilterTab from '@/app/components/FilterTab'
import ActiveTabRadius from '@/app/components/ActiveTabRadius'
import ActiveTabStraight from '@/app/components/ActiveTabStraight'
import OnboardNew from '@/app/components/OnboardNew'
import InventoryContent from '@/app/components/InventoryContent'

const page = () => {
    const [activeTab, setActiveTab] = useState<string>("Products")
    const [activeTabStraight, setActiveTabStraight] = useState<string>("IN-STOCK")
    const [activeNumber, setActiveNumber] = useState<number>(1);
    const [activeInventoryNumber, setActiveInventoryNumber] = useState<number>(1)
    const [addInventory, setAddInventory] = useState<boolean>(false);
    const [inventoryActiveTab, setInventoryActiveTab] = useState<string>("High Selling")

    const [showTarget, setShowTarget] = useState<boolean>(false)

    const [edit, setEdit] = useState<boolean>(false)

    const {setAddProduct, addProduct} = useProductProvider()

    const [editBusiness, setEditBusiness] = useState<boolean>(false);
    const [granted, setGranted] = useState<boolean>(false)
    const [permission, setPermission] = useState<boolean>(false)
    const [viewInventory, setViewInventory] = useState<boolean>();

    const [filterTab, setFilterTab] = useState<string>("general")
    const [subFilterTab, setSubFilterTab] = useState<string>("restaurant");
    const [subInventoryFilterTab, setSubInventoryFilterTab] = useState<string>("unit");
    const [leavingBusiness, setLeavingBusiness] = useState<boolean>()
    const activeNumberArray = [
        {name: "Business Description", id: 1},
        {name: "Business Info", id: 2},
        {name: "Payment Info", id: 3},
        {name: "Preview", id: 4},
    ]
    const editBusinessArray = [
        {name: "Business Description", id: 1},
        {name: "Business Info", id: 2},
        {name: "Payment Info", id: 3},
        {name: "Preview", id: 4},
    ]
    const considerationSelection = [{
        name: "Health Regulation", 
    }, {
        name: "Age-based Regulation"
    }, {
        name: "Safety Regulation"
    }]
    const progress = (activeNumber / activeNumberArray.length) * 100;
    const inventoryProgress = (activeInventoryNumber / editBusinessArray.length) * 100;
    const resetActiveNumber = () => {
        setActiveNumber(1);
    }
    const resetActiveInventoryNumber = () => {
        setActiveInventoryNumber(1);
    }

    useEffect(() => {
        if(!permission) return
        setTimeout(() => {
            setPermission(false);
            setEditBusiness(false)
            setGranted(true)
            setAddProduct(true)
        }, 5000)
    }, [permission, editBusiness])

    const activeSector = ["retail", "food & beverage", "healthcare", "construction", "automotive", "technology & it", "manufacturing", "fashion & textiles", "arts & crafts"]

    const filterTabArray = ["General", "Food & Beverage", "Fashion & Textile", "Cosmetic Brands", "Legal"];
    const inventoryTabArray = ["unit", "status", "category", "price"];
    const subFilterTabArray = ["RESTAURANT", "PASTRIES", "DRINKS"];

    const state = ['UMUAHIA', 'JO', 'AKWA-IBOM', 'ANAMBRA', 'BAUCHI', 'BAYELSA', 'DELTA', 'EBONYI', 'PLATEAU', 'NIGER', 'KOGI']
    const activeTabArrayRadius = ["Products", "Services"]
    const activeTabArrayStraight = ["IN-STOCK", "OUT OF STOCK"]
  return (
    <div className='h-screen overflow-x-hidden overflow-y-hidden'>
        <div className={`md:w-1/2 left-1/2 -translate-x-1/2 h-screen fixed bg-white/20 backdrop-blur-xl w-full top-0 z-1 ${editBusiness || permission || leavingBusiness ? "block" : "hidden"}`}></div>
        {granted ? (
            <>
                {edit ? (
                    <>
                        {viewInventory ? (
                            <div className='flex flex-col gap-5 overflow-y-scroll h-screen bg-white p-5'>
                                <FlexComponent>
                                    <ChevronLeft size={30} onClick={() => setEdit(false)} strokeWidth={1} />
                                    <p className="font-extrabold">Edit Business</p>
                                    <div onClick={() => {setViewInventory(false), setEdit(true)}}>
                                        <MonthComponent padding='p-2' text='View Business' />
                                    </div>
                                </FlexComponent>
                                <ActiveTabStraight activeTabArray={activeTabArrayStraight} setActiveTab={setActiveTabStraight} activeTab={activeTabStraight} />
                                {activeTabStraight === "IN-STOCK" ? (
                                    <>
                                        <FilterTab subFilterTabArray={inventoryTabArray} subFilterTab={subInventoryFilterTab} setSubFilterTab={setSubInventoryFilterTab} />
                                        <OnboardNew show={false} bg addType='NEW PRODUCT' productNum={5} setAddProduct={setAddInventory} />
                                        <ActiveTabRadius activeTab={inventoryActiveTab} setActiveTab={setInventoryActiveTab} activeTabArray={["High Selling", "Low Selling"]} />
                                        <InventoryContent name='Maggi' amount={1800} sold={10} notsold={43}>
                                            <></>
                                        </InventoryContent>
                                    </>
                                ) : (
                                    <>
                                        <FilterTab subFilterTabArray={inventoryTabArray} subFilterTab={subInventoryFilterTab} setSubFilterTab={setSubInventoryFilterTab} />
                                        <OnboardNew show={false} bg addType='NEW PRODUCT' productNum={5} setAddProduct={setAddInventory} />
                                        <InventoryContent name='Maggi' amount={1800} sold={10} notsold={43}>
                                            <></>
                                        </InventoryContent>
                                    </>
                                )}
                            </div>
                        ) : (
                            <GlobalContainer className='bg-white h-screen flex flex-col gap-5 justify-between overflow-y-auto'>
                                <FlexComponent>
                                    <ChevronLeft size={30} onClick={() => setEdit(false)} strokeWidth={1} />
                                    <p className="font-extrabold">Edit Business</p>
                                    <div onClick={() => setViewInventory(true)}>
                                        <MonthComponent padding='p-2' text='View Inventory' />
                                    </div>
                                </FlexComponent>
                                <FlexComponent items='items-start'>
                                    {editBusinessArray.map((number) => (
                                        <ProgressComponent key={number.id} currentIndex={activeInventoryNumber} index={number.id} step={number.name} />
                                    ))}
                                </FlexComponent>
                                {
                                    activeInventoryNumber === 1 ? (
                                        <>
                                            <div className='flex flex-col gap-2'>
                                                <p className="font-extrabold md:text-xl">
                                                    Select the right profile fo this business.
                                                </p>
                                                <p className="text-majorgray md:text-md text-sm">We provide multiple options so fell free to get super-specific!</p>
                                            </div>
                                            <FlexTextNumber text='Sector' desc='Select up to 2 options' textNum={11} />
                                            <div className="flex flex-wrap gap-3">
                                                {activeSector.map((sector, index) => (
                                                    <ButtonSimulation key={index} text={sector} />
                                                ))}
                                            </div>
                                            <FlexComponent>
                                                <p className="font-bold">Alade Eatery</p>
                                                <Image src={profile} width={1000} height={1000} alt='profile' className="w-5 h-5 rounded-full" />
                                            </FlexComponent>
                                        </>
                                    ) : activeInventoryNumber === 2 ? (
                                        <>
                                            <div className="flex flex-col gap-2">
                                                <p className="md:text-xl font-extrabold">Add your business information to get verified.</p>
                                                <p className="text-majorgray md:text-md text-sm">Our verification process is super-fast and your information is protected by our privacyt policy</p>
                                                <Link href={''} className='text-blue-500 underline'>View Here</Link>
                                            </div>
                                            <div className="rounded-xl bg-lightgreen p-5 flex flex-col gap-3">
                                                <div className="p-5 rounded-xl bg-white flex justify-center items-center relative">
                                                    <ProgressBar strokeWidth={5} progress={80} />
                                                    <ArrowUp strokeWidth={1.5} size={40} className='absolute text-majorgreen' />
                                                </div>
                                                <FlexComponent>
                                                    <p className="font-bold md:text-xl">YOUR LOGO</p>
                                                    <div className="flex items-center">
                                                        <MonthComponent text='Upload Logo' />
                                                        <ChevronDown strokeWidth={1} />
                                                    </div>
                                                </FlexComponent>
                                            </div>
                                            <div className="flex flex-col gap-3 w-full">
                                                <InputComponent value={null} inputPlaceholder='Registered Business Name' inputType='text' />
                                                <InputComponent value={null} inputPlaceholder='Briefly describe your business' inputType='text' />
                                                <p className='text-majorgray'>0/30</p>
                                                <InputComponent value={null} inputPlaceholder='CAC Registration Number' inputType='text' />
                                                <p className="text-majorgray">0/7</p>
                                            </div>
                                            <SelectionComponent headText='Consideration' account={considerationSelection} />
                                            <div className="flex flex-col gap-3">
                                                <FlexTextNumber text='State' desc='Available in Nigeria' textNum={9} />
                                                <div className="flex flex-wrap gap-3">
                                                    {state.map((sta, index) => (
                                                        <ButtonSimulation key={index} text={sta} />
                                                    ))}
                                                </div>
                                            </div>
                                        </>
                                    ) : activeInventoryNumber === 3 ? (
                                        <></>
                                    ) : (
                                        <></>
                                    )
                                }
                                <div className={`${leavingBusiness ? "flex" : "hidden"} flex-col gap-3 p-3 md:w-[40%] w-80 left-1/2 -translate-x-1/2 rounded-2xl border border-majorgray fixed bg-white top-1/2 -translate-y-1/2 z-2`}>
                                    <div onClick={() => setLeavingBusiness(false)} className='flex justify-center items-center bg-majorgray text-white md:w-7 md:h-7 h-5 w-5 rounded-full'><X strokeWidth={1} /></div>
                                    <p className="font-bold md:text-2xl text-xl text-center">LEAVING BUSINESS ACCESS?</p>
                                    <p className="md:text-md text-sm text-majorgray text-center">Business details are confidential and will only be changed with consent of the vendor.</p>
                                    <div className="grid grid-cols-2 gap-3">
                                        <Button onClick={() => setLeavingBusiness(false)} border={true} className='p-2' text='Nope!' />
                                        <Button onClick={() => {setLeavingBusiness(false), setEdit(false), setPermission(false), setGranted(false), setAddProduct(false), resetActiveInventoryNumber()}} className='p-2' text='Continue' />
                                    </div>
                                </div>
                                {activeInventoryNumber > activeNumberArray.length -1 ? (
                                    <NextProgressButtonAndPreview handleNext={() => setLeavingBusiness(true)} previewTitle='LEAVING BUSINESS' progress={inventoryProgress}></NextProgressButtonAndPreview>
                                ) : (
                                    <NextProgressButtonAndPreview handleNext={() => setActiveInventoryNumber(prev => prev > activeNumberArray.length - 1 ? prev : prev + 1)} previewTitle='BUSINESS INFO' progress={inventoryProgress}></NextProgressButtonAndPreview>
                                )}
                            </GlobalContainer>
                        )}
                    </>
                ) : (
                    <div className="overflow-y-scroll h-screen">
                        <GlobalContainer className="flex flex-col justify-between gap-5 bg-gradient-agent">
                            <h1 className="md:text-4xl text-2xl font-extrabold text-center">Request Granted</h1>
                            <div className="rounded-xl flex flex-col gap-4 mt-5">
                                <FlexComponent>
                                    <p className="md:text-md text-sm font-bold">Alade Eatery</p>
                                    <Image src={profile} width={1000} height={1000} alt='profile' className='w-8 h-8 rounded-full' />
                                </FlexComponent>
                                <p className="text-majorgray md:text-md text-sm">Top tasting Nigerian meals and natural ingredients for enjoyment and immediate consumption. Fresh, hot and ready to go!</p>
                                <div className="flex gap-3 overflow-x-auto">
                                    <div className="md:w-80 w-50 rounded-xl flex-shrink-0">
                                        <Image src={food} width={1000} height={1000} alt='food' className='w-full h-full object-cover' />
                                    </div>
                                    <div className="md:w-80 w-50 rounded-xl flex-shrink-0">
                                        <Image src={food} width={1000} height={1000} alt='food' className='w-full h-full object-cover' />
                                    </div>
                                    <div className="md:w-80 w-50 rounded-xl flex-shrink-0">
                                        <Image src={food} width={1000} height={1000} alt='food' className='w-full h-full object-cover' />
                                    </div>
                                    <div className="md:w-80 w-50 rounded-xl flex-shrink-0">
                                        <Image src={food} width={1000} height={1000} alt='food' className='w-full h-full object-cover' />
                                    </div>
                                </div>
                                <div className="flex md:gap-3 gap-2 items-center justify-end">
                                    <div className="md:w-3 md:h-3 w-2 h-2 rounded-full bg-majorgreen"></div>
                                    <div className="md:w-3 md:h-3 w-2 h-2 rounded-full bg-lightgreen"></div>
                                    <div className="md:w-3 md:h-3 w-2 h-2 rounded-full bg-lightgreen"></div>
                                    <div className="md:w-3 md:h-3 w-2 h-2 rounded-full bg-lightgreen"></div>
                                    <div className="md:w-3 md:h-3 w-2 h-2 rounded-full bg-lightgreen"></div>
                                    <div className="md:w-3 md:h-3 w-2 h-2 rounded-full bg-lightgreen"></div>
                                </div>
                                <FlexComponent>
                                    <div className="flex gap-2">
                                        <div className="rounded-xl bg-majorgreen text-white p-3">
                                            <Settings2 />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <p className="text-sm md:text-md text-lemongreen">Granted</p>
                                            <p className="font-bold md:text-lg text-md">Edit</p>
                                        </div>
                                    </div>
                                    <Button className='md:py-3 md:px-5 py-2 px-4' text='VIEW BUSINESS' />
                                </FlexComponent>
                            </div>
                            <div className="flex flex-col gap-3">
                                <FlexComponent>
                                    <h2 className='md:text-4xl text-2xl font-bold'>BUSINESS ACCESS</h2>
                                    <div className="w-7 h-7 rounded-full flex justify-center items-center bg-lemongreen text-majorgreen">
                                        <Check strokeWidth={1} />
                                    </div>
                                </FlexComponent>
                                <p className="text-center md:text-md text-sm text-majorgray">Note that changes to business payment info are unavailable to you...</p>
                            </div>
                            <Button onClick={() => setEdit(true)} text='CONTINUE' className='tracking-widest p-5 w-full' />
                        </GlobalContainer>
                    </div>
                )}
            </>
        ) : (
            <>
                {addProduct ? (
                    <GlobalContainer className='bg-white h-screen flex flex-col gap-5 justify-between overflow-y-auto'>
                        <FlexComponent>
                            <ChevronLeft size={30} onClick={() => setAddProduct(false)} strokeWidth={1} />
                            <p className="font-extrabold">Onboard Business</p>
                            <MonthComponent padding='p-2' text='View Code' />
                        </FlexComponent>
                        <FlexComponent items='items-start'>
                            {activeNumberArray.map((number) => (
                                <ProgressComponent key={number.id} currentIndex={activeNumber} index={number.id} step={number.name} />
                            ))}
                        </FlexComponent>
                        {
                            activeNumber === 1 ? (
                                <>
                                    <div className='flex flex-col gap-2'>
                                        <p className="font-extrabold md:text-xl">
                                            Select the right profile fo this business.
                                        </p>
                                        <p className="text-majorgray md:text-md text-sm">We provide multiple options so fell free to get super-specific!</p>
                                    </div>
                                    <FlexTextNumber text='Sector' desc='Select up to 2 options' textNum={11} />
                                    <div className="flex flex-wrap gap-3">
                                        {activeSector.map((sector, index) => (
                                            <ButtonSimulation key={index} text={sector} />
                                        ))}
                                    </div>
                                </>
                            ) : activeNumber === 2 ? (
                                <>
                                    <div className="flex flex-col gap-2">
                                        <p className="md:text-xl font-extrabold">Add your business information to get verified.</p>
                                        <p className="text-majorgray md:text-md text-sm">Our verification process is super-fast and your information is protected by our privacyt policy</p>
                                        <Link href={''} className='text-blue-500 underline'>View Here</Link>
                                    </div>
                                    <div className="rounded-xl bg-lightgreen p-5 flex flex-col gap-3">
                                        <div className="p-5 rounded-xl bg-white flex justify-center items-center relative">
                                            <ProgressBar strokeWidth={5} progress={80} />
                                            <ArrowUp strokeWidth={1.5} size={40} className='absolute text-majorgreen' />
                                        </div>
                                        <FlexComponent>
                                            <p className="font-bold md:text-xl">YOUR LOGO</p>
                                            <div className="flex items-center">
                                                <MonthComponent text='Upload Logo' />
                                                <ChevronDown strokeWidth={1} />
                                            </div>
                                        </FlexComponent>
                                    </div>
                                    <div className="flex flex-col gap-3 w-full">
                                        <InputComponent value={null} inputPlaceholder='Registered Business Name' inputType='text' />
                                        <InputComponent value={null} inputPlaceholder='Briefly describe your business' inputType='text' />
                                        <p className='text-majorgray'>0/30</p>
                                        <InputComponent value={null} inputPlaceholder='CAC Registration Number' inputType='text' />
                                        <p className="text-majorgray">0/7</p>
                                    </div>
                                    <SelectionComponent headText='Consideration' account={considerationSelection} />
                                    <div className="flex flex-col gap-3">
                                        <FlexTextNumber text='State' desc='Available in Nigeria' textNum={9} />
                                        <div className="flex flex-wrap gap-3">
                                            {state.map((sta, index) => (
                                                <ButtonSimulation key={index} text={sta} />
                                            ))}
                                        </div>
                                    </div>
                                </>
                            ) : activeNumber === 3 ? (
                                <></>
                            ) : (
                                <></>
                            )
                        }
                        <NextProgressButtonAndPreview handleNext={() => setActiveNumber(prev => prev > activeNumberArray.length - 1 ? prev : prev + 1)} previewTitle='BUSINESS INFO' progress={progress}></NextProgressButtonAndPreview>
                    </GlobalContainer>
                ) : (
                    <div className='overflow-y-auto h-screen'>
                        <GlobalContainer className="flex flex-col gap-5 bg-gradient-agent">
                            <FlexComponent>
                                <h1 className='text-3xl font-light'>My <span className='text-superlightgreen font-bold'>Vendors</span></h1>
                                <div className="rounded-full bg-superlightgreen text-major-green p-2">
                                    View Code
                                </div>
                            </FlexComponent>
                            <ActiveTabRadius activeTab={activeTab} setActiveTab={setActiveTab} activeTabArray={activeTabArrayRadius} />
                            {activeTab === "Products" ? (
                                <>
                                    <div className="p-3 rounded-xl bg-gradient-trans flex flex-col gap-3">
                                        <FlexComponent>
                                            <p>Target Info</p>
                                            <div className="flex gap-3 items-center">
                                                <p>2025</p>
                                                <MonthComponent text='September' />
                                                <ChevronDown strokeWidth={1} />
                                            </div>
                                        </FlexComponent>
                                        <div className="w-full h-1 rounded-full bg-white overflow-hidden">
                                            <div className="w-30 h-full bg-majorgreen"></div>
                                        </div>
                                        <div className="flex items-center gap-2 relative">
                                            <div className="rounded-full p-1 text-white bg-lemongreen">
                                                <RefreshCcw strokeWidth={1} size={30} />
                                            </div>
                                            <div onClick={() => setShowTarget(!showTarget)} className="flex items-center gap-2 text-majorgray cursor-pointer">
                                                <p className="text-sm">VENDORS REACEHD</p>
                                                <ChevronDown strokeWidth={1} />
                                            </div>
                                            <p>200</p>
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
                                            <div onClick={() => setFilterTab(tab.toLowerCase())} key={index} className={`py-2 flex-shrink-0 ${filterTab === tab.toLowerCase() ? "border-b-2 border-majorgreen text-majorgreen" : 'text-majorgray'}`}>{tab}</div>
                                        ))}
                                    </div>
                                    <FilterTab subFilterTabArray={subFilterTabArray} setSubFilterTab={setSubFilterTab} subFilterTab={subFilterTab} />
                                    <OnboardNew setAddProduct={setAddProduct} descNum={104} show addType='ONBOARDING NEW' />
                                    <FlexComponent>
                                        <p className="font-extrabold text-xl">2025</p>
                                        <div className="flex items-center gap-3">
                                            <MonthComponent text="September" />
                                            <ChevronDown strokeWidth={1} />
                                        </div>
                                    </FlexComponent>
                                    <div className='bg-superlightgreen p-3 rounded-xl mb-50'>
                                        <div className="flex gap-5 items-center justify-between ">
                                            <div className="flex items-center gap-3">
                                                <Image src={profile} width={1000} height={1000} alt='profile' className='w-15 h-15' />
                                                <div className="flex flex-col">
                                                    <div className="flex gap-5 items-center text-majorgray text-sm">
                                                        <p>30 Sep</p>
                                                        <p>. Seller</p>
                                                    </div>
                                                    <p>Timothy Ovunda</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="rounded-full p-1 px-3 font-bold">1,500</div>
                                                <ChevronDown strokeWidth={1} />
                                            </div>
                                        </div>
                                        <div className="bg-white p-3 rounded-xl flex flex-col gap-4 mt-5">
                                            <FlexComponent>
                                                <p className="md:text-md text-sm">Alade Eatery</p>
                                                <Image src={profile} width={1000} height={1000} alt='profile' className='w-8 h-8 rounded-full' />
                                            </FlexComponent>
                                            <p className="text-majorgray md:text-md text-sm">Top tasting Nigerian meals and natural ingredients for enjoyment and immediate consumption. Fresh, hot and ready to go!</p>
                                            <div className="flex gap-3 overflow-x-auto">
                                                <div className="md:w-80 w-50 rounded-xl flex-shrink-0">
                                                    <Image src={food} width={1000} height={1000} alt='food' className='w-full h-full object-cover' />
                                                </div>
                                                <div className="md:w-80 w-50 rounded-xl flex-shrink-0">
                                                    <Image src={food} width={1000} height={1000} alt='food' className='w-full h-full object-cover' />
                                                </div>
                                                <div className="md:w-80 w-50 rounded-xl flex-shrink-0">
                                                    <Image src={food} width={1000} height={1000} alt='food' className='w-full h-full object-cover' />
                                                </div>
                                                <div className="md:w-80 w-50 rounded-xl flex-shrink-0">
                                                    <Image src={food} width={1000} height={1000} alt='food' className='w-full h-full object-cover' />
                                                </div>
                                            </div>
                                            <div className="flex md:gap-3 gap-2 items-center justify-end">
                                                <div className="md:w-3 md:h-3 w-2 h-2 rounded-full bg-majorgreen"></div>
                                                <div className="md:w-3 md:h-3 w-2 h-2 rounded-full bg-lightgreen"></div>
                                                <div className="md:w-3 md:h-3 w-2 h-2 rounded-full bg-lightgreen"></div>
                                                <div className="md:w-3 md:h-3 w-2 h-2 rounded-full bg-lightgreen"></div>
                                                <div className="md:w-3 md:h-3 w-2 h-2 rounded-full bg-lightgreen"></div>
                                                <div className="md:w-3 md:h-3 w-2 h-2 rounded-full bg-lightgreen"></div>
                                            </div>
                                            <div className={`${editBusiness ? "flex" : "hidden"} flex-col gap-3 p-3 md:w-[40%] w-80 left-1/2 -translate-x-1/2 rounded-2xl border border-majorgray fixed bg-white top-1/2 -translate-y-1/2 z-2`}>
                                                <p className="font-bold md:text-2xl text-xl text-center">REQUEST TO EDIT BUSINESS?</p>
                                                <p className="md:text-md text-sm text-majorgray text-center">Business details are confidential and will only be changed with consent of the vendor.</p>
                                                <div className="grid grid-cols-2 gap-3">
                                                    <Button onClick={() => setEditBusiness(false)} border={true} className='p-2' text='Nope!' />
                                                    <Button onClick={() => {setPermission(true), setEditBusiness(false)}} className='p-2' text='Continue' />
                                                </div>
                                            </div>
                                            <div className={`${permission ? "flex" : "hidden"} flex-col items-center gap-3 p-3 md:w-[40%] w-80 left-1/2 -translate-x-1/2 rounded-2xl border border-majorgray fixed bg-white top-1/2 -translate-y-1/2 z-2`}>
                                                <p className="font-bold md:text-4xl text-2xl text-center">REQUEST SUBMITTED!</p>
                                                
                                                <div className="flex flex-col gap-2 items-center">
                                                    <div className="w-7 h-7 rounded-full flex justify-center items-center bg-lemongreen text-majorgreen">
                                                        <Check strokeWidth={1} />
                                                    </div>
                                                    <p className="text-majorgray md:text-md:text-sm text-center">Vendor Reviewing...</p>
                                                </div>
                                            </div>
                                            <FlexComponent>
                                                <div onClick={() => setEditBusiness(true)} className="flex gap-2">
                                                    <div className="rounded-xl bg-majorgreen text-white p-3">
                                                        <Settings2 />
                                                    </div>
                                                    <div className="flex flex-col gap-1">
                                                        <p className="text-majorgray text-sm md:text-md">Request</p>
                                                        <p className="font-bold md:text-lg text-md">Edit</p>
                                                    </div>
                                                </div>
                                                <Button className='md:py-3 md:px-5 py-2 px-4' text='VIEW BUSINESS' />
                                            </FlexComponent>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="p-3 rounded-xl bg-gradient-trans flex flex-col gap-3">
                                        <FlexComponent>
                                            <p>Target Info</p>
                                            <div className="flex gap-3 items-center">
                                                <p>2025</p>
                                                <MonthComponent text='September' />
                                                <ChevronDown strokeWidth={1} />
                                            </div>
                                        </FlexComponent>
                                        <div className="w-full h-1 rounded-full bg-white overflow-hidden">
                                            <div className="w-30 h-full bg-majorgreen"></div>
                                        </div>
                                        <div className="flex items-center gap-2 relative">
                                            <div className="rounded-full p-1 text-white bg-lemongreen">
                                                <RefreshCcw strokeWidth={1} size={30} />
                                            </div>
                                            <div onClick={() => setShowTarget(!showTarget)} className="flex items-center gap-2 text-majorgray cursor-pointer">
                                                <p className="text-sm">VENDORS REACEHD</p>
                                                <ChevronDown strokeWidth={1} />
                                            </div>
                                            <p>200</p>
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
                                            <div onClick={() => setFilterTab(tab.toLowerCase())} key={index} className={`py-2 flex-shrink-0 ${filterTab === tab.toLowerCase() ? "border-b-2 border-majorgreen text-majorgreen" : 'text-majorgray'}`}>{tab}</div>
                                        ))}
                                    </div>
                                    <FilterTab subFilterTabArray={subFilterTabArray} setSubFilterTab={setSubFilterTab} subFilterTab={subFilterTab} />
                                    <OnboardNew setAddProduct={setAddProduct} descNum={104} show addType='ONBOARDING NEW' />
                                    <FlexComponent>
                                        <p className="font-extrabold text-xl">2025</p>
                                        <div className="flex items-center gap-3">
                                            <MonthComponent text="September" />
                                            <ChevronDown strokeWidth={1} />
                                        </div>
                                    </FlexComponent>
                                    <div className='bg-superlightgreen p-3 rounded-xl mb-50'>
                                        <div className="flex gap-5 items-center justify-between ">
                                            <div className="flex items-center gap-3">
                                                <Image src={profile} width={1000} height={1000} alt='profile' className='w-15 h-15' />
                                                <div className="flex flex-col">
                                                    <div className="flex gap-5 items-center text-majorgray text-sm">
                                                        <p>30 Sep</p>
                                                        <p>. Seller</p>
                                                    </div>
                                                    <p>Timothy Ovunda</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="rounded-full p-1 px-3 font-bold">1,500</div>
                                                <ChevronDown strokeWidth={1} />
                                            </div>
                                        </div>
                                        <div className="bg-white p-3 rounded-xl flex flex-col gap-4 mt-5">
                                            <FlexComponent>
                                                <p className="md:text-md text-sm">Alade Eatery</p>
                                                <Image src={profile} width={1000} height={1000} alt='profile' className='w-8 h-8 rounded-full' />
                                            </FlexComponent>
                                            <p className="text-majorgray md:text-md text-sm">Top tasting Nigerian meals and natural ingredients for enjoyment and immediate consumption. Fresh, hot and ready to go!</p>
                                            <div className="flex gap-3 overflow-x-auto">
                                                <div className="md:w-80 w-50 rounded-xl flex-shrink-0">
                                                    <Image src={food} width={1000} height={1000} alt='food' className='w-full h-full object-cover' />
                                                </div>
                                                <div className="md:w-80 w-50 rounded-xl flex-shrink-0">
                                                    <Image src={food} width={1000} height={1000} alt='food' className='w-full h-full object-cover' />
                                                </div>
                                                <div className="md:w-80 w-50 rounded-xl flex-shrink-0">
                                                    <Image src={food} width={1000} height={1000} alt='food' className='w-full h-full object-cover' />
                                                </div>
                                                <div className="md:w-80 w-50 rounded-xl flex-shrink-0">
                                                    <Image src={food} width={1000} height={1000} alt='food' className='w-full h-full object-cover' />
                                                </div>
                                            </div>
                                            <div className="flex md:gap-3 gap-2 items-center justify-end">
                                                <div className="md:w-3 md:h-3 w-2 h-2 rounded-full bg-majorgreen"></div>
                                                <div className="md:w-3 md:h-3 w-2 h-2 rounded-full bg-lightgreen"></div>
                                                <div className="md:w-3 md:h-3 w-2 h-2 rounded-full bg-lightgreen"></div>
                                                <div className="md:w-3 md:h-3 w-2 h-2 rounded-full bg-lightgreen"></div>
                                                <div className="md:w-3 md:h-3 w-2 h-2 rounded-full bg-lightgreen"></div>
                                                <div className="md:w-3 md:h-3 w-2 h-2 rounded-full bg-lightgreen"></div>
                                            </div>
                                            <div className={`${editBusiness ? "flex" : "hidden"} flex-col gap-3 p-3 md:w-[40%] w-80 left-1/2 -translate-x-1/2 rounded-2xl border border-majorgray fixed bg-white top-1/2 -translate-y-1/2 z-2`}>
                                                <p className="font-bold md:text-2xl text-xl text-center">REQUEST TO EDIT BUSINESS?</p>
                                                <p className="md:text-md text-sm text-majorgray text-center">Business details are confidential and will only be changed with consent of the vendor.</p>
                                                <div className="grid grid-cols-2 gap-3">
                                                    <Button onClick={() => setEditBusiness(false)} border={true} className='p-2' text='Nope!' />
                                                    <Button onClick={() => {setPermission(true), setEditBusiness(false)}} className='p-2' text='Continue' />
                                                </div>
                                            </div>
                                            <div className={`${permission ? "flex" : "hidden"} flex-col items-center gap-3 p-3 md:w-[40%] w-80 left-1/2 -translate-x-1/2 rounded-2xl border border-majorgray fixed bg-white top-1/2 -translate-y-1/2 z-2`}>
                                                <p className="font-bold md:text-4xl text-2xl text-center">REQUEST SUBMITTED!</p>
                                                
                                                <div className="flex flex-col gap-2 items-center">
                                                    <div className="w-7 h-7 rounded-full flex justify-center items-center bg-lemongreen text-majorgreen">
                                                        <Check strokeWidth={1} />
                                                    </div>
                                                    <p className="text-majorgray md:text-md:text-sm text-center">Vendor Reviewing...</p>
                                                </div>
                                            </div>
                                            <FlexComponent>
                                                <div onClick={() => setEditBusiness(true)} className="flex gap-2">
                                                    <div className="rounded-xl bg-majorgreen text-white p-3">
                                                        <Settings2 />
                                                    </div>
                                                    <div className="flex flex-col gap-1">
                                                        <p className="text-majorgray text-sm md:text-md">Request</p>
                                                        <p className="font-bold md:text-lg text-md">Edit</p>
                                                    </div>
                                                </div>
                                                <Button className='md:py-3 md:px-5 py-2 px-4' text='VIEW BUSINESS' />
                                            </FlexComponent>
                                        </div>
                                    </div>
                                </>
                            )}
                        </GlobalContainer>
                    </div>
                )}
            </>
        )}
    </div>
  )
}

export default page