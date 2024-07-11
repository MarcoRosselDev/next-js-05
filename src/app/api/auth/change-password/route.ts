import { connectMongoDB } from "@/app/libs/mongodb";
import { messages } from "@/utils/mensajes";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import User from "@/models/User"
import bcrypt from "bcryptjs"
interface BodyProps {
  newPassword: string;
  confirmPassword: string;
}



export async function POST(request:NextRequest) {
  try {
    const body: BodyProps = await request.json()
    const { newPassword, confirmPassword } = body
    // validamos si rellenaron los campos     and     las claves sean las mismas
    if (!newPassword || !confirmPassword)                                           return NextResponse.json({  message: messages.error.needProps },{ status:400 })
    if (newPassword !== confirmPassword)                                            return NextResponse.json({  message: messages.error.password_mistake },{ status:400 })
    await connectMongoDB()
    const headersList = headers()
    const token = headersList.get("token")
    if (!token)                                                                     return NextResponse.json({  message: messages.error.not_authorized },{ status:400 })
    try {
      const isTokenValid = jwt.verify(token, `${process.env.HAS_PASS}`)
      // @ts-ignore
      const { data } = isTokenValid
      const encontrar_usuario = await User.findById(data.userId)
      if (!encontrar_usuario)                                                       return NextResponse.json({  message: messages.error.user_not_found },{ status:400 })
      const hashedPassword = await bcrypt.hash(newPassword, 10)
      encontrar_usuario.password = hashedPassword
      await encontrar_usuario.save()
      return                                                                               NextResponse.json({ message: messages.success.password_restored },{ status: 200 } )
    } catch (error) {
      return                                                                               NextResponse.json({ message: messages.error.token_not_valid, error },{ status: 400 } )
    }
    } catch (error) {
    return                                                                                 NextResponse.json({message: messages.error.generic, error },{status: 400})
  }
}