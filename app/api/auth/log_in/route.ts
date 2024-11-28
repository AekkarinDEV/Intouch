import { NextRequest,NextResponse } from "next/server"
import { MongoClient } from "mongodb";
import bcrypt from "bcrypt";


const client = new MongoClient(process.env.MONGO_URI);

export async function POST(req:NextRequest) {
    const data =  await req.formData()
    await client.connect();

    try{
        //check if use exist 
        console.log("bro")
        const indb = await client.db("auth").collection("users").findOne({username: data.get("username")})
        console.log(indb);
        if(indb == null){
            return new NextResponse("user not exist", {
                status:200
            })
        }


        if(await bcrypt.compare(data.get("password"),indb.password)){
            return new NextResponse(indb.token)
        }else{
            return new NextResponse("wrong password",{
                status: 200
            })
        }
    }catch{
        console.log(err);
        return new NextResponse('Somthing wrong with server',{
          status: 400,
        })
    }finally{
        await client.close();
    }
}