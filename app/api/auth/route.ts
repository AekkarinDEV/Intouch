
import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import { v4 as uuidv4 } from 'uuid'
import fs from "node:fs/promises"
import { log } from "node:console";
const bcrypt = require("bcrypt");


const client = new MongoClient(process.env.MONGO_URI);


export  async function POST(req:NextRequest){
  try{
      // get username and password from request
      const body =  await req.formData()
      console.log(body);
      const username:string = body.get("username")
      let password:string = body.get("password")
      password= await bcrypt.hash(password,10);

      
      //connect mongodb
      await client.connect();

      //check if user already exist
      const isItExist = await client.db("auth").collection("users").findOne({username: username})
    if(isItExist !== null && isItExist.username == username){
      return new NextResponse("user alredy exist",{
        status:400,
      }

      )
    }

    //put profile image in the sever storage
    const picture = body.get("image");
      console.log(picture);
      const arrBuf = await picture.arrayBuffer();
      const buffed = new Uint8Array(arrBuf); 
      console.log(buffed);
      await fs.writeFile(`E:/CODE/intouch/app/api/storage/profile_pic/${username + "_" + picture.name}`,buffed)

    
    //made profile picture path 
    const profile_pic_path = username + "_" + picture.name;

    //save user in the database
      await client.db("auth").collection("users").insertOne({
        username: username,
        password: password,
        token: await uuidv4(),
        profile_pic: profile_pic_path
        
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

export async function GET(req:NextRequest) {
    console.log(req.body)
}
