

import mongoose from "mongoose";

const CropSchema = new mongoose.Schema({
   
   // User Info!

   // Crop Name!
    name: {type: String},
   // Crop Month!
    month: {type: String},
   // Crop Year!
    year: {type: String},
 
},{
    timestamps: true,
});

export const cropModel = mongoose.models.crop || mongoose.model('crop' , CropSchema);