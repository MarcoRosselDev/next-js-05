// esto va a ser un middleware que preguntara en el home si existe una cookie con el token de usuario
// si no esta la cookie no se puede acceder a la pagina x y requerira autenticacion en el login o crear usuario
import { messages } from "@/utils/mensajes";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"

export function GET(request:NextRequest) {
  try {
    const headerList = headers()
    const token = headerList.get("token")
    if (!token) return                                NextResponse.json({  message: messages.error.token_not_valid},{ status: 400 })
    try {
      const validar_token = jwt.verify(token, `${process.env.HAS_PASS}`)
      if (!validar_token)  return                     NextResponse.json({  message: messages.error.token_not_valid},{ status: 400 })
      console.log(validar_token);
    } catch (error) {
      return                                          NextResponse.json({  message: messages.error.generic},{ status: 400 })
    }
  } catch (error) {
    return                                            NextResponse.json({  message: messages.error.generic, error},{ status: 400 })
  }
}