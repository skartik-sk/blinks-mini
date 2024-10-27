"use client"

import { useState, useEffect } from "react"

export default function SolanaLoadingComponent() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0
        }
        const diff = Math.random() * 10
        return Math.min(oldProgress + diff, 100)
      })
    }, 200)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-4">
      <div className="w-full max-w-md">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-purple-500 text-sm font-medium">Loading</span>
          <span className="text-purple-500 text-sm font-medium">{Math.round(progress)}%</span>
        </div>
        <div className="h-1 w-full bg-gray-900 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-200 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-8 flex justify-center">
          <svg className="animate-spin h-8 w-8 text-purple-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 5.373 12h4zm2 5.291A7.962 7.962 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
      </div>
    </div>
  )
}