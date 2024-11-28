import { NextRequest,NextResponse } from "next/server"

export async function POST(req:NextRequest) {
    console.log( await req.formData())
    return new NextResponse("hello",{
        status:200
    })
}