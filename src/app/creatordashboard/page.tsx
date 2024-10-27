

import connectDB from "@/lib/dbconnect";
import { ICreator } from "@/lib/interface/creater";
import Creator from "@/lib/models/creater";

import Creatorpage from "./creatorpage";
export const dynamic = 'force-dynamic'
export default async function Component() {
  

  let creators: ICreator[] = [];
  try {
      await connectDB();
      creators = await Creator.find().sort({ _id: -1 });

      console.log(creators);
    } catch (error) {
      console.error(error);
    }

    return (
      <div className="min-h-screen text-white p-4 sm:p-6 lg:p-8">
        <div className="flex gap-6 ">
          <Creatorpage creator={creators} />
        </div>
      </div>
    );
}