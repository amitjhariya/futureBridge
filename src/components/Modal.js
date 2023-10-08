import React, { useRef } from 'react'
import useOutsideClick from "@/hooks/useOutSideClick";

export default function Modal ({ children,setIsOpen }) {

    const ref = useRef(null);

    useOutsideClick(ref, () => { setIsOpen(false) });
    
  return (
      <div className='absolute top-50 left-50 container min-h-screen flex justify-center backdrop-blur-sm'>
          <div ref={ref} className='bg-white w-96'>
          {children}
          </div>
    </div>
  )
}
