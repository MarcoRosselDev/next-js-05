import { connectMongoDB } from "@/app/libs/mongodb";
import User, { IUserSchema } from "@/models/User";
import comprobacion_email from "@/utils/comprobacion_email";
import { messages } from "@/utils/mensajes";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export async function POST(request: NextRequest) {
  try {
    await connectMongoDB().catch(console.dir)
    const body = await request.json()
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
    // validar que los password sean el mismo
    if (password !== confirmPassword) {
      return NextResponse.json({message: messages.error.password_mistake},{status: 400})
    }
    // comprovacion de usuario ya existente
    const encontrar_usuario = await User.findOne({email})// no hace falta aplicar el {email: email} si es el mismo nombre vasta asi
    if (encontrar_usuario) {
      return NextResponse.json({message: messages.error.email_existente},{status: 400})
    }
    // si paso todas las validaciones prosedemos a encriptar el password para guardar al nuevo usuario
    const password_encriptado = await bcrypt.hash(password, 10)// 10 son los saltos
    const nuevo_usuario: IUserSchema =  new User({
      email,
      password: password_encriptado,
    })
    // @ts-ignore
    const {password: userPass, ...rest} = nuevo_usuario._doc
    await nuevo_usuario.save()// asi se guarda el usuario 

    // creamos un token para el usuario que luego guardaremos en una cookie
    const token = jwt.sign({data:rest}, `${process.env.HAS_PASS}`,{expiresIn: 86400*2})//86400 es un dia

    const respuesta = NextResponse.json({
      newUser: rest,
      message: messages.success.usuario_creado},{status: 200})
    
    respuesta.cookies.set("auth_cookie", token, {
      sameSite: "strict",
      maxAge: 86400*2,
      path: "/",
    })

    return respuesta
  } catch (error) {
    console.log(error);
  }
}

// usuario creado exitosamente
/* { 
    "email": "marco@gmail.com",
    "password": "qwe123",
    "confirmPassword": "qwe123"
} */
