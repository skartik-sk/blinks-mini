'use client';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import axios from 'axios';
import { useRouter } from "next/navigation";


export default function CreatorForm() {
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
    console.log('Data:', data);

    try {
      const response = await axios.post('/api/posts', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Data successfully sent to the server:', response.data);

      if(response.data.data._id != undefined){

router.push(`https://dial.to/?action=solana-action:http://localhost:3000/api/donate/${response.data.data_id}`)

      }

    } catch (error) {
      console.error('There was an error sending the data:', error);
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center p-3 justify-center">
      {/* <h1 className='text-center my-4 text-3xl font-bold text-gray-800'>Welcome to Boastit</h1> */}
      <Card className="w-full max-w-md mx-auto my-auto text-zinc-200 bg-black shadow-lg rounded-lg border-gray-800">
        <CardHeader className="p-6 border-b border-gray-800">
          <CardTitle className="text-xl font-semibold text-white">Product Information</CardTitle>
          <CardDescription className="text-zinc-400">Enter the details for your new post</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
           
            <div className="space-y-2">
              <Label htmlFor="title" className="block text-sm font-medium text-zinc-200">Title</Label>
              <Input 
                id="title" 
                name="title" 
                required 
                className="bg-black border-gray-800 text-white placeholder-zinc-400 focus:border-white focus:ring-white"
                placeholder="Enter product title"

              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="icons" className="block text-sm font-medium text-gray-700">Image URL</Label>
              <Input 
                id="icons" 
                name="icons" 
                type="url" 
                required 
                className="bg-black border-gray-800 text-white placeholder-zinc-400 focus:border-white focus:ring-white"
                placeholder="https://example.com/image.jpg"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description" className="block text-sm font-medium text-zinc-200">Description</Label>
              <Textarea 
                id="description" 
                name="description" 
                required 
                className="bg-black border-gray-800 text-white placeholder-zinc-400 focus:border-white focus:ring-white"
                placeholder="Describe your product"
                rows={4}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="label" className="block text-sm font-medium text-zinc-200">Label</Label>
              <Input 
                id="label" 
                name="label" 
                required 
                className="bg-black border-gray-800 text-white placeholder-zinc-400 focus:border-white focus:ring-white"
                placeholder="Product label or category"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="amount" className="block text-sm font-medium text-zinc-200">Amount</Label>
              <Input 
                id="amount" 
                name="amount" 
                type="number" 
                required 
                className="bg-black border-gray-800 text-white placeholder-zinc-400 focus:border-white focus:ring-white"
                placeholder="0.00"
                step="0.01"
              />
            </div>
            <Button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}