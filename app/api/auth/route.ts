import { redirect } from "next/dist/server/api-utils";
import { NextRequest, NextResponse } from "next/server";


export  async function POST(req:NextRequest){
    const body =  await req.formData()
    const username = body.get("username")
    const password = body.get("password")
    return new NextResponse('All ok', {
        status: 200,
  });
}

export async function GET(req:NextRequest){
  return new NextResponse("halo from api" , {
    status: 200
  })
}