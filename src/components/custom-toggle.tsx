"use client"

// import { ArrowRightIcon } from "lucide-react"
import React, { useState } from "react"

interface ToggleProps {
  options?: [string, string]
  onChange?: (selectedOption: string) => void
}

export default function CustomToggle({ options = ["Creator", "User"], onChange }: ToggleProps) {
  const [activeOption, setActiveOption] = useState(options[0])

  const handleToggle = (option: string) => {
    setActiveOption(option)
    if (onChange) {
      onChange(option)
    }
  }

  return (
    // Here is the custom toggle component
    <div className="mb-8 flex dark">
      <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a9a9a9_0%,#0c0c0c_50%,#a9a9a9_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#171717_0%,#737373_50%,#171717_100%)]" />
        <div className="inline-flex h-full w-full cursor-pointer justify-center rounded-full bg-white px-2 py-1 text-s font-medium leading-5 text-slate-600 backdrop-blur-xl dark:bg-black dark:text-slate-200">
          {/* place any content here the effect is because of the above wrapper code */}
          <div className="flex items-center justify-center">
            <div className="bg-[#black] rounded-full flex dark ">
              {options.map((option) => (
                <>
                  <button
                    key={option}
                    onClick={() => handleToggle(option)}
                    className={`py-2 px-4 rounded-full text-sm lg:text-base font-medium transition-colors duration-200 ${activeOption === option
                        ? 'bg-white text-[#353348]'
                        : 'bg-transparent text-white'
                      }`}
                  >

                    {option}
                  </button>
                </>
              ))}
            </div>
          </div>
          {/* Here the content ends */}
        </div>
      </span>
    </div>
  )
}