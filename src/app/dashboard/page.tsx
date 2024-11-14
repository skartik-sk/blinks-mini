
import { Card } from "@/components/ui/card";
import React, { useEffect, useState } from "react";

import { SolanaBlinksCard } from "../blinkcard/SolanaBlinksCard";
import connectDB from "@/lib/dbconnect";
import { ICreator } from "@/lib/interface/creater";
import Creator from "@/lib/models/creater";

import Footer from "@/components/footer";
import CustomToggle from "@/components/custom-toggle";
import User from "@/lib/models/user";
import { IUser } from "@/lib/interface/user";
export const dynamic = "force-dynamic";
export default function Component() {
  const [selectedOption, setSelectedOption] = useState("All");
  const [creators, setCreators] = useState<ICreator[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        await connectDB();
        if (selectedOption === "Participated") {
          const { solana }: any = window;
          // Request connection to Phantom
          const response = await solana.connect();
          const participated: IUser[] = await User.find({
            solAdd: response.publicKey.toString(),
          });
          const creatorIds = participated.map((user) => {
            const url = new URL(user.post);
            return url.pathname.split("/")[3];
          });

          setCreators(
            await Creator.find({ _id: { $in: creatorIds } }).sort({ _id: -1 })
          );
        } else if (selectedOption === "All") {
          setCreators(await Creator.find().sort({ _id: -1 }));
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const handleToggle = (selected: string) => {
    setSelectedOption(selected);
  };
 
  return (
    <>
      <div className="flex flex-col text-white p-4 sm:p-6 lg:p-8">
        <div className="my-4 flex items-center ">
          {" "}
          <div className=" my-4 mx-4">
            <CustomToggle
              options={["All", "Participated"]}
              onChange={handleToggle}
            />
            {/* <CustomToggle options={["All", "Participated"]} onChange={handleToggle} /> */}
          </div>
          <h2 className="text-2xl mx-auto font-bold text-white text-center">
            Explore Campaigns
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          {creators.map((creator) => {
            return (
              <>
                <Card className="bg-black text-white h-fit border-gray-800">
                  {/* <CardHeader>
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
                      </CardContent> */}
                  <SolanaBlinksCard content={creator} id={creator.id} />
                </Card>
              </>
            );
          })}
        </div>
        <Footer />
      </div>
    </>
  );
}
