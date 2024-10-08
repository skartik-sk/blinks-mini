

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Zap } from "lucide-react";
import {SolanaBlinksCard} from '../blinkcard/SolanaBlinksCard';
import connectDB from "@/lib/dbconnect";
import { ICreator } from "@/lib/interface/creater";
import Creator from "@/lib/models/creater";
import Link from "next/link";
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
    <div className="flex flex-col bg-black text-white p-4 sm:p-6 lg:p-8">
      <div className="my-4 ">
        <h2 className="text-2xl font-bold text-white text-center">
          Events till now
        </h2>
      </div>
      <div className="flex ">
       
        <div className="flex flex-wrap justify-center gap-5">
          {
            creators.map((creator) => {
              console.log(creator);
              return (
               <>
               <Link href={`/dashboard/${creator.id}`}>
                <Card  className="bg-black text-white h-fit border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-xl sm:text-2xl font-bold flex items-center gap-2">
                      <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
                      {creator.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-1 text-gray-400">Total Prize</h3>
                      <p className="text-2xl sm:text-3xl font-bold text-white">{creator.amount}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-1 text-gray-400">Network Status</h3>
                      <Badge variant="secondary" className="bg-green-900 text-green-100 hover:bg-green-800">
                        Active
                      </Badge>
                    </div>
                  </CardContent>
                  <SolanaBlinksCard content ={creator}  id={creator.id}/>
                </Card>
              </Link></>
              )
            })
          }
          
        </div>
      </div>
    </div>
  );
}