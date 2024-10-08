

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Zap } from "lucide-react";
import SolanaBlinksCard from '../blinkcard/page';
import connectDB from "@/lib/dbconnect";
import { ICreator } from "@/lib/interface/creater";
import Creator from "@/lib/models/creater";
import Link from "next/link";
export default async function Component() {
  const leaderboard=[
    { address: "7fUAJdStEuGbc3sM84cKRL6yYaaSstyLSU", views: 1024 },
    { address: "9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin", views: 986 },
    { address: "2FrmqYoYZejWKwPXaFywdgaHmUMFPuSPh6k1veRkwB1B", views: 879 },
    { address: "5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1", views: 765 },
    { address: "6PR9qrHtpVtYGdEKqyvFQdLTZs8xwbRRorUiHMEDpvTk", views: 654 },
    { address: "8PR9qrHtpVtYGdEKqyvFQdLTZs8xwbRRorUiHMEDpvTl", views: 543 },
    { address: "3FrmqYoYZejWKwPXaFywdgaHmUMFPuSPh6k1veRkwB1C", views: 432 },
    { address: "1xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFim", views: 321 },
    { address: "4Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j2", views: 210 },
    { address: "0fUAJdStEuGbc3sM84cKRL6yYaaSstyLSV", views: 109 },
  ];

 // Define the type for leaderboard items
interface LeaderboardItem {
  address: string;
  views: number;
}

// Function to find the top performer
const findTopPerformer = (leaderboard: LeaderboardItem[]): LeaderboardItem => {
  return leaderboard.reduce((top, item) => (item.views > top.views ? item : top), leaderboard[0]);
};


  const topPerformer = findTopPerformer(leaderboard);

    await connectDB();
    let creators: ICreator[] = [];
    try {
      creators = await Creator.find();

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
                      <h3 className="text-lg font-semibold mb-1 text-gray-400">Top Performer</h3>
                      <p className="font-mono text-xs sm:text-sm mb-1 break-all text-gray-500">{topPerformer.address}</p>
                      <Badge variant="secondary" className="bg-purple-900 text-purple-100 hover:bg-purple-800">
                        {topPerformer.views.toLocaleString()} views
                      </Badge>
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