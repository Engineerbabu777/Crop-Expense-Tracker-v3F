

import mongoose from "mongoose";

const SoldSchema = new mongoose.Schema({

    // User!

    // Crop!
    parentId: {type:mongoose.Schema.ObjectId , ref:'crop'},

    // Amount
    amount:Number,
    
    // Date !!
    date:Date,

    // totalCrop!
    totalCrop: Number,

    // Description!
    desc: String,

},{
    timestamps:true,
});

export const soldModel = mongoose.models.sold || mongoose.model('sold' , SoldSchema);