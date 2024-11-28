
import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import { v4 as uuidv4 } from 'uuid'
const bcrypt = require("bcrypt");


const client = new MongoClient(process.env.MONGO_URI);


export  async function POST(req:NextRequest){
  try{
      const body =  await req.formData()
      const username:string = body.get("username")
      let password:string = body.get("password")
      password= await bcrypt.hash(password,10);
      console.log(password);
      await client.connect();
      const isItExist = await client.db("auth").collection("users").findOne({username: username})
    console.log(isItExist);
    if(isItExist !== null && isItExist.username == username){
      return new NextResponse("user alredy exist",{
        status:400,
      }

      )
    }
      await client.db("auth").collection("users").insertOne({
        username: username,
        password: password,
        token: await uuidv4()
      })



      return new NextResponse('All ok', {
          status: 200,
    });
  }catch(err){
    console.log(err);
    return new NextResponse('Somthing wrong with server',{
      status: 400,
    })
  }finally{
    client.close();
  }
}
