import { connectMongoDB } from "@/app/libs/mongodb";
import User, { IUser } from "@/models/User";
import { messages } from "@/utils/mensajes";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken" 

export async function POST(request:NextRequest) {

  try {
    await connectMongoDB()
    const body: IUser = await request.json()
    const {email, password} = body


    // validamos que se rellenaron los campos
    if (!email || !password) {                    return NextResponse.json(    {message: messages.error.needProps}  ,   {status: 400}   )}
    const buscar_usuario = await User.findOne({email})
    if (!buscar_usuario) {                        return NextResponse.json(    {message: messages.error.user_not_found}    ,   {status: 400}   )}
    const comparacion_password: boolean = await bcrypt.compare(     password,      buscar_usuario.password      )
    if (!comparacion_password) {                  return NextResponse.json(    {message: messages.error.password_mistake}    ,   {status: 400}   )}


    // ahora podemos crear el token si paso todas las validaciones
    //const {password:userPass, ...rest} = buscar_usuario   // separamos el password de buscar_usuario del resto de la info para enviarlo al token como variable = rest
    const {password:userPass, ...rest} = buscar_usuario._doc // ojito que estabamos emviando toda la data con el password incluido
    const token = jwt.sign(     {data:rest}     ,       `${process.env.HAS_PASS}`     ,      {expiresIn: 86400}     )
    const respuesta =                                     NextResponse.json({     userLogged: rest,     message: messages.success.usuario_login     },{   status: 200   })
    respuesta.cookies.set("auth_cookie", token, {sameSite:"strict", path: "/", maxAge: 86400})


    return respuesta

  } catch (error) {
    return                                                NextResponse.json(    {   message: messages.error.generic, error   },{    status: 400   }    )
  }
}