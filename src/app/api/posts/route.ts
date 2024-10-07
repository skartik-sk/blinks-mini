import { NextRequest, NextResponse } from 'next/server';
import Creator from '@/lib/models/creater';
// import { ICreator } from '@/lib/interface/creater';


  export const POST = async(req: Request)=> {

    try {
        const data = await req.json();
        console.log('Data:', data);

      const newPost = new Creator({
        solAdd: data.solAdd,
        title: data.title,
        description: data.description,
        label: data.label,
        amount: data.amount,
        icon: data.imgurl,
      });

      await newPost.save();
      console.log(newPost);
      return NextResponse.json({ message: 'Post created successfully', data: newPost });
    } catch (error) {
        return NextResponse.json({ message: 'Internal Server Error', error });
    }
}