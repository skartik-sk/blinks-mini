/**
 * v0 by Vercel.
 * @see https://v0.dev/t/0W13RkH
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
// import { ArrowRightIcon } from "lucide-react";
// import ConnectPhantomWallet from "./connectPhantomWallet/page";
// import  CustomToggle  from "@/components/custom-toggle";

import Footer from "@/components/footer";
import { HeroSection } from "@/components/hero-section";



export default function FrontPage() {
  return (
    <>
      <HeroSection />
      <section className=" flex justify-center w-full py-12 md:py-24 lg:py-32 xl:py-48 xl:pt-40 ">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 items-center">
            <div className="flex flex-col justify-center items-center space-y-8 text-center gap-7">
              {/* <CustomToggle /> */}
              {/* This is the chip element for toggle between creator and user  */}
              {/* <div className="mb-8 flex dark">
                <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a9a9a9_0%,#0c0c0c_50%,#a9a9a9_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#171717_0%,#737373_50%,#171717_100%)]" />
                  <div className="inline-flex h-full w-full cursor-pointer justify-center rounded-full bg-white px-3 py-1 text-s font-medium leading-5 text-slate-600 backdrop-blur-xl dark:bg-black dark:text-slate-200">
                    New snippets ⚡️
                    <span className="inline-flex items-center pl-2 text-black dark:text-white">
                      Read more{' '}
                      <ArrowRightIcon
                        className="pl-0.5 text-black dark:text-white"
                        size={16}
                      />
                    </span>
                  </div>
                </span>
                <a
                  href="https://github.com/ibelick/background-snippets"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                </a>
              </div> */}
              {/* toggle element ends here */}
              {/* <ConnectPhantomWallet /> */}
              <div className="space-y-2">
                <h3 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 p-2">
                  Engage and Earn with Instagram Stories
                </h3>
                <p className="max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto">
                  Perform transactions, sign up for the Reclaim Protocol, and get views on your Instagram stories. The highest engagement wins the total bid amount collected.
                </p>
              </div>
              <div className="w-full max-w-full space-y-4 mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                    <div className="p-2 bg-black bg-opacity-50 rounded-full">
                      <InboxIcon className="text-white h-6 w-6 mb-2 opacity-75" />
                    </div>
                    <h2 className="text-xl font-bold text-white">Transaction Tracking</h2>
                    <p className="text-zinc-200 dark:text-zinc-100">
                      Keep track of your transactions and ensure you meet the required amount to participate.
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                    <div className="p-2 bg-black bg-opacity-50 rounded-full">
                      <MergeIcon className="text-white h-6 w-6 mb-2 opacity-75" />
                    </div>
                    <h2 className="text-xl font-bold text-white">Reclaim Protocol Signup</h2>
                    <p className="text-zinc-200 dark:text-zinc-100">
                      Sign up for the Reclaim Protocol to start getting views on your Instagram stories.
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                    <div className="p-2 bg-black bg-opacity-50 rounded-full">
                      <SettingsIcon className="text-white h-6 w-6 mb-2 opacity-75" />
                    </div>
                    <h2 className="text-xl font-bold text-white">Engagement Tracking</h2>
                    <p className="text-zinc-200 dark:text-zinc-100">
                      Track the engagement on your Instagram stories and see how you rank.
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                    <div className="p-2 bg-black bg-opacity-50 rounded-full">
                      <SearchIcon className="text-white h-6 w-6 mb-2 opacity-75" />
                    </div>
                    <h2 className="text-xl font-bold text-white">Find Top Stories</h2>
                    <p className="text-zinc-200 dark:text-zinc-100">
                      Discover the top-performing Instagram stories and learn from the best.
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                    <div className="p-2 bg-black bg-opacity-50 rounded-full">
                      <LockIcon className="text-white h-6 w-6 mb-2 opacity-75" />
                    </div>
                    <h2 className="text-xl font-bold text-white">Secure Transactions</h2>
                    <p className="text-zinc-200 dark:text-zinc-100">
                      Your transactions are secure and protected at all times.
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                    <div className="p-2 bg-black bg-opacity-50 rounded-full">
                      <CombineIcon className="text-white h-6 w-6 mb-2 opacity-75" />
                    </div>
                    <h2 className="text-xl font-bold text-white">Collaborative Engagement</h2>
                    <p className="text-zinc-200 dark:text-zinc-100">
                      Collaborate with others to boost your story views and engagement.
                    </p>
                  </div>
                  {/* <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                    <div className="p-2 bg-black bg-opacity-50 rounded-full">
                      <ZapIcon className="text-white h-6 w-6 mb-2 opacity-75" />
                    </div>
                    <h2 className="text-xl font-bold text-white">Instant Rewards</h2>
                    <p className="text-zinc-200 dark:text-zinc-100">
                      Earn instant rewards based on the engagement of your Instagram stories.
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                    <div className="p-2 bg-black bg-opacity-50 rounded-full">
                      <ChartIcon className="text-white h-6 w-6 mb-2 opacity-75" />
                    </div>
                    <h2 className="text-xl font-bold text-white">Analytics Dashboard</h2>
                    <p className="text-zinc-200 dark:text-zinc-100">
                      Access detailed analytics to track the performance of your stories.
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                    <div className="p-2 bg-black bg-opacity-50 rounded-full">
                      <GiftIcon className="text-white h-6 w-6 mb-2 opacity-75" />
                    </div>
                    <h2 className="text-xl font-bold text-white">Exclusive Offers</h2>
                    <p className="text-zinc-200 dark:text-zinc-100">
                      Unlock exclusive offers and promotions by participating in the program.
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />


      {/* <footer className="bg-black py-6">
        <div className="container mx-auto text-center text-zinc-200">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-zinc-200 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-zinc-200 hover:text-white">Terms of Service</a>
            <a href="#" className="text-zinc-200 hover:text-white">Contact Us</a>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-zinc-200 hover:text-white">
              <TwitterIcon className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-zinc-200 hover:text-white">
              <LinkedInIcon className="h-6 w-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-zinc-200 hover:text-white">
              <InstagramIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
      </footer> */}



    </>
  );
}

function CombineIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="8" x="2" y="2" rx="2" />
      <path d="M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" />
      <path d="M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" />
      <path d="M10 18H5c-1.7 0-3-1.3-3-3v-1" />
      <polyline points="7 21 10 18 7 15" />
      <rect width="8" height="8" x="14" y="14" rx="2" />
    </svg>
  );
}

function InboxIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
    </svg>
  );
}

function LockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function MergeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 6 4-4 4 4" />
      <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" />
      <path d="m20 22-5-5" />
    </svg>
  );
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function SettingsIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

// function ZapIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
//     </svg>
//   );
// }

// function ChartIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <line x1="18" y1="20" x2="18" y2="10" />
//       <line x1="12" y1="20" x2="12" y2="4" />
//       <line x1="6" y1="20" x2="6" y2="14" />
//     </svg>
//   );
// }

// function GiftIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <polyline points="20 12 20 22 4 22 4 12" />
//       <rect width="20" height="5" x="2" y="7" />
//       <line x1="12" y1="22" x2="12" y2="7" />
//       <path d="M12 7H7.5a2.5 2.5 0 1 1 0-5C10 2 12 7 12 7z" />
//       <path d="M12 7h4.5a2.5 2.5 0 1 0 0-5C14 2 12 7 12 7z" />
//     </svg>
//   );
// }

// function TwitterIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43 2a9.09 9.09 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.11 0c-2.5 0-4.5 2.01-4.5 4.5 0 .35.04.7.11 1.03A12.94 12.94 0 0 1 1.64 1.15a4.48 4.48 0 0 0-.61 2.27c0 1.57.8 2.95 2.02 3.76A4.48 4.48 0 0 1 .96 6.6v.06c0 2.2 1.56 4.03 3.63 4.45a4.52 4.52 0 0 1-2.04.08 4.5 4.5 0 0 0 4.2 3.12A9.05 9.05 0 0 1 0 19.54a12.8 12.8 0 0 0 6.95 2.04c8.34 0 12.9-6.92 12.9-12.9 0-.2 0-.39-.01-.58A9.22 9.22 0 0 0 23 3z" />
//     </svg>
//   );
// }

// function LinkedInIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
//       <rect width="4" height="12" x="2" y="9" />
//       <circle cx="4" cy="4" r="2" />
//     </svg>
//   );
// }

// function InstagramIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
//       <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
//       <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
//     </svg>
//   );
// }