import { redirect } from "next/navigation"

export async function POST(request:Request)=> {
console.log("yaha ayaa");
    redirect('https://blinks.knowflow.study/form')
}