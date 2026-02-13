'use client'
import Image from "next/image";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import GlobalContainer from "./components/GlobalContainer";
import profile from "@/app/src/images/profile.png"
import star from "@/app/src/images/star.png"
import { useState } from "react";
import { StarIcon } from "flowbite-react";
import { Button } from "./components/Button";
import { KeyIcon, Router } from "lucide-react";
import Link from "next/link";
import { useProgress } from "./contexts/OnboardingContext";
import { useRouter } from "next/navigation";

export default function Home() {
  const [active, setActive] = useState<"sales-agent" | "sales-coordinator" | null>(null);
  const {setAccountTypeValue} = useProgress()
  const signUpOptions = [
    {
      title: "Sales Agent",
      route: "sales-agent", 
      desc: "Area-based Marketing", 
      amount: 90375, 
      freqPay: "every month"
    }, 
    {
      title: "Sales Coordinator",
      route: "sales-coordinator", 
      desc: "State-based Marketing", 
      amount: 150875, 
      freqPay: "every month"
    }, 
  ] as const;

  const router = useRouter();

  const handleSelection = async () => {
    if(!active) return alert("You need to select a role")
    try {
      await router.push(`/${active}`)
    } catch (error) {
      console.log("Error fetching the routes", error)
    }
  }
  return (
    <div className="h-screen overflow-y-scroll">
      <div className="bg-gradient-coordinator flex flex-col gap-10 items-center pb-15 md:px-5 px-3 pt-10">
        <div className="flex justify-center items-center relative">
          <Image src={profile} width={1000} height={1000} alt="profile" className="w-40 absolute" />
          <CircularProgressbar
            className="w-50 mx-auto"
            value={30}
            strokeWidth={.5}
            styles={buildStyles({
              pathColor: '#E09427',
              textColor: '#3b82f6',
              trailColor: '#e0932780',
            })}
          />
        </div>
        <div className="flex flex-col gap-5 text-center">
          <h1 className="text-3xl text-black">LET'S Rep <span className="font-extrabold text-majorgreen">Naija</span></h1>
          <p className="text-majorgray">Join Naigeria's fastest-growing network of verified agents. Manage listings, track leads, and close deals all in one place.</p>
        </div>
        <div className="flex flex-col gap-3 w-full">
          {signUpOptions.map((option, index) => (
            <div onClick={() => {setActive(option.route), setAccountTypeValue(option.title)}} key={index} className={`rounded-xl flex justify-between items-center p-3 w-full relative ${active === option.route ? "bg-majororange" : "border border-majorgray"}`}>
              {option.title === "Sales Agent" && (
                <Image src={star} width={1000} height={1000} alt="star" className="absolute w-8 -top-4 -right-2" />
              )}
              <div className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded-full flex justify-center items-center ${active === option.route ? "bg-lightorange" : "border border-majorgreen"}`}>
                  <div className={`w-2 h-2 rounded-full bg-white`}></div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-extrabold md:text-xl text-lg">{option.title}</p>
                  <span className="text-sm text-majorgreen">{option.desc}</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-extrabold md:text-xl">₦{option.amount.toLocaleString(undefined, {
                  maximumFractionDigits: 2, 
                  minimumFractionDigits: 2
                })}</p>
                <span className="text-sm">{option.freqPay}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="p-3 rounded-2xl bg-superlightgreen flex flex-col gap-3">
          <p className="font-bold text-xl">Details:</p>
          <div className="flex gap-3">
            <StarIcon strokeWidth={1} color="#006838" />
            <div className="flex flex-col">
              <p className="text-majorgray">1. Role and Responsibilities</p>
              <p className="text-majorgray">As the Independent Sales Representative fo ryour assigned state, your roles is comprehensive and focused on growth and oversiht. Your key responsibilities include: <br /> . Agent Oversight: Direct supervision, training (Virtual or physical depending on your convenience and discretion), and coordination of Sales Agents within</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5 w-full">
          <Button text="APPLY NOW!" className="p-4 w-full cursor-pointer" onClick={handleSelection} />
          <div className="flex justify-center items-center w-15 h-15 flex-shrink-0 rounded-full text-white bg-majorgreen">
            <KeyIcon strokeWidth={1} size={30} />
          </div>
        </div>
      </div>
    </div>
  );
}
