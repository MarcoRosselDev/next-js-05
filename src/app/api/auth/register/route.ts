import { connectMongoDB } from "@/app/libs/mongodb";
import comprobacion_email from "@/utils/comprobacion_email";
import { messages } from "@/utils/mensajes";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    await connectMongoDB().catch(console.dir)
    //return NextResponse.json({

    const body = await request.json()
    console.log(body);
    const {email, password, confirmPassword} = body
    // validar que esten todos los campos completos
    if (!email || !password || !confirmPassword) {
      return NextResponse.json({message: messages.error.needProps},{status: 400})
    }

    // validar que el el email es un email valido
    // se pueden aplicar librerias aqui
    if (!comprobacion_email(email)) {
      return NextResponse.json({message: messages.error.bad_email_format},{status: 400})
    }
    

    return NextResponse.json({
      message: "Hola from next js mongo db"
    })
  } catch (error) {
    console.log(error);
  }
}
