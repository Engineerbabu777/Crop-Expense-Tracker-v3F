



import mongoose from 'mongoose';

const MiscSchema = new mongoose.Schema({

    date: {type: Date},
    amount: {type: Number},
    purpose: {type: String},
    parentId: {type:mongoose.Schema.Types.ObjectId, ref:'crop'}
    
},{
    timestamps: true,
});


export const miscModel = mongoose.models.misc || mongoose.model('misc' , MiscSchema)