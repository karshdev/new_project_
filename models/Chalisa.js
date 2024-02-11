import mongoose, { Schema } from "mongoose";

const chalisas = new Schema({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  chalisa: {
    type: String,
    required: true,
  },
 popular:{
  type:Boolean,
  default:false
 }
});

const ChalisaModel =
  mongoose.models.ChalisaModel || mongoose.model("ChalisaModel", chalisas);
export default ChalisaModel
