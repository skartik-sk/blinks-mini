'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden ">
      <div className="container relative z-10 mx-auto px-4 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center space-y-8">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              <span className="bg-gradient-to-r from-[#ff9a9e] to-[#ff6b95] bg-clip-text text-transparent">
                World-class&nbsp;
              </span>
              <span className="bg-gradient-to-r from-[#ff6b95] to-[#a855f7] bg-clip-text text-transparent">
                talent&nbsp;
              </span>
              <span className="text-white">for</span>
              <br />
              <span className="text-white">a borderless market</span>
            </h1>
            <div className="space-y-4">
              <p className="text-lg text-gray-300">
                NinjaPromo is all about opening doors to world-class opportunities. We ensure that every
                Ninja gets a fair chance to excel and enjoy fair pay, no matter where they're based.
              </p>
              <p className="text-lg text-gray-300">
                And you? You get the crème de la crème, the top 1% of global marketing and design talent
                working tirelessly for you.
              </p>
            </div>
            <div>
              <Button
                className="bg-gradient-to-r from-[#ff9a9e] to-[#a855f7] text-white hover:from-[#ff8a8e] hover:to-[#9645e6]"
                size="lg"
                asChild
              >
                <Link href="#">Meet your Ninjas</Link>
              </Button>
            </div>
          </div>
          <div className="relative">

            {/* purple gradient  */}
            {/* <motion.div
              className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-gradient-to-br from-purple-600/20 to-purple-900/30 blur-2xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.6, 0.5],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            /> */}
            <div className="relative aspect-square">
              {/* Orbital elements */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute left-1/2 top-1/2"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * -4,
                  }}
                >
                  <div
                    className="relative h-4 w-4 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      transform: `rotate(${i * 72}deg) translateX(${120 + i * 30}px)`,
                    }}
                  >
                    <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-purple-300/20 bg-white/10 backdrop-blur-sm">
                      <Image
                        src="/placeholder.svg"
                        alt="Team member"
                        width={40}
                        height={40}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
              {/* Center elements */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  className="h-16 w-16 text-white"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {/* Placeholder for logo/star */}
                  <div className="h-full w-full rounded-full bg-gradient-to-br from-white/20 to-purple-500/20 backdrop-blur-sm" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}