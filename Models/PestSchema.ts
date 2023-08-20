

import mongoose from 'mongoose';

const PestSchema = new mongoose.Schema({

    quantity:Number,
    amount: Number,
    date: Date,
    name: String,
    parentId: {type:mongoose.Schema.Types.ObjectId, ref:'crop'}

},{
    timestamps: true,
});


export const pestModel = mongoose.models.pesticide || mongoose.model('pesticide' , PestSchema)