// esto va a ser un middleware que preguntara en el home si existe una cookie con el token de usuario
// si no esta la cookie no se puede acceder a la pagina x y requerira autenticacion en el login o crear usuario
import { messages } from "@/utils/mensajes";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import { connectMongoDB } from "@/app/libs/mongodb";
import User from "@/models/User";

export async function GET(request:NextRequest) {
  try {
    const headerList = headers()
    const token = headerList.get("token")
    if (!token) return                                NextResponse.json({  message: messages.error.token_not_valid},{ status: 400 })
    try {
      const validar_token = jwt.verify(token, `${process.env.HAS_PASS}`)
      if (!validar_token)  return                     NextResponse.json({  message: messages.error.token_not_valid},{ status: 400 })
      console.log(validar_token);
      // @ts-ignore
      const { data } = validar_token
      await connectMongoDB()
      const encontrar_usuario = await User.findById(data._id)
      if (!encontrar_usuario) return                  NextResponse.json({  message: messages.error.user_not_found},{ status: 400 })
      return                                          NextResponse.json({  message: messages.success.autorized},{ status: 200 })


    /* {                           example of data from jwt.verity object returned
      data: {
        _id: '668f5c4a7c9bb5d8c05a901e',
        email: 'andresmarcorossel@gmail.com',
        createdAt: '2024-07-11T04:15:06.952Z',
        updatedAt: '2024-07-12T01:14:19.107Z'
      },
      iat: 1720756283,
      exp: 1720842683
    } */


    } catch (error) {
      return                                          NextResponse.json({  message: messages.error.generic},{ status: 400 })
    }
  } catch (error) {
    return                                            NextResponse.json({  message: messages.error.generic, error},{ status: 400 })
  }
}