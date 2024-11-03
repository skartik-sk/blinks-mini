'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function HighlightsSection() {
  return (
    <section className="w-full flex justify-center py-12 md:py-24">
      <div className="container px-4">
        <h1 className="mb-12 text-4xl font-bold tracking-tight text-white md:text-5xl">
          Ninja Promo&nbsp;
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 bg-clip-text text-transparent">
            Highlights
          </span>
        </h1>
        
        <div className="flex flex-col gap-6 lg:flex-row">
          {/* Forbes Feature Card */}
          <Card className="flex-1 overflow-hidden bg-zinc-900 text-white">
            <CardContent className="relative p-5">
              <Image
                src="https://ninjapromo.io/wp-content/uploads/2024/02/newforbesimg.png"
                alt="Team working in office"
                width={600}
                height={400}
                className="h-full w-full object-cover brightness-50"
              />
              {/* <div className="absolute bottom-1/2 left-1/3 ">
                <div className="mb-4">
                  <h2 className="mb-2 text-xl">We are featured in</h2>
                  <Image
                    src="/placeholder.svg?height=60&width=200"
                    alt="Forbes logo"
                    width={200}
                    height={60}
                    className="brightness-200 contrast-200 invert"
                  />
                </div>
              </div> */}
            </CardContent>
            <div className="p-5">
              <p className="mb-4 max-w-[600px] text-gray-200">
              Our founders have shared valuable insights on the advantages of leveraging decentralized platforms like DASHH to connect directly with influencers, emphasizing transparency, trust, and the power of on-chain engagement verification.
              </p>
              <Link
                href="#"
                className="text-pink-400 hover:text-pink-300"
              >
                Read the article →
              </Link>
            </div>
          </Card>

          <div className="flex flex-1 flex-col gap-6">
            <div className="flex flex-col gap-6 sm:flex-row">
              {/* Conference Video Card */}
              <Card className="flex-1 overflow-hidden bg-zinc-900 text-white">
                <CardContent className="relative  p-0">
                  <Image
                    src="https://ninjapromo.io/wp-content/uploads/2024/02/slavavideo.png"
                    alt="Blockchain Conference"
                    width={300}
                    height={200}
                    className="h-full w-full object-cover brightness-75"
                  />
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-sm font-medium">
                    See DASHH in action and discover how our platform transforms influencer marketing.
                    </h3>
                  </div>
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                      <svg
                        className="h-6 w-6 text-white"
                        fill="currentColor"
                        viewBox="0 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Growth Marketing Summit Card */}
              <Card className="flex-1 overflow-hidden bg-zinc-900 text-white">
                <CardContent className="relative  p-0">
                  <Image
                    src="https://ninjapromo.io/wp-content/uploads/2024/02/newarttop3.png"
                    alt="Growth Marketing Summit"
                    width={300}
                    height={200}
                    className="h-full w-full object-cover brightness-75"
                  />
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-sm font-medium">
                      NinjaPromo at Growth Marketing Summit, Frankfurt 2023
                    </h3>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Blueprint Card */}
            <Card className="overflow-hidden bg-gradient-to-r from-purple-900 to-blue-900 text-white">
              <CardContent className="grid gap-6 p-6 sm:grid-cols-2 sm:items-center">
                <div className="relative h-48 w-full sm:h-full">
                  <Image
                    src="https://ninjapromo.io/wp-content/uploads/2024/02/hcta01.png"
                    alt="Marketing Blueprint"
                    width={300}
                    height={200}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">
                    How to build a powerful marketing department in 2024
                  </h3>
                  <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-600 hover:to-purple-600">
                    Get the step-by-step Blueprint
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}