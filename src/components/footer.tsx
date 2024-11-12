import { Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import logo from "../images/whiteDASHH.png"

export default function Footer() {
  return (
    <footer className="w-full  text-zinc-100 py-12 px-4">
      <div className="container mx-auto border-t border-zinc-800 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 ">
          <div className="flex items-center md:items-start">
            <div className="flex items-center gap-1 text-3xl font-bold">
              {/* <span>C</span>
              <Heart className="h-6 w-6 fill-current" /> */}
              <Image src={logo} alt="DASHH" width={64} height={64} />
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">For donors</h3>
            <div className="flex flex-col space-y-2">
              <Link href="#" className="hover:text-zinc-400 transition-colors">Donate crypto</Link>
              <Link href="#" className="hover:text-zinc-400 transition-colors">Donate NFTs</Link>
              <Link href="#" className="hover:text-zinc-400 transition-colors">Donate NFT Drop Proceeds</Link>
              <Link href="#" className="hover:text-zinc-400 transition-colors">Explore causes</Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">For nonprofits</h3>
            <div className="flex flex-col space-y-2">
              <Link href="#" className="hover:text-zinc-400 transition-colors">Getting started</Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Resources</h3>
            <div className="flex flex-col space-y-2">
              <Link href="#" className="hover:text-zinc-400 transition-colors">Blog</Link>
              <Link href="#" className="hover:text-zinc-400 transition-colors">Help center</Link>
              <Link href="#" className="hover:text-zinc-400 transition-colors">Terms of use</Link>
              <Link href="#" className="hover:text-zinc-400 transition-colors">Privacy notice</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse gap-8 md:flex-row md:items-center md:justify-between pt-8 border-t border-zinc-800">
          <div className="space-y-4">
            <p className="text-sm text-zinc-400">Copyright © 2024, All rights reserved.</p>
            <p className="text-xs text-zinc-500 max-w-4xl">
              Information provided is general and educational in nature. It is not intended to be, and should not be construed as, legal or tax advice. Crypto for Charity does not provide legal or tax advice. Availability of certain federal income tax deductions may depend on whether an individual itemizes deductions. Rules and regulations regarding tax deductions for charitable giving vary at the state level, and laws of a specific state or laws relevant to a particular situation may affect the applicability, accuracy, or completeness of the information provided. Charitable contributions of capital gain property held for more than one year are usually deductible at fair market value. Deductions for capital gain property held for one year or less are usually limited to cost basis. Consult an attorney or tax advisor regarding specific legal or tax situations.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-zinc-400 hover:text-zinc-100 transition-colors">
              {/* <Discord className="h-6 w-6" /> */}
              <span className="sr-only">Discord</span>
            </Link>
            <Link href="#" className="text-zinc-400 hover:text-zinc-100 transition-colors">
              <svg className="h-6 w-6 fill-white" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}