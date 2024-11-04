'use client';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import axios from 'axios';
import { useRouter } from "next/navigation";
import Footer from "@/components/footer";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


export default function CreatorForm() {
  const [content, setContent] = useState({
    title: '',
    description: '',
    label: '',
    amount: '',
    icons: '',
  });
  const router = useRouter()
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { solana }:any = window;
        // Request connection to Phantom
        const response = await solana.connect();
        console.log('wallet:', response.publicKey.toString());
        
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      solAdd: response.publicKey.toString(),
      title: formData.get('title'),
      description: formData.get('description'),
      label: formData.get('label'),
      amount: formData.get('amount'),
      icons: formData.get('icons'),
    };


    try {
      const response = await axios.post('/api/posts', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Data successfully sent to the server:', response.data);

      if(response.data.data._id != undefined){
console.log(response.data.data._id);
router.push(`https://dial.to/?action=solana-action:https://blinks.knowflow.study/api/donate/${response.data.data._id}&cluster=devnet`);

      }

    } catch (error) {
      console.error('There was an error sending the data:', error);
    }
  };

   function isValidURL(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch (e) {
      return false;
    }
    
  }

  return (
    <>
      <div className="min-h-screen  flex flex-row-reverse items-center p-3 justify-center">
         <div className='flex justify-center items-center p-2'>
        <div className="flex flex-col w-full max-w-[25rem] min-w-80 bg-white rounded-xl shadow-lg overflow-hidden p-4 sm:w-[20rem] md:w-[25rem]">
          <div className="relative h-48">
            <div className='p-3'>
              <Image
              src={isValidURL(content.icons) ? content.icons : "https://cdn.pixabay.com/photo/2017/11/10/05/24/add-2935429_1280.png"}
              alt="Solana Blinks"
              layout="fill"
              objectFit="cover"
              className="rounded-md transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
            </div>
          </div>
          <div className="text-zinc-500 flex gap-2 items-center mt-3 ">
            <p className='text-[13px] font-semibold'>blinks.knowflow.study</p>
            <FontAwesomeIcon icon={faShieldHalved}  size="sm" />
          </div>
          <div className=''>
            <div className='flex flex-col gap-2 my-2'>
              <h2 className="text-xl font-bold text-black">{content.title}</h2>
            
            </div>
            
            <p className="text-black mb-4">{content.description}</p>

              <button
                className="bg-black text-white hover:bg-gray-800 py-2 px-4 rounded-lg relative w-full"
              >
                Participate 0.1 SOL
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 w-2/3 h-full transform -translate-x-full -translate-y-full animate-slide-diagonal"></div>
                <style jsx>{`
                  @keyframes slide-diagonal {
                    0% {
                      transform: translateX(-100%) translateY(-0%);
                    }
                    100% {
                      transform: translateX(200%) translateY(0%);
                    }
                  }
                  .animate-slide-diagonal {
                    animation: slide-diagonal 2s infinite;
                  }
                `}</style>
              </button>

          </div>
        </div>
      </div>
        {/* <h1 className='text-center my-4 text-3xl font-bold text-gray-800'>Welcome to Boastit</h1> */}
        <Card className="w-full max-w-md mx-auto my-auto text-zinc-200 bg-black shadow-lg rounded-lg border-gray-800">
          <CardHeader className="p-6 border-b border-gray-800">
            <CardTitle className="text-xl font-semibold text-white">Product Information</CardTitle>
            <CardDescription className="text-zinc-400">Enter the details for your new post</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
            
              <div className="space-y-2">
                <Label htmlFor="title" className="block text-sm font-medium text-zinc-200">Title *</Label>
                <Input 
                  id="title" 
                  name="title" 
                  required 
                  className="bg-black border-gray-800 text-white placeholder-zinc-400 focus:border-white focus:ring-white"
                  placeholder="Enter product title"
                  value={ content.title }
                  onChange={(e) => setContent({ ...content, title: e.target.value })}

                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="icons" className="block text-sm font-medium text-gray-200">Image URL *</Label>
                <Input 
                  id="icons" 
                  name="icons" 
                  type="url" 
                  required 
                  value={ content.icons }
                  className="bg-black border-gray-800 text-white placeholder-zinc-400 focus:border-white focus:ring-white"
                  placeholder="https://example.com/image.jpg"
                  
                  onChange={(e) => setContent({ ...content, icons: e.target.value })}
               
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description" className="block text-sm font-medium text-zinc-200">Description *</Label>
                <Textarea 
                  id="description" 
                  name="description" 
                  required 
                  className="bg-black border-gray-800 text-white placeholder-zinc-400 focus:border-white focus:ring-white"
                  placeholder="Describe your product"
                  rows={4}
                  value={ content.description }
                  onChange={(e) => setContent({ ...content, description: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="label" className="block text-sm font-medium text-zinc-200">Label *</Label>
                <Input 
                  id="label" 
                  name="label" 
                  required 
                  value={ content.label }
                  className="bg-black border-gray-800 text-white placeholder-zinc-400 focus:border-white focus:ring-white"
                  placeholder="Not visible in blinks"
                  onChange={(e) => setContent({ ...content, label: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="amount" className="block text-sm font-medium text-zinc-200">Amount $ *</Label>
                <Input 
                  id="amount" 
                  name="amount" 
                  type="number" 
                  required 
                  value={ content.amount }
                  className="bg-black border-gray-800 text-white placeholder-zinc-400 focus:border-white focus:ring-white"
                  placeholder="0.00"
                  step="0.01"
                  onChange={(e) => setContent({ ...content, amount: e.target.value })}
                />
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-[#ff9a9e] to-[#ff6b95] text-white ">Submit</Button>
            </form>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </>
  );
}