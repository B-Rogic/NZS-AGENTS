'use client'
import { LayoutGrid, Search, Settings, Settings2, User } from 'lucide-react'
import React, { ReactNode } from 'react'
import { CreateBusinessContext, useProductProvider } from '../contexts/CreateBusinessContext'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Cog8ToothIcon } from '@heroicons/react/16/solid'

interface Prop {
    children: ReactNode
}

const LayoutContent = ({children}: Prop) => {
    const {addProduct} = useProductProvider()
    const pathname = usePathname()
    return (
        <div className='h-screen w-full overflow-x-hidden'>
            {children}
            {addProduct ? (
                null
            ) : (
                <div className='flex flex-col fixed bottom-0 md:w-1/2 w-full items-start'>
                    <div className="rounded-r-full p-3 bg-majorgreen">
                        <Search strokeWidth={1} color='white' />
                    </div>
                    <div className="flex justify-between items-center p-5 w-full bg-majorgreen">
                        <Link href={'/sales-agent-dashboard/vendor'}>
                            <div className={`flex flex-col items-center gap-3 ${pathname === "/sales-agent-dashboard/vendor" ? "text-majororange" : "text-superlightgreen"}`}>
                                <User fill={pathname === "/sales-agent-dashboard/vendor" ? "#e09427" : "transparent"} strokeWidth={1} size={30} />
                                <p>Vendors</p>
                            </div>
                        </Link>
                        <Link href={'/sales-agent-dashboard/transactions'}>
                            <div className={`flex flex-col items-center gap-3 ${pathname === "/sales-agent-dashboard/transactions" ? "text-majororange" : "text-superlightgreen"}`}>
                                <LayoutGrid fill={pathname === "/sales-agent-dashboard/transactions" ? "#e09427" : "transparent"} strokeWidth={1} size={30} />
                                <p>Transactions</p>
                            </div>
                        </Link>
                        <Link href={'/sales-agent-dashboard/settings'}>
                            <div className={`flex flex-col items-center gap-3 ${pathname === "/sales-agent-dashboard/settings" ? "text-majororange" : "text-superlightgreen"}`}>
                                {pathname === "/sales-agent-dashboard/settings" ? (
                                    <Cog8ToothIcon className='h-[30px] w-[30px]'   />
                                ) : (
                                    <Settings strokeWidth={1} size={30} />
                                )}
                                <p>Settings</p>
                            </div>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}

const layout = ({children}: Prop) => {
  return (
    <CreateBusinessContext>
        <LayoutContent>
            {children}
        </LayoutContent>
    </CreateBusinessContext>
  )
}

export default layout