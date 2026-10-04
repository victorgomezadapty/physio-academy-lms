'use client'

import React from 'react'
import Link from 'next/link'

interface StarButtonProps {
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
}

export default function StarButton({ href, onClick, children, className = '' }: StarButtonProps) {
  const inner = (
    <>
      {children}

      {/* Star 1 */}
      <div className="
        absolute top-[20%] left-[20%] w-[22px] z-[-5]
        transition-all duration-[1000ms] ease-[cubic-bezier(0.05,0.83,0.43,0.96)]
        [filter:drop-shadow(0_0_0_#4F46E5)]
        group-hover:top-[-80%] group-hover:left-[-30%]
        group-hover:[filter:drop-shadow(0_0_10px_#4F46E588)] group-hover:z-[2]
      ">
        <StarSvg />
      </div>

      {/* Star 2 */}
      <div className="
        absolute top-[45%] left-[45%] w-[13px] z-[-5]
        transition-all duration-[1000ms] ease-[cubic-bezier(0,0.4,0,1.01)]
        [filter:drop-shadow(0_0_0_#4F46E5)]
        group-hover:top-[-25%] group-hover:left-[10%]
        group-hover:[filter:drop-shadow(0_0_10px_#4F46E588)] group-hover:z-[2]
      ">
        <StarSvg />
      </div>

      {/* Star 3 */}
      <div className="
        absolute top-[40%] left-[40%] w-[5px] z-[-5]
        transition-all duration-[1000ms] ease-[cubic-bezier(0,0.4,0,1.01)]
        [filter:drop-shadow(0_0_0_#4F46E5)]
        group-hover:top-[55%] group-hover:left-[25%]
        group-hover:[filter:drop-shadow(0_0_10px_#4F46E588)] group-hover:z-[2]
      ">
        <StarSvg />
      </div>

      {/* Star 4 */}
      <div className="
        absolute top-[20%] left-[40%] w-[8px] z-[-5]
        transition-all duration-[800ms] ease-[cubic-bezier(0,0.4,0,1.01)]
        [filter:drop-shadow(0_0_0_#4F46E5)]
        group-hover:top-[30%] group-hover:left-[80%]
        group-hover:[filter:drop-shadow(0_0_10px_#4F46E588)] group-hover:z-[2]
      ">
        <StarSvg />
      </div>

      {/* Star 5 */}
      <div className="
        absolute top-[25%] left-[45%] w-[14px] z-[-5]
        transition-all duration-[600ms] ease-[cubic-bezier(0,0.4,0,1.01)]
        [filter:drop-shadow(0_0_0_#4F46E5)]
        group-hover:top-[25%] group-hover:left-[115%]
        group-hover:[filter:drop-shadow(0_0_10px_#4F46E588)] group-hover:z-[2]
      ">
        <StarSvg />
      </div>

      {/* Star 6 */}
      <div className="
        absolute top-[5%] left-[50%] w-[5px] z-[-5]
        transition-all duration-[800ms] ease-in-out
        [filter:drop-shadow(0_0_0_#4F46E5)]
        group-hover:top-[5%] group-hover:left-[60%]
        group-hover:[filter:drop-shadow(0_0_10px_#4F46E588)] group-hover:z-[2]
      ">
        <StarSvg />
      </div>
    </>
  )

  const baseClass = `
    group relative inline-flex items-center gap-2.5
    px-5 py-3 rounded-xl text-sm font-bold
    text-[#0D0D1A] bg-gradient-to-r from-[#4F46E5] to-[#818CF8]
    border-2 border-[#4F46E5]
    shadow-[0_0_0_#4F46E555]
    transition-all duration-300 ease-in-out
    cursor-pointer overflow-visible
    hover:bg-none hover:bg-transparent hover:text-[#4F46E5]
    hover:shadow-[0_0_25px_#4F46E555]
    active:scale-95
    ${className}
  `

  if (href) {
    return (
      <Link href={href} className={baseClass}>
        {inner}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={baseClass}>
      {inner}
    </button>
  )
}

const StarSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 784.11 815.53"
    className="w-full h-auto fill-[#4F46E5]"
  >
    <path d="M392.05 0c-20.9,210.08-184.06,378.41-392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93-210.06 184.09-378.37 392.05-407.74-207.98-29.38-371.16-197.69-392.06-407.78z" />
  </svg>
)
