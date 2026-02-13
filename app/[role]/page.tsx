import React from 'react'
import SalesAgent from '../components/SalesAgent';
import SalesCoordinator from '../components/SalesCoordinator';

export default async function page({params} : {params: {role: Promise<{ id: string }>}}) {
      const { role } = await params

    //   console.log
    // if(role === "sales-coordinator") { 
    // }
    console.log(role)
    
    return (
        <>
            {role === "sales-agent" && (
                <SalesAgent />
            )}
            {role === "sales-coordinator" && (
                <SalesCoordinator />
            )}
        </>
    )
}