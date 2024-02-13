import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../utils/connectMongoDB";
import ChalisaModel from "../../../../models/Chalisa";


export async function POST(req) {
  
      await connectMongoDB();
      const body = await req.json();
    try {
      const { image, title, description, chalisa } = body;
      const chalisas = await ChalisaModel.create({
        image,
        title,
        description,
        chalisa,
      });
      
      return NextResponse.json({ message: "Successfully Added" }, { status: 200 });
    } catch (err) {
      return NextResponse.json({ message: "SOME ERROR" }, { status: 500 });
    }
  } 
  export async function GET(req) {

    const { searchParams } = new URL(req.url);
    const key=searchParams.get("key")
    await connectMongoDB();
     try {
       let query = {}; 

       if (key) {
         query = { popular: true };
       }
       const getChalisa = await ChalisaModel.find(query);
       return NextResponse.json(getChalisa, { status: 200 });
     } catch (err) {
       return NextResponse.json({ message: "SOME ERROR" }, { status: 500 });
     }
  } 

