
import mongoose from 'mongoose';

const FertSchema = new mongoose.Schema({

    bags: {type: Number},
    bill: {type: Number},
    date: {type:Date},
    parentId: {type:mongoose.Schema.Types.ObjectId, ref:'crop'}
},{
    timestamps: true,
});


export const fertModel = mongoose.models.fertilizer || mongoose.model('fertilizer' , FertSchema)