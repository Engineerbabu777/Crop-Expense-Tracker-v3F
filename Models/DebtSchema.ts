



import mongoose from "mongoose";

const DebtSchema = new mongoose.Schema({

    // User!

    // Crop!
    parentId: {type:mongoose.Schema.ObjectId , ref:'crop'},

    // Amount
    debtAmount:Number,

    // Date !!
    date:Date,

    // Description!
    desc:String,
    

},{
    timestamps:true,
});

export const debtModel = mongoose.models.debt || mongoose.model('debt' , DebtSchema);