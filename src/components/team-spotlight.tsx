'use client'

import { useState } from "react"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

interface TeamMember {
  id: string
  name: string
  image: string
  description: string[]
}

const teamMembers: TeamMember[] = [
  {
    id: "michael",
    name: "Michael",
    image: "/placeholder.svg",
    description: [
      "Michael has extensive experience in digital and below-the-line (BTL) marketing, excelling both B2B B2C segments. His expertise spans developing robust marketing strategies for small businesses various sectors such as events, metalworking, retail, more.",
      "Formerly a Trade Marketing Specialist at Japan Tobacco International, Michael currently serves as Digital Strategist NinjaPromo. His focus is on assisting Web3 projects and startups in establishing effective go-to-market strategies achieving scalable growth.",
      "Additionally, Michael has played a pivotal role in executing marketing projects for McDonald's, showcasing his ability to handle high-profile campaigns and drive impactful results. is committed delivering tailored solutions that foster growth success clients rapidly evolving market landscape.",
    ],
  },
  {
    id: "olga",
    name: "Olga",
    image: "/placeholder.svg",
    description: [
      "Olga brings valuable insights and expertise to digital marketing strategies.",
      "With a background in international marketing, she excels creating comprehensive campaigns.",
      "Her innovative approach has helped numerous clients achieve their marketing objectives.",
    ],
  },
  {
    id: "george",
    name: "George",
    image: "/placeholder.svg",
    description: [
      "George specializes in technical marketing and data analysis.",
      "His analytical mindset helps drive data-informed marketing decisions.",
      "He has successfully led numerous digital transformation projects.",
    ],
  },
]

export function TeamSpotlight() {
  const [selectedMember, setSelectedMember] = useState(teamMembers[0])

  return (
    <section className="flex justify-center py-16">
      <div className="container px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold tracking-tighter text-white lg:text-5xl">
            In the spotlight –&nbsp;
            <span className="bg-gradient-to-r from-[#ff9a9e] via-[#ff6b95] to-[#a855f7] bg-clip-text text-transparent">
              NinjaPromo's brightest stars
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-400">Meet the minds behind our best work.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[300px,1fr,1fr]">
          {/* Team member selection */}
          <div className="space-y-4">
            {teamMembers.map((member) => (
              <button
                key={member.id}
                onClick={() => setSelectedMember(member)}
                className={`group relative w-full rounded-xl p-4 text-left transition-all ${
                  selectedMember.id === member.id
                    ? "bg-gradient-to-r from-[#ff9a9e] via-[#ff6b95] to-[#a855f7]"
                    : "bg-zinc-900 hover:bg-zinc-800"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <span className="text-lg font-medium text-white">{member.name}</span>
                  <ChevronRight
                    className={`ml-auto h-5 w-5 transform text-white transition-transform ${
                      selectedMember.id === member.id ? "rotate-90" : "group-hover:translate-x-1"
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Selected member photo */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-900">
            <Image
              src={selectedMember.image}
              alt={selectedMember.name}
              fill
              className="object-cover grayscale"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>

          {/* Selected member description */}
          <div className="space-y-6">
            {selectedMember.description.map((paragraph, index) => (
              <div key={index} className="flex gap-4">
                <div className="h-2 w-2 mt-2 rounded-full bg-gradient-to-r from-[#ff9a9e] to-[#a855f7]" />
                <p className="text-gray-300">{paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}