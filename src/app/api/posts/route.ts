import { NextApiRequest, NextApiResponse } from 'next';
import Creator from '@/lib/models/creater';


export  async function POST(req: NextApiRequest, res: NextApiResponse) {
   
        try {
            

            console.log(req);
            const data = req.formdata();

            const newPost = new Creator({
                solAdd: data.solAdd,
                title: data.title,
                description: data.description,
                label: data.label,
                amount: data.amount,
                imgurl: data.imgurl
            });
console.log(newPost);
            await newPost.save();

            res.status(201).json({ message: 'Post created successfully', post: newPost });
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error', error });
        }
   
}