

import connectDB from "@/lib/dbconnect";
import { ICreator } from "@/lib/interface/creater";
import Creator from "@/lib/models/creater";

import Creatorpage from "./creatorpage";

export default async function Component() {
  

    await connectDB();
    let creators: ICreator[] = [];
    try {
      creators = await Creator.find().sort({ _id: -1 });

      console.log(creators);
    } catch (error) {
      console.error(error);
      
    }
   

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-6 lg:p-8">
      <div className="flex gap-6 ">
       <Creatorpage creator={creators}/>
        
      </div>
    </div>
  );
}