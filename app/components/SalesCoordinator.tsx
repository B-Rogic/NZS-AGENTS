"use client";
import React, { useEffect, useState } from "react";
import { CheckIcon, ChevronLeftIcon } from "flowbite-react";
import { useRouter } from "next/navigation";
import map from "@/app/src/images/map.png";
import profile from "@/app/src/images/profile.png"
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronUp,
  Download,
  Plus,
  Search,
} from "lucide-react";
import Image from "next/image";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { timeStamp } from "console";
import { useProgress } from "../contexts/OnboardingContext";
import { Button } from "./Button";
import GlobalContainer from "./GlobalContainer";
import { FlexTextNumber } from "./FlexTextNumber";
import { ButtonSimulation } from "./ButtonSimulation";
import Link from "next/link";
import GoBack from "./GoBack";
import ProgressComponent from "./ProgressComponent";
import SelectionComponent from "./SelectionComponent";

const SalesCoordinator = () => {
  const router = useRouter();
  const { steps, nextStep, currentIndex, progress, resetProgress, updateStep, accountTypeValue } =
    useProgress();
  console.log(steps);
  const [finished, setFinished] = useState<boolean>(false)
  const [mounted, setMounted] = useState<boolean>(false);
    useEffect(() => {
        if(typeof window !== "undefined"){
            setMounted(true)
        } else {
            return
        }
    }, [])
  const timeStamp = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric" 
  })
  const [active, setActive] = useState<string[]>([]);
  const [stateActive, setStateActive] = useState<string>("");
  const [accountTypeActive, setAccountTypeActive] = useState<string>("");
  const currentStep = steps[currentIndex];
  return (
    <>
      {finished ? (
        <div className="h-screen overflow-y-scroll">
            <div className="bg-gradient-coordinator h-screen flex flex-col justify-between pt-10 gap-10 items-center pb-20 md:px-5 px-3">
                <p className="font-extrabold text-2xl">Profile</p>
                <div className="flex justify-center items-center relative">
                    <Image src={steps[0].profile || profile} width={1000} height={1000} alt="profile" className="w-40 absolute" />
                </div>
                <div className="flex flex-col gap-4">
                    <p className="font-bold text-center">Hello {steps[0].name + " " + steps[0].surname}</p>
                    <p className="text-majorgray">{steps[1].email}</p>
                </div>
                <div className="flex flex-col gap-3 items-center">
                    <p className="text-3xl font-bold">APPLICATION <br /> SUBMITTED</p>
                    <div className="w-7 h-7 flex justify-center items-center bg-lemongreen rounded-full">
                        <Check strokeWidth={1} />
                    </div>
                    <p className="text-sm text-majorgray">Reviewing Profile</p>
                </div>
                <Link href={'/login'}>
                    <Button text="LOGIN" className="w-full tracking-widest p-3" />
                </Link>
            </div>
        </div>
      ) : (
        <GlobalContainer className="bg-white h-screen overflow-y-scroll flex flex-col gap-5">
        <>
            <GoBack text="Application" />
            <div className="flex justify-between">
                {steps?.map((step, index) => (
                    <ProgressComponent key={index} currentIndex={currentIndex + 1} index={index + 1} step={step.tabInfo} />
                ))}
            </div>
            {currentIndex === 0 && (
                <div className="flex flex-col gap-5">
                    <label htmlFor="photo">
                        <div className="w-30 h-30 mx-auto rounded-full relative">
                            <Image src={currentStep.profile ? currentStep.profile : profile} width={1000} height={1000} alt={currentStep.name || "Photo"} className="rounded-full w-full h-full object-cover" />
                            <div className="flex justify-center items-center w-8 h-8 bg-majororange text-white rounded-full absolute top-1/2 -translate-y-1/2 -right-4">
                                <Plus strokeWidth={1} size={20} />
                            </div>
                        </div>
                        <input type="file" accept="image/*" id="photo" className="hidden" onChange={(e) => {
                            const file = e.target.files?.[0];
                            if(file) {
                                const reader = new FileReader();
                                reader.onloadend = () => {
                                    updateStep(currentIndex, {profile: reader.result as string})
                                }
                                reader.readAsDataURL(file)
                            }
                        }} />
                    </label>
                <div className="flex flex-col gap-3">
                    <input
                    onChange={(e) =>
                        updateStep(currentIndex, { name: e.target.value })
                    }
                    type="text"
                    value={currentStep.name || ""}
                    className="border placeholder:md:text-md placeholder:text-sm border-lightgray rounded-xl w-full p-3 outline-none"
                    placeholder="Name"
                    />
                    <input
                    onChange={(e) =>
                        updateStep(currentIndex, { surname: e.target.value })
                    }
                    type="text"
                    value={currentStep.surname || ""}
                    className="outline-none border placeholder:md:text-md placeholder:text-sm border-lightgray rounded-xl w-full p-3"
                    placeholder="Surname"
                    />
                    <input
                    onChange={(e) => {
                        const val = e.target.value;
                        updateStep(currentIndex, { description: val });
                    }}
                    type="text"
                    value={currentStep.description || ""}
                    className="outline-none border placeholder:md:text-md placeholder:text-sm border-lightgray rounded-xl w-full p-3"
                    placeholder="Description"
                    />
                    <p className="text-sm text-lightgray">0/10</p>
                </div>
                <div className="flex flex-col gap-3 w-full">
                    <FlexTextNumber
                    className="md:text-md text-sm"
                    text="Interests"
                    desc="Which business category do you have in mind?"
                    textNum={9}
                    />
                    {currentStep.base?.map((bas, index) => (
                    <div
                        onClick={() =>
                        setActive((prev) =>
                            prev.includes(bas.name)
                            ? prev.filter((item) => item !== bas.name)
                            : [...prev, bas.name],
                        )
                        }
                        key={index}
                        className={`md:p-5 p-3 rounded-2xl flex justify-between items-center cursor-pointer ${active.includes(bas.name) ? "bg-superlightgreen" : "border border-lightgray"} cursor-pointer`}
                    >
                        <p className="md:text-md text-sm">{bas.name}</p>
                        <CheckIcon strokeWidth={1} color="#006838" />
                    </div>
                    ))}
                </div>
                <div className="flex flex-col gap-3 w-full">
                    <FlexTextNumber
                    text="State"
                    desc="Available in Nigeria"
                    textNum={9}
                    />
                    <div className="flex gap-2 flex-wrap">
                    {currentStep.state?.map((st, index) => (
                        <ButtonSimulation
                        key={index}
                        text={st.name}
                        />
                    ))}
                    </div>
                </div>
                <div className="flex justify-center p-5 overflow-hidden rounded-3xl h-80 items-start relative">
                    <Image
                    src={map}
                    width={1000}
                    height={1000}
                    alt="map"
                    className="w-full absolute h-full top-0 left-0 object-cover"
                    />
                    <div className="flex justify-between items-center bg-superlightgreen w-full p-3 rounded-full relative">
                    <div className="flex gap-3 items-center w-full">
                        <Search strokeWidth={1} size={20} />
                        <input
                        className="outline-none w-full"
                        placeholder="Street Info"
                        />
                    </div>
                    <ChevronUp />
                    </div>
                </div>
                </div>
            )}
            {currentIndex === 1 && (
                <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-3">
                    <label htmlFor="phone" className="flex flex-col gap-2">
                    <p className="font-bold">Phone</p>
                    <input
                        onChange={(e) =>
                        updateStep(currentIndex, { phone: parseInt(e.target.value) })
                        }
                        type="tel"
                        id="phone"
                        value={currentStep.phone || ""}
                        className="border border-lightgray rounded-xl w-full p-3 outline-none"
                        placeholder="+234 000 000 0000"
                    />
                    <p className="text-sm text-lightgray">0/11</p>
                    </label>
                    <label htmlFor="whatsapp" className="flex flex-col gap-2">
                    <p className="font-bold">WhatsApp</p>
                    <input
                        onChange={(e) =>
                        updateStep(currentIndex, { whatsapp: parseInt(e.target.value) })
                        }
                        type="tel"
                        id="whatsapp"
                        value={currentStep.whatsapp || ""}
                        className="outline-none border border-lightgray rounded-xl w-full p-3"
                        placeholder="+234 000 000 0000"
                    />
                    <p className="text-sm text-lightgray">0/11</p>
                    </label>
                    <label htmlFor="email" className="flex flex-col gap-2">
                    <input
                        onChange={(e) =>
                        updateStep(currentIndex, { email: e.target.value })
                        }
                        type="email"
                        id="email"
                        value={currentStep.email || ""}
                        className="outline-none border border-lightgray rounded-xl w-full p-3"
                        placeholder="Someone@gmail.com"
                    />
                    </label>
                    <label htmlFor="password" className="flex flex-col gap-2">
                    <p className="font-bold">Password</p>
                    <input
                        onChange={(e) =>
                        updateStep(currentIndex, { password: e.target.value })
                        }
                        type="password"
                        id="password"
                        value={currentStep.password || ""}
                        className="outline-none border border-lightgray rounded-xl w-full p-3"
                        placeholder="************"
                    />
                    </label>
                </div>
                <div className="flex flex-col gap-3 w-full">
                    <label htmlFor="referral">
                    <p className="font-bold">Referral CODE</p>
                    <input
                        type="text"
                        id="referral"
                        className="outline-none border border-lightgray rounded-xl w-full p-3"
                        placeholder="0000XXXX"
                    />
                    </label>
                    <label htmlFor="cv" className="flex flex-col gap-2">
                    <p className="font-bold">CV/Resume</p>
                    <div className="flex gap-3 items-center">
                        <Button text="UPLOAD PDF/DOC" className="p-2 text-sm rounded" />
                        <Download strokeWidth={1} className="text-majorgray" />
                    </div>
                    <input id="cv" type="file" className="hidden" />
                    </label>
                </div>
                </div>
            )}
            {currentIndex === 2 && (
                <div className="flex flex-col gap-5">
                <div className="flex flex-col md:gap-3 gap-1 py-8">
                    <p className="md:text-2xl text-xl md:font-extrabold font-bold">
                    Edit Your Payment Details
                    </p>
                    <span className="font-light text-majorgray">
                    Any functioning bank account will do.
                    </span>
                </div>
                <div className="flex border rounded-2xl flex-col gap-5 p-3 border-lightgray">
                    <p className="md:font-extrabold font-bold text-xl">Bank Account</p>
                    <div className="flex flex-col gap-2">
                    <input
                        onChange={(e) =>
                        updateStep(currentIndex, { name: e.target.value })
                        }
                        type="text"
                        id="phone"
                        value={currentStep.accountNumber || ""}
                        className="border border-lightgray rounded-xl w-full p-3 outline-none"
                        placeholder="8039161212"
                    />
                    <p className="text-sm text-lightgray">0/11</p>
                    <input
                        onChange={(e) =>
                        updateStep(currentIndex, { name: e.target.value })
                        }
                        type="text"
                        id="phone"
                        value={currentStep.accountNumber || ""}
                        className="border border-lightgray rounded-xl w-full p-3 outline-none"
                        placeholder="+234 000 000 0000"
                    />
                    </div>
                </div>
                <SelectionComponent headText="Account Type" account={currentStep?.accountType} />
                </div>
            )}
            {currentIndex === 3 && (
                <div className="my-10 bg-superlightgreen rounded-2xl p-3">
                    <div className="flex justify-between items-center border-b border-lightgray">
                        <p className="md:text-xl font-bold pb-2">{accountTypeValue || "No Role Selected"}</p>
                        <Check strokeWidth={1} />
                    </div>
                    <div className="flex gap-3 justify-between flex-wrap">
                        <div className="flex flex-col gap-2">
                            <p className="text-lightgray text-sm">Email</p>
                            {steps[1].email}
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-lightgray text-sm">Modified</p>
                            <p>{mounted ? timeStamp : ""}</p>
                        </div>
                        <p className="text-lightgray text-sm">Description</p>
                        <p className="text-majorgray">{steps[0].description}</p>
                        <div className="flex flex-col gap-3">
                        <p className="text-lightgray text-sm">Role</p>
                        {accountTypeValue}
                        <p className="text-lightgray text-sm">Interests</p>
                        <ul>
                            {active.map((act, index) => (
                                <li key={index}>{act}</li>
                            ))}
                        </ul>
                        <p className="text-lightgray text-sm">Phone</p>
                        <div>{steps[1].phone}</div>
                        <p className="text-lightgray text-sm">WhatsApp</p>
                        <div>{steps[1].whatsapp}</div>
                        </div>
                        
                    </div>
                </div>
            )}
            <div className="flex flex-col gap-2 w-full">
                <div className="flex justify-between items-center w-full rounded-xl bg-lightgray p-3">
                <p className="font-bold md:text-xl">APPLICATION DETAILS</p>
                <ChevronUp strokeWidth={1} />
                </div>
                <div className="flex gap-3 items-center w-full">
                <Button
                    text="NEXT"
                    className="tracking-widest p-3 w-full cursor-pointer"
                    onClick={() => progress >= 100 ? setFinished(true) : nextStep()}
                />
                <div className="flex justify-center items-center relative">
                    <CircularProgressbar
                    className="w-15 mx-auto"
                    value={progress}
                    strokeWidth={10}
                    styles={buildStyles({
                        pathColor: "#006838",
                        trailColor: "transparent",
                    })}
                    />
                    <ArrowRight strokeWidth={1} color="#006838" className="absolute" />
                </div>
                </div>
            </div>
        </>
        </GlobalContainer>
      )}
    </>
  );
};

export default SalesCoordinator;
