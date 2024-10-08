
// import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '@/lib/dbconnect';
import Creator from '@/lib/models/creater';
import User from '@/lib/models/user';
// import { ICreator } from '@/lib/interface/creater';


  export const POST = async(req: Request)=> {
await connectDB();
    try {
        const data = await req.json();
      

      const newPost = new Creator({
        solAdd: data.solAdd,
        title: data.title,
        description: data.description,
        label: data.label,
        amount: data.amount,
        icons: data.icons,
      });

      await newPost.save();
      console.log(newPost);
      return Response.json({ message: 'Post created successfully', data: newPost });
    } catch (error) {
        return Response.json({ message: 'Internal Server Error', error });
    }
}

export const PUT = async(req: Request)=> {
    await connectDB();
    try {
        const data = await req.json();
        console.log(data);
        const { id, igProfile, views } = data;

        const updatedPost = await User.findByIdAndUpdate(id, { igProfile, views }, { new: true });
        console.log(updatedPost);
        return Response.json({ message: 'Post updated successfully', data: updatedPost }); } catch (error) {
        return Response.json({ message: 'Internal Server Error', error });
    }
}