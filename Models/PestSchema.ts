

import mongoose from 'mongoose';

const PestSchema = new mongoose.Schema({

    bags: {type: Number},
    amount: {type: Number},
    month: {type:String},
    name: {type: String},
    parentId: {type:mongoose.Schema.Types.ObjectId, ref:'crop'}

},{
    timestamps: true,
});


export const pestModel = mongoose.models.pesticide || mongoose.model('pesticide' , PestSchema)