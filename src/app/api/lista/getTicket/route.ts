import { connectMongoDB } from "@/app/libs/mongodb";
import Ticket from "@/models/Targeta";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest) {
  try {
    await connectMongoDB()
    const d = await Ticket.find()
    if (!d) {
      return  NextResponse.json({  message: "algo salio mal"},{ status: 400 })
    }
    
    return  NextResponse.json({d},{ status: 200 })
    } catch (error) {
    return  NextResponse.json({  message: "algo salio mal", error},{ status: 400 })
  }
}