import { connectMongoDB } from "@/app/libs/mongodb";
import Ticket from "@/models/Targeta";
import { NextRequest, NextResponse } from "next/server";

export default async function POST(request: NextRequest) {
  try {
    await connectMongoDB()
    const body = await request.json()
    const ticketData = body.formData

    await Ticket.create(ticketData)

    return NextResponse.json({message:"se creo exitosamente", },{status:201})
  } catch (error) {
    return NextResponse.json({message:"algo salio mal en la creacion de la targeta", error},{status:400})
  }
}
/* this mean

body:
{
  "ticketData":
  {
    title: "random title",               //String
    description: "un texto lorem ...",                   //String,
    category:"",                //String,
    priority:                             //Number,
    staturs:                            //String,
    active:                             //Boolean,
  }
}

*/