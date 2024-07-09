import { connectMongoDB } from "@/app/libs/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    await connectMongoDB().catch(console.dir)
    //return NextResponse.json({

    const body = await request.json()
    console.log(body);
    
    return NextResponse.json({
      message: "Hola from next js mongo db"
    })
  } catch (error) {
    console.log(error);
  }
}
