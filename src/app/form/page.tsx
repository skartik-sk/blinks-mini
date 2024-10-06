'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export default function CreatorForm() {
  const [formData, setFormData] = useState({
    title: '',
    imageUrl: '',
    description: '',
    label: '',
    amount: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the data to an API or perform some action
  }

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
              <Label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</Label>
              <Input 
                id="title" 
                name="title" 
                value={formData.title} 
                onChange={handleChange} 
                required 
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">Image URL</Label>
              <Input 
                id="imageUrl" 
                name="imageUrl" 
                type="url" 
                value={formData.imageUrl} 
                onChange={handleChange} 
                required 
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</Label>
              <Textarea 
                id="description" 
                name="description" 
                value={formData.description} 
                onChange={handleChange} 
                required 
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="label" className="block text-sm font-medium text-gray-700">Label</Label>
              <Input 
                id="label" 
                name="label" 
                value={formData.label} 
                onChange={handleChange} 
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
                value={formData.amount} 
                onChange={handleChange} 
                required 
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <Button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
};