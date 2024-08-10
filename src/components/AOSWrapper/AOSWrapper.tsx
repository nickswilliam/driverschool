"use client"

import AOS from 'aos'
import React, { useEffect } from 'react'
import "aos/dist/aos.css";

export const AOSWrapper = ({children}: {children: React.ReactNode}) => {
    useEffect(()=>{
        AOS.init()
    }, [])
  return (
    <>{children}</>
  )
}
