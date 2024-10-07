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
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      solAdd: formData.get('solAdd'),
      title: formData.get('title'),
      description: formData.get('description'),
      label: formData.get('label'),
      amount: formData.get('amount'),
      imgurl: formData.get('imgurl'),
    };
    console.log('Data:', data);

    try {
      const response = await axios.post('/api/posts', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log('Data successfully sent to the server:', response.data);

      if(response.data != null){

router.push(`https://dial.to/?action=solana-action:http://localhost:3000/api/donate/${response.data._id}`)

      }

    } catch (error) {
      console.error('There was an error sending the data:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-3 justify-center">
      <h1 className='text-center my-4 text-3xl font-bold text-gray-800'>Welcome to Boastit</h1>
      <Card className="w-full max-w-md mx-auto my-auto bg-white shadow-lg rounded-lg">
        <CardHeader className="p-6 border-b border-gray-200">
          <CardTitle className="text-xl font-semibold text-gray-700">Product Information</CardTitle>
          <CardDescription className="text-gray-500">Enter the details for your new post</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="solAdd" className="block text-sm font-medium text-gray-700">Solana Address</Label>
              <Input 
                id="solAdd" 
                name="solAdd" 
                required 
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</Label>
              <Input 
                id="title" 
                name="title" 
                required 
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="imgurl" className="block text-sm font-medium text-gray-700">Image URL</Label>
              <Input 
                id="imgurl" 
                name="imgurl" 
                type="url" 
                required 
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</Label>
              <Textarea 
                id="description" 
                name="description" 
                required 
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="label" className="block text-sm font-medium text-gray-700">Label</Label>
              <Input 
                id="label" 
                name="label" 
                required 
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</Label>
              <Input 
                id="amount" 
                name="amount" 
                type="number" 
                required 
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <Button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}