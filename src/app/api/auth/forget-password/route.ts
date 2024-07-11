import { messages } from "@/utils/mensajes";
import { NextRequest, NextResponse } from "next/server";

export function POST(resquest:NextRequest) : NextResponse {
  try {
    const respuesta = NextResponse.json({})
    return respuesta
  } catch (error) {
    return NextResponse.json({message: messages.error.generic},{status: 400})
  }
}