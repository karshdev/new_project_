import mongoose from "mongoose"

export const connectMongoDB=async ()=>{
    try{
     await mongoose.connect("mongodb+srv://sharmaaakarsh120:bhajans123@cluster0.f3k0msh.mongodb.net/db?retryWrites=true&w=majority");
     console.log("DB Connected")
    }catch(err){
        console.log("error",err)
    }
}