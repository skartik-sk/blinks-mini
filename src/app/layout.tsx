import type { Metadata } from "next";
import "./globals.css";
import connectDB from "@/lib/dbconnect";
import Header from "@/components/header";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const metadata: Metadata = {
  title: "Dashh",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  connectDB();
  return (
    <html lang="en">
      <body>
        {/* the div below is the grid background and can be used in any other projetc too */}

        <div className="fixed left-0 top-0 -z-10 h-full w-full">
          <div className="relative h-full w-full bg-black">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
            </div>
            <div className="absolute right-[-25%] top-[-40%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]">
            </div>
            <div className="absolute left-[-25%] bottom-[-95%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_400px,#fbfbfb36,#000)]">
            </div>
          </div>
        </div>
        <Header /><ToastContainer />
        {children}
      </body>
    </html>
  );
}
