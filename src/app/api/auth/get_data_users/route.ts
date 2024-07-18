import { connectMongoDB } from "@/app/libs/mongodb";
import User from "@/models/User";
import { messages } from "@/utils/mensajes";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request:NextRequest) {
  try {
    await connectMongoDB()
    //const body = await request.json()
    const usuarios = await User.find({})
    if (!usuarios)  return NextResponse.json(
      { message: messages.error.user_not_found  },
      { status:400  }) 
    return NextResponse.json(
      {message: messages.success.autorized,
      data: usuarios  },
    { status: 200})
  } catch (error) {
    console.log(error)
  }
}