import { connectMongoDB } from "@/app/libs/mongodb";
import { IUser } from "@/models/User";
import { messages } from "@/utils/mensajes";
import { NextRequest, NextResponse } from "next/server";

export default async function POST(request:NextRequest) {
  try {
    await connectMongoDB()
    const body: IUser = await request.json()
    const {email, password} = body

    // validamos que se rellenaron los campos
    if (!email || !password) {
      return NextResponse.json({message: messages.error.needProps},{status: 400})
    }
  } catch (error) {
    
  }
}