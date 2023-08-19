


import mongoose from "mongoose";

const DieselSchema = new mongoose.Schema({
   
   // User Info!

   // Crop Name!
    liters: {type: Number},
   // Crop Month!
    date: {type: Date},
   // Crop Year!
    amount: {type: Number},
    
    parentId: {type:mongoose.Schema.Types.ObjectId, ref:'crop'}
 
},{
    timestamps: true,
});

export const diesModel = mongoose.models.diesel || mongoose.model('diesel' , DieselSchema);