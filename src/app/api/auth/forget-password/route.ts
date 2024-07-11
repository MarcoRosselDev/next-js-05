import { connectMongoDB } from "@/app/libs/mongodb"
import User from "@/models/User"
import { messages } from "@/utils/mensajes"
import { NextRequest, NextResponse } from "next/server"
import jwt from "jsonwebtoken"
import { Resend } from "resend"
import { EmailTemplate } from "@/components/email_forget_password/email_template"
const resend = new Resend(`${process.env.RESEND_KEY}`)



export async function POST(request:NextRequest) {
  try {
    const body: { email: string } = await request.json()
    const { email } = body
    await connectMongoDB()
    const encontrar_usuario = User.findOne({email})
    // validar si existe el usuario
    if (!encontrar_usuario)                    return NextResponse.json({  message: messages.error.user_not_found  },{   status:400  }) 
    // @ts-ignore
    const tokenData = {   email: encontrar_usuario.email,    userId: encontrar_usuario._id    }
    const token = jwt.sign({ data: tokenData }, `${process.env.HAS_PASS}`, {  expiresIn: 86400  })
    const forgetUrl = `http://localhost:3000/change-password?token=${token}`
    // @ts-ignore
    await resend.emails.send({      from: "onboarding@resend.dev",  to: email,  subject: "Cambio de Contraseña",  react: EmailTemplate({ buttonUrl: forgetUrl })      })


    return                                            NextResponse.json({   message: messages.success.email_sended  },{   status: 200 })
  } catch (error) {
    return                                            NextResponse.json({   message: messages.error.generic, error  },{   status: 400 })
  }
}