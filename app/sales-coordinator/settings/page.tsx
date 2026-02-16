'use client'
import React, { useRef, useState } from 'react'
import profile from '@/app/src/images/profile.png'
import Image from 'next/image'
import {CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"
import { ArrowRight, Bolt, ChevronDown, ChevronLeft, ChevronRight, Dot, Filter, LocateIcon, MessageCircle, MessageCircleReply, Plus, QrCode, RefreshCcw, Send, Settings2, Star, ThumbsUp, TrendingUp, X, Zap } from 'lucide-react'
import GlobalContainer from '@/app/components/GlobalContainer'
import GoBack from '@/app/components/GoBack'
import TopBackBar from '@/app/components/TopBackBar'
import { Button } from '@/app/components/Button'
import { useProductProvider } from '@/app/contexts/CreateBusinessContext'
import ActiveTabStraight from '@/app/components/ActiveTabStraight'
import FilterTab from '@/app/components/FilterTab'
import FlexComponent from '@/app/components/FlexComponent'
import MonthComponent from '@/app/components/MonthComponent'
import { FlexTextNumber } from '@/app/components/FlexTextNumber'
import { ButtonSimulation } from '@/app/components/ButtonSimulation'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { TooltipProps } from 'recharts'
// import { NameType, ValueType, Payload } from 'recharts/types/component/DefaultTooltipContent'
import ActiveTabRadius from '@/app/components/ActiveTabRadius'
import NotificationTab from '@/app/components/NotificationTab'

const data = [
    {time: "10 am", value: 11550},
    {time: "10:15", value: 11570},
    {time: "10:30", value: 11620},
    {time: "10:45", value: 11600},
    {time: "11 am", value: 11650},
    {time: "11:15", value: 11590},
    {time: "11:30", value: 11610},
    {time: "10:45", value: 11640},
    {time: "12 pm", value: 11680},
]

interface Chart {
    value: string;
}

const CustomTooltip = ({active, payload}: {active?:boolean; payload?:any}) => {
    if (!active || !payload || !payload.length) {
        return null;
    }
    if(active && payload && payload.length) {
        return (
            <div className='bg-[#1df08e] p-4 rounded-xl shadow-lg border-none text-white'>
                <p className='text-[10px] font-bold opacity-80'>Top Target: Jan 30</p>
                <p className='text-xl font-bold'>N{payload[0].value.toLocaleString()}</p>
            </div>
        )
    }
}

type Props = {}

const page = (props: Props) => {
    const [active, setActive] = useState<string>("")
    const settingsArray = ["See Profile", "My Feed", "My Wallet", "Notifications", "Language", "Privacy & Security", "Log Out"]
    const {setAddProduct} = useProductProvider();
    const [activeTab, setactiveTab] = useState<string>("PAY IN")
    const [subFilterTab, setSubFilterTab] = useState<string>("A-Z");
    const [showTarget, setShowTarget] = useState<boolean>(false)
    const [feedsFilterActive, setFeedsFilterActive] = useState<string>("date")
    const filterArray = ["DATE", "STATUS", "LOCATION", "TOPIC"]
    const topicActiveArray = ["COMPLIANCE NOTICE", "HIGH-PERFORMANCE ALERT", "VENDOR CONCERN", "RECREATION", "ONBOARDING"]
    const locationActiveArray = ["UMUAHIA", "JO", "AKWA-IBOM", "ANAMBRA", "BAUCHI", "BAYELSA", "DELTA", "EBONYI", "PLATEAU", "NIGER", "KOGI"]
    const [statisticActive, setStatisticActive] = useState<boolean>(false)
    const [statisticArrayActive, setStatisticArrayActive] = useState<string>("CHARTS")
    const statisticsArray = ["CHARTS", "SUMMARY", "TOPLIST"]
    const [chart, setChart] = useState<boolean>(false)
    const [backLineActive, setBackLineActive] = useState<string>("MY ANALYTICS")
    const notificationActiveTabArray = ["Read", "Unread"];
    const [unread, setUnread] = useState("Unread");
    const notificationRef = useRef<HTMLDivElement>(null)
    const [drop, setDrop] = useState<boolean>(false)
  return (
    <>
        {active === "See Profile" ? (
            <div className="overflow-y-scroll bg-gradient-coordinator h-screen">
                <GlobalContainer className='flex flex-col gap-5 pb-20'>
                    <TopBackBar handleClick={() => setActive('')} text='My Profile' />
                    <div className="rounded-full p-3 bg-transorange text-superlightorange flex gap-1 items-center mx-auto">Edit Profile <Settings2 /> </div>
                    <div className="flex items-center gap-3">
                        <Image className='rounded-full w-15 h-15 object-cover' width={1000} height={1000} alt='profile' src={profile} />
                        <div className="flex flex-col gap-1">
                            <p className="font-bold text-lg">Moses-Akpor Akpan</p>
                            <p className="text-lightgray text-sm">padreakpor25@yahoo.com</p>
                        </div>
                    </div>
                    <p className="text-center text-xl font-light">Total Earnings:</p>
                    <h2 className='md:text-5xl font-bold text-lightorange text-4xl text-center'><sup className='text-xl font-light'>NGN</sup> 2,542,522.34</h2>
                    <div className="flex flex-col">
                        <div className="flex justify-between">
                            <p className="text-majorgray">Order Success</p>
                            <p className="font-bold text-majorgray">85%</p>
                        </div>
                        <div className="w-full h-2 rounded-full bg-superlightorange overflow-hidden">
                            <div className="h-full w-[30%] bg-lightorange"></div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="text-lg font-bold">About me</p>
                        <p className="text-majorgray text-sm">With over 9 years of experience in teh Nigerian e-commerce landscape, i specialize in helping customers navigate the vast marketplace of Naijazone to find exactly what they need. My mission is simple: to make online shopping seamless, transparent, and satisfying for every Nigerian.</p>
                    </div>
                    <div className="grid grid-cols-3">
                        <div className="flex flex-col border-r border-lightgray p-2">
                            <p className="text-3xl font-bold italic">39</p>
                            <p>Vendors</p>
                        </div>
                        <div className="flex flex-col border-r border-lightgray p-2">
                            <p className="text-3xl font-bold italic">+300k</p>
                            <p>In Earnings</p>
                        </div>
                        <div className="flex flex-col border-r border-lightgray p-2">
                            <p className="text-3xl font-bold italic">105</p>
                            <p>Onboardings</p>
                        </div>
                    </div>
                    <Button text='APPLY FOR PROMOTION' className='tracking-widest p-5' />
                </GlobalContainer>
            </div>
        ) : active === "My Feed" ? (
            <div className='overflow-y-scroll h-screen'>
                <GlobalContainer className='bg-gradient-coordinator flex flex-col gap-5 pb-10'>
                    {chart ? (
                        <div className="flex flex-col gap-5">
                            <div className="flex justify-between items-center">
                                <ChevronLeft onClick={() => setChart(false)} strokeWidth={1} size={30} />
                                <p className="text-lg font-bold mx-auto">OMISORE JENNIFER</p>
                            </div>
                            <div className="flex flex-col gap-5 h-screen w-full overflow-y-scroll">
                                <div className="rounded-r-full rounded-tl-full bg-majororange p-3 flex flex-col gap-1 max-w-[80%] w-fit self-start">
                                    <p className='font-bold text-sm'>SALES REP</p>
                                    <p className="text-sm">Hey Moses!</p>
                                </div>
                                <div className="rounded-r-full rounded-tl-full bg-majororange p-3 flex flex-col gap-1 max-w-[80%] w-fit self-start">
                                    <p className='font-bold text-sm'>SALES REP</p>
                                    <p className="text-sm">Have you concluded on your return checks for both customers?</p>
                                </div>
                                <div className="rounded-r-full rounded-tl-full bg-lightorange p-3 flex flex-col gap-1 max-w-[80%] w-fit text-white ms-auto self-start">
                                    <p className='font-bold text-sm'>YOU</p>
                                    <p className="text-sm">Hi Jen!</p>
                                </div>
                                <div className="rounded-r-full rounded-tl-full bg-lightorange p-3 flex flex-col gap-1 max-w-[80%] w-fit text-white ms-auto self-start">
                                    <p className='font-bold text-sm'>YOU</p>
                                    <p className="text-sm">Yes! Thanks for helping out with it.</p>
                                </div>
                                <div className="rounded-r-full rounded-tl-full bg-majororange p-3 flex flex-col gap-1 max-w-[80%] w-fit self-start">
                                    <p className='font-bold text-sm'>SALES REP</p>
                                    <p className="text-sm">No worries. Let me know if you need to confirm anything 😊</p>
                                </div>
                            </div>
                            <div className="md:w-1/2 w-full fixed left-1/2 -translate-x-1/2 md:p-5 p-3 bg-white gap-5 bottom-0 flex items-center">
                                <Plus strokeWidth={1} className="text-lightorange" />
                                <label htmlFor='text' className="flex justify-between items-center w-full bg-superlightorange rounded-full py-1 ps-2 pe-1">
                                    <input type="text" className='w-full outline-none' />
                                    <div className="w-10 flex-shrink-0 h-10 rounded-full text-white bg-lightorange flex justify-center items-center">
                                        <Send strokeWidth={1} />
                                    </div>
                                </label>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <ChevronLeft strokeWidth={1} onClick={() => setActive('')} />
                                    <h1 className="text-2xl">2k<sub>+</sub> <span className='text-lightorange'>Feeds</span></h1>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div onClick={() => setStatisticActive(true)} className={`w-10 h-10 rounded-full bg-superlightorange flex justify-center items-center`}>
                                        <TrendingUp />
                                    </div>
                                    <MonthComponent lightOrange text='View Code' />
                                </div>
                            </div>
                            {statisticActive ? (
                                <div className='flex flex-col gap-5 pb-50'>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <ChevronLeft strokeWidth={1} />
                                            <p onClick={() => setBackLineActive("MY ANALYTICS")} className={`mx-auto ${backLineActive === "MY ANALYTICS" ? "text-lightgray" : "text-black"}`}>MY ANALYTICS</p>
                                        </div>
                                        <p onClick={() => setBackLineActive("Oyo State")} className={`mx-auto ${backLineActive === "Oyo State" ? "text-lightgray" : "text-black"}`}>Oyo State</p>
                                    </div>
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
                                    <div className="flex">
                                        {statisticsArray.map((statistic) => (
                                            <div key={statistic} onClick={() => setStatisticArrayActive(statistic)} className={`rounded-full p-2 md:text-md text-sm flex-shrink-0 ${statisticArrayActive === statistic ? "bg-majororange" : "text-majorgray bg-transparent"}`}>{statistic}</div>
                                        ))}
                                    </div>
                                    <div className="flex justify-between gap-3 items-center">
                                        <p className="text-lg text-majorgray">1D</p>
                                        <div className="w-[2px] h-8 bg-lightgray" />
                                        <p className="text-lg text-majorgray">SD</p>
                                        <div className="w-[2px] h-8 bg-lightgray" />
                                        <p className="text-lg text-majorgray">1M</p>
                                        <div className="w-[2px] h-8 bg-lightgray" />
                                        <p className="text-lg text-majorgray">3M</p>
                                        <div className="w-[2px] h-8 bg-lightgray" />
                                        <p className="text-lg text-majorgray">1Y</p>
                                    </div>
                                    {backLineActive === "MY ANALYTICS" ? (
                                        <>
                                            {statisticArrayActive === "CHARTS" ? (
                                                <div className="w-full h-[300px] bg-white p-4">
                                                    <ResponsiveContainer width="100%" height="100%" className={"w-full h-full"}>
                                                        <AreaChart data={data}>
                                                            <defs>
                                                                <linearGradient id='colorValue' x1={0} y1={0} x2={0} y2={1}>
                                                                    <stop offset="5%" stopColor='#125c3a' stopOpacity={0.3} />
                                                                    <stop offset="95%" stopColor='#125c3a' stopOpacity={0} />
                                                                </linearGradient>
                                                            </defs>
                                                            <CartesianGrid strokeDasharray="3 3" vertical={true} stroke="#e5e7eb" />
                                                            <XAxis 
                                                                dataKey={"time"}
                                                                axisLine={false}
                                                                tickLine={false}
                                                                tick={{fontSize: 12, fill: "#9ca3af"}}
                                                                dy={10}
                                                            />
                                                            <YAxis
                                                                domain={[11500, 11700]}
                                                                axisLine={false}
                                                                tickLine={false}
                                                                tick={{fontSize: 12, fill: "#9ca3af"}}
                                                            />
                                                            <Tooltip content={<CustomTooltip />} />
                                                            <Area 
                                                                type="monotone"
                                                                dataKey={"value"}
                                                                stroke='#1df08e'
                                                                strokeWidth={2}
                                                                fillOpacity={1}
                                                                fill='url(#colorValue)'
                                                                dot={{ r: 4, fill: "#1df08e", strokeWidth: 2, stroke: "#fff" }}
                                                                activeDot={{ r: 6 }}
                                                            />
                                                        </AreaChart>
                                                    </ResponsiveContainer>
                                                </div>
                                            ) : statisticArrayActive === "SUMMARY" ? (
                                                <div className="flex flex-col gap-5">
                                                    <div className='flex flex-col py-5 border-y border-lightgray gap-10'>
                                                        <div className="flex flex-col gap-3">
                                                            <div className="flex justify-between items-center">
                                                                <div className="flex flex-col gap-1">
                                                                    <p className="font-semibold">11,999.87</p>
                                                                    <p className="text-majorgray text-sm">Day Low</p>
                                                                </div>
                                                                <div className="flex flex-col gap-1">
                                                                    <p className="font-semibold">12,248.15</p>
                                                                    <p className="text-majorgray text-sm">Day High</p>
                                                                </div>
                                                            </div>
                                                            <div className="w-full rounded-full h-1 bg-lightorange">
                                                                <div className="flex flex-col gap-1 -mt-2">
                                                                    <div className="h-5 w-2 rounded-full bg-black"></div>
                                                                    <p className="font-bold text-2xl">12.166.60</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col gap-3">
                                                            <div className="flex justify-between items-center">
                                                                <div className="flex flex-col gap-1">
                                                                    <p className="font-semibold">10,440.64</p>
                                                                    <p className="text-majorgray text-sm">Previous Low</p>
                                                                </div>
                                                                <div className="flex flex-col gap-1">
                                                                    <p className="font-semibold">15,265.42</p>
                                                                    <p className="text-majorgray text-sm">Previous High</p>
                                                                </div>
                                                            </div>
                                                            <div className="w-full rounded-full h-1 bg-lightorange">
                                                                <div className="flex flex-col gap-1 -mt-2">
                                                                    <div className="h-5 w-2 rounded-full bg-black"></div>
                                                                    <p className="font-bold text-2xl">12.166.60</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="px-5 flex justify-between">
                                                        <div className="flex flex-col gap-2">
                                                            <p className="text-sm text-majorgray">Summary Time</p>
                                                            <p className="text-2xl font-bold">0515 pm</p>
                                                        </div>
                                                        <div className="flex flex-col gap-2">
                                                            <p className="text-sm text-majorgray">Summary Date</p>
                                                            <p className="text-2xl font-bold">01/27/23</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : statisticArrayActive === "TOPLIST" && (
                                                <div className="flex flex-col gap-5">
                                                    <div className="p-5 rounded-xl bg-superlightorange flex flex-col gap-3">
                                                        <p className="md:text-5xl text-3xl">You ranked <span className='text-lightorange'>1398th!</span></p>
                                                        <div className="flex justify-between gap-3 items-center">
                                                            <div className="flex items-center gap-3">
                                                                <Image src={profile} width={1000} height={1000} alt="profile" className="w-15 h-15 rounded-full" />
                                                                <div className="flex flex-col gap-2">
                                                                    <p className="font-bold text-sm">Moses Akor-Akpan</p>
                                                                    <div className="rounded-full bg-lightorange text-sm flex justify-center items-center">Sales Agent</div>
                                                                </div>
                                                            </div>
                                                            <div className="w-20 h-10 flex justify-center items-center bg-white rounded-lg"><p>+20%</p></div>
                                                        </div>
                                                    </div>
                                                    <div className="w-full bg-lightgray h-[1px]" />
                                                    <div className="flex flex-col gap-5">
                                                        <div className="flex justify-between">
                                                            <div className="flex items-center gap-2">
                                                                <Image src={profile} width={1000} height={1000} alt="profile" className="w-8 h-8 rounded-full" />
                                                                <div className="flex flex-col gap-1">
                                                                    <p className="text-sm">Nigeria</p>
                                                                    <p className="font-bold">Edo State</p>
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-col gap-1 items-end">
                                                                <p>TOP 12%</p>
                                                                <p className="text-majorred">-3.21</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex justify-between">
                                                            <div className="flex items-center gap-2">
                                                                <Image src={profile} width={1000} height={1000} alt="profile" className="w-8 h-8 rounded-full" />
                                                                <div className="flex flex-col gap-1">
                                                                    <p className="text-sm">Nigeria</p>
                                                                    <p className="font-bold">Global</p>
                                                                </div>
                                                            </div>
                                                            <div className="flex flex-col gap-1 items-end">
                                                                <p>TOP 60%</p>
                                                                <p className="text-superlightorange">+302</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <div className="flex flex-col">
                                            <div className="flex items-center justify-between">
                                                <p className="text-sm">Best Agents</p>
                                                <div className="w-10 h-10 flex justify-center items-center bg-lightorange text-majororange rounded-full">
                                                    <Star size={20} />
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between py-3 border-b border-lightgray">
                                                <div className="flex items-center gap-3">
                                                    <Image src={profile} width={1000} height={1000} alt="profile" className="w-10 h-10 rounded-full" />
                                                    <p className="font-bold">Rashida Ibrahim</p>
                                                </div>
                                                <div className="flex flex-col gap-1 items-end">
                                                    <p className="text-sm">N590,000.24</p>
                                                    <p className="text-sm text-lightorange">+12</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    <div className="flex flex-col gap-1">
                                        <div className="flex gap-1">
                                            <div className="flex flex-col gap-1 flex-grow">
                                                <p className="text-sm text-lightgray">Pending Sales</p>
                                                <button className="p-5 rounded-xl text-xl bg-lightorange w-full flex">N14,032.56</button>
                                            </div>
                                            <div className="flex flex-col gap-1 items-center">
                                                <p className="text-sm text-lightgray">Increase</p>
                                                <button className="p-5 rounded-xl bg-lightorange text-white">+ 20%</button>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <p className="text-sm text-lightgray">Inventory Total</p>
                                            <button className="py-1 px-1 rounded-xl text-xl bg-superlightorange w-full flex items-center justify-between"><span  className='ps-3'>N14,032.56</span> <div className="w-10 h-10 rounded-lg flex justify-center items-center text-white bg-lightorange"><ArrowRight /></div></button>
                                        </div>
                                    </div>
                                    <div className="md:w-1/2 w-full fixed left-1/2 -translate-x-1/2 md:p-5 p-3 bg-white flex flex-col gap-5 bottom-0">
                                        <label htmlFor='text' className="flex justify-between items-center w-full">
                                            <p className="text-sm">OMISORE JENNIFER</p>
                                            <Image src={profile} width={1000} height={1000} alt="profile" className="w-5 h-5 rounded-full" />
                                        </label>
                                        <button onClick={() => setChart(true)} className='bg-lightorange p-3 rounded-xl text-white'>CONTACT SALES REP</button>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <FilterTab orange subFilterTabArray={filterArray} subFilterTab={feedsFilterActive} setSubFilterTab={setFeedsFilterActive} />
                                    {feedsFilterActive === "location" && (
                                        <>
                                            <FlexTextNumber text='State' desc='Available in Nigeria' textNum={9} />
                                            <div className="flex flex-wrap gap-2">
                                                {locationActiveArray.map((location) => (
                                                    <ButtonSimulation orange key={location} text={location} />
                                                ))}
                                            </div>
                                        </>
                                    )}
                                    <FlexComponent>
                                        <p className="font-bold text-2xl">2025</p>
                                        <div className="flex items-center gap-2">
                                            <MonthComponent lightOrange text='September' />
                                            <ChevronDown />
                                        </div>
                                    </FlexComponent>
                                    {feedsFilterActive === "topic" && (
                                        <>
                                            <FlexTextNumber text='Top Trends' textNum={9} />
                                            <div className="flex flex-wrap gap-2">
                                                {topicActiveArray.map((topic) => (
                                                    <ButtonSimulation key={topic} text={topic} />
                                                ))}
                                            </div>
                                        </>
                                    )}
                                    <div className="bg-superlightorange md:p-5 p-3 rounded-2xl flex flex-col gap-3">
                                        <FlexComponent>
                                            <div className="flex flex-col">
                                                <p>#Onboarding</p>
                                                <p className="font-bold">Tope Alabi</p>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <div className="py-1 px-2 rounded-full bg-lightorange text-sm">Sales Agent</div>
                                                <ChevronDown strokeWidth={1} />
                                            </div>
                                        </FlexComponent>
                                        <div className="flex gap-3">
                                            <Image src={profile} width={1000} height={1000} alt='profile' className='w-10 h-10 rounded-full object-cover' />
                                            <div className="flex flex-col gap-2">
                                                <div className="flex items-center">
                                                    <p className="font-semibold md:text-md text-sm">Order Sync Delays</p>
                                                    <div className="flex items-center gap-2"><LocateIcon strokeWidth={1} className='text-majorgray' /> <p className='text-sm text-majorgray'>Lagos</p> <p className='text-majorgray'>•</p> <p className='text-majorgray'>1hr ago</p></div>
                                                </div>
                                                <p className="md:text-md text-sm">Several Tier-1 electronics brands onboarded last week are reporting "Order Sync" delays.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-5">
                                            <div className="flex">
                                                <ThumbsUp strokeWidth={1} size={20} className='text-majorgray' />
                                                <sup>12</sup>
                                            </div>
                                            <div className="flex">
                                                <MessageCircle strokeWidth={1} size={20} className='text-majorgray' />
                                                <sup>12</sup>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-superlightorange md:p-5 p-3 rounded-2xl flex flex-col gap-3">
                                        <FlexComponent>
                                            <div className="flex flex-col">
                                                <p>#Payment</p>
                                                <p className="font-bold">Grace Abubakar</p>
                                            </div>
                                            {feedsFilterActive === "topic" ? (
                                                <div className="flex items-center gap-1">
                                                    <div className="py-1 px-2 rounded-full bg-majororange text-sm">Sales Coordinator</div>
                                                    <ChevronDown strokeWidth={1} />
                                                </div>
                                            ) : (
                                                <div className="flex items-center gap-1">
                                                    <div className="py-1 px-2 rounded-full bg-lightorange text-sm">Sales Agent</div>
                                                    <ChevronDown strokeWidth={1} />
                                                </div>
                                            )}
                                        </FlexComponent>
                                        <div className="flex gap-3">
                                            <Image src={profile} width={1000} height={1000} alt='profile' className='w-10 h-10 rounded-full object-cover' />
                                            <div className="flex flex-col gap-2">
                                                <div className="flex items-center">
                                                    <p className="font-semibold md:text-md text-sm">Order Sync Delays</p>
                                                    <div className="flex items-center gap-2"><Star strokeWidth={1} className='text-majororange' /> <p className='text-sm text-majorgray'>48</p> <p className='text-majorgray'>•</p> <p className='text-majorgray'>1hr ago</p></div>
                                                </div>
                                                <p className="md:text-md text-sm">My top 5 textile vendors are threatening to delist due to the 72-hour settlement cycle. They are requesting "Next Day Settlement" to keep up with high-turnover inventory costs. Direct to HQ: Can we review the "Fast-Track Settlement" feature for Gold-Verified vendors? If we lose these brands to competitors, our Northern region fashion category will take a massive hit.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-5">
                                            <div className="flex">
                                                <ThumbsUp strokeWidth={1} size={20} className='text-majorgray' />
                                                <sup>12</sup>
                                            </div>
                                            <div className="flex">
                                                <MessageCircle strokeWidth={1} size={20} className='text-majorgray' />
                                                <sup>12</sup>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="md:w-1/2 w-full fixed left-1/2 -translate-x-1/2 md:p-5 p-3 bg-white flex flex-col gap-5 bottom-0">
                                        <label htmlFor='text' className="flex items-center gap-3 w-full">
                                            <Plus strokeWidth={1} className='text-lightorange' size={30} />
                                            <input id='text' type="text" placeholder='Type a message...' className='w-full outline-none' />
                                        </label>
                                        <button className='bg-lightorange p-3 rounded-xl text-white'>SEND POST</button>
                                    </div>
                                </>
                            )}
                        </>
                    )}
                </GlobalContainer>
            </div>
        ) : active === "My Wallet" ? (
            <div className="overflow-y-scroll h-screen">
                <GlobalContainer className='flex bg-gradient-coordinator flex-col gap-5 pb-20'>
                    <TopBackBar handleClick={() => setActive('')} text='My Profile' />
                    <ActiveTabStraight activeTabArray={["PAY IN", "WITHDRAWAL"]} activeTab={activeTab} setActiveTab={setactiveTab} />
                    {activeTab === "PAY IN" ? (
                        <>
                            <div className="flex flex-col gap-3 p-3 bg-lightorange rounded-xl">
                                <div className="flex items-center justify-between">
                                    <p className="text-superlightorange">Balance</p>
                                    <div className="rounded-full flex items-center gap-1 px-2 py-1 bg-transorange">
                                        <p>EDIT ACCOUNT</p>
                                        <ChevronRight strokeWidth={1} />
                                    </div>
                                </div>
                                <p className="md:text-5xl text-superlightorange text-3xl font-bold">N2,542,522.34</p>
                                <div className="flex items-center gap-3 text-superlightorange">
                                    <TrendingUp strokeWidth={1} />
                                    <p>No recent addition</p>
                                </div>
                            </div>
                            <FilterTab orange subFilterTabArray={["A-Z", "DATE", "PRICING", "TRANSACTION"]} subFilterTab={subFilterTab} setSubFilterTab={setSubFilterTab} />
                            <div className="flex flex-col gap-3 bg-superlightorange p-3 rounded-xl">
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
                            <FlexComponent>
                                <p className="font-bold text-2xl">2024</p>
                                <div className="flex items-center gap-3">
                                    <MonthComponent lightOrange text='September' />
                                    <ChevronDown strokeWidth={1} />
                                </div>
                            </FlexComponent>
                            <div className="p-4 rounded-xl bg-transorange flex flex-col w-full">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <Image src={profile} width={1000} height={1000} alt='profile' className='w-10 h-10 rounded-full' />
                                        <div className="flex flex-col gap-1">
                                            <div className="flex gap-2 items-center">
                                                <p className="text-majorgray md:text-md text-sm">30 Sep</p>
                                                <div className="flex gap-2 items-center">
                                                    <Dot className='text-majorgray' />
                                                    <p className="md:text-md text-sm text-majorgray">Product...</p>
                                                </div>
                                            </div>
                                            <p>Joseph Alade</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="rounded-full font-extrabold bg-superlightorange py-1 px-2">3,000.00</div>
                                        <ChevronDown />
                                    </div>
                                </div>
                            </div>
                            <Button text='WITHDRAW FROM WALLET' className='tracking-widest p-5' />
                        </>
                    ) : (
                        <>
                            <div className="flex flex-col gap-3 p-3 bg-lightorange rounded-xl">
                                <div className="flex items-center justify-between">
                                    <p className="text-superlightorange">Balance</p>
                                    <div className="rounded-full flex items-center gap-1 px-2 py-1 bg-verydark text-white">
                                        <p className='text-white'>EDIT ACCOUNT</p>
                                        <ChevronRight strokeWidth={1} />
                                    </div>
                                </div>
                                <p className="md:text-5xl text-superlightorange text-3xl font-bold">N0.00</p>
                                <div className="flex items-center gap-3 text-superlightorange">
                                    <TrendingUp strokeWidth={1} />
                                    <p>No recent addition</p>
                                </div>
                            </div>
                            <FilterTab orange subFilterTabArray={["A-Z", "DATE", "PRICING", "TRANSACTION"]} subFilterTab={subFilterTab} setSubFilterTab={setSubFilterTab} />
                            <div className="flex flex-col gap-3 bg-superlightorange p-3 rounded-xl">
                                <p>Wallet Info</p>
                                <div className="flex items-center gap-2 relative">
                                    <div className="rounded-full p-1 text-white bg-lightorange">
                                        <RefreshCcw strokeWidth={1} size={30} />
                                    </div>
                                    <div onClick={() => setShowTarget(!showTarget)} className="flex items-center gap-2 text-majorgray cursor-pointer">
                                        <p className="text-sm">WITHDRAWAL (N)</p>
                                        <ChevronDown strokeWidth={1} />
                                    </div>
                                    <p>0.00</p>
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
                            <Button text='Onboard New' className='tracking-widest p-5' />
                            <Button text='WITHDRAW FROM WALLET' className='tracking-widest p-5' />
                        </>
                    )}
                </GlobalContainer>
            </div>
        ) : active === "Notifications" ? (
            <div className="overflow-y-scroll h-screen w-full bg-white">
                <GlobalContainer className='flex flex-col gap-5 bg-gradient-coordinator h-full'>
                    <div className="flex items-center justify-between">
                        <ChevronLeft strokeWidth={1} onClick={() => setActive("")} />
                        <p className="text-xl font-bold">Notifications</p>
                        <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
                            <X strokeWidth={1} />
                        </div>
                    </div>
                    <div className="flex p-1 rounded-full items-center bg-lightgreentrans w-full">
                        {notificationActiveTabArray.map((active, index) => (
                            <div key={index} className='flex-grow'>
                                {active.includes("Unread") ? (
                                    <div onClick={() => setUnread(active)} className={`flex justify-center items-center p-3 rounded-full flex-grow gap-2 ${unread === active && "bg-superlightorange"}`}>{active} <div className='w-5 h-5 rounded-full bg-verydark text-white flex justify-center items-center'>{6}</div></div>
                                ) : (
                                    <div onClick={() => setUnread(active)} className={`flex justify-center items-center p-3 rounded-full flex-grow ${unread === active && "bg-superlightorange"}`}>{active}</div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col gap-3 border-b py-3 border-lightgray">
                        <div onClick={() => setDrop(!drop)} className="flex justify-between items-center gap-5">
                            <div className="flex gap-2">
                                <Image src={profile} width={1000} height={1000} alt="profile" className="w-10 h-10 rounded-full" />
                                <div className="flex flex-col gap-1">
                                    <p className="font-bold">Order Processing Update</p>
                                    <p className="text-sm">Order #[Order ID] is now in the processing stage. Keep the pace up to ensure timely delivery.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="py-1 px-2 flex justify-center items-center bg-transorange flex-shrink-0 rounded">
                                    3 mins
                                </div>
                                <ChevronDown strokeWidth={1} />
                            </div>
                        </div>
                        <div ref={notificationRef} className="flex flex-col w-full gap-3 overflow-y-hidden transition-height duration-200 ease-in-out" style={{
                            height: drop ? `${notificationRef.current?.scrollHeight}px` : "0px"
                        }}>
                            <div className="md:p-4 flex-shrink-0 p-2 rounded-2xl bg-transorange flex flex-col gap-3">
                                <Image src={profile} width={1000} height={1000} alt='profile' className='w-full object-cover object-top rounded-2xl md:h-50 h-40 ' />
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
                            </div>
                        </div>
                    </div>
                </GlobalContainer>
            </div>
        ) : (
            <GlobalContainer className='flex flex-col justify-between h-screen bg-white gap-5 overflow-y-auto pb-40'>
                <h1 className="text-center md:text-3xl text-2xl font-extrabold">Settings</h1>
                <div className="flex justify-center items-center relative w-40 mx-auto">
                    <Image src={profile} width={1000} height={1000} alt="profile" className="w-38 rounded-full absolute" />
                    <CircularProgressbar
                    className="w-20 mx-auto"
                    value={30}
                    strokeWidth={.5}
                    styles={buildStyles({
                        pathColor: '#006838',
                        trailColor: '#00683820',
                    })}
                    />
                    <div className="absolute -right-3 w-7 h-7 bg-lightorange rounded-full flex justify-center items-center text-white">
                        <Plus strokeWidth={1} />
                    </div>
                </div>
                <div className="flex flex-col gap-2 text-center">
                    <p className="font-bold text-xl text-majorgray">Hello Moses-Akpor Akpan</p>
                    <p className="font-bold text-xl text-lightgray">padreakpor25@yahoo.com</p>
                </div>
                <div className="flex flex-col gap-2 w-full">
                    {settingsArray.map((setting, index) => (
                        <div onClick={() => {setActive(setting), setAddProduct(true)}} key={index} className={`flex justify-between items-center rounded-full p-3 ${active === setting ? "bg-transorange" : 'bg-transparent'}`}>
                            <p className="md:text-lg text-md">{setting}</p>
                            <ChevronRight strokeWidth={1} />
                        </div>
                    ))}
                </div>
            </GlobalContainer>
        )}
    </>
  )
}

export default page