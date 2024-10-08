

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Zap } from "lucide-react";
import SolanaBlinksCard from '../blinkcard/page';
import connectDB from "@/lib/dbconnect";
import { ICreator } from "@/lib/interface/creater";
import Creator from "@/lib/models/creater";
import Link from "next/link";
import Creatorpage from "./creatorpage";

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
    <div className="min-h-screen bg-black text-white p-4 sm:p-6 lg:p-8">
      <div className="flex gap-6 ">
       <Creatorpage creator={creators}/>
        
      </div>
    </div>
  );
}