import { NextResponse } from "next/server";
import ChalisaModel from "../../../../../models/Chalisa";
import { connectMongoDB } from "../../../../../utils/connectMongoDB";

export const GET = async (
  req,{ params }
) => {
  const { id } = params;
  await connectMongoDB()

  try {
    const chalisa = await ChalisaModel.findOne({_id:id});
    if(chalisa){
 return NextResponse.json(chalisa, { status: 200 });
    }else{
 return NextResponse.json({message:"NOT FOUND"}, { status: 200 });
    }
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
