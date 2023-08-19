


import mongoose from "mongoose";

const PloughSchema = new mongoose.Schema({
   
   // User Info!

   // Crop Name!
    acers: {type: Number},
   // Crop Month!
    date: {type: Date},
   // Crop Year!
    amount: {type: Number},
    
    parentId: {type:mongoose.Schema.Types.ObjectId, ref:'crop'}
 
},{
    timestamps: true,
});

export const ploughModel = mongoose.models.plough || mongoose.model('plough' , PloughSchema);