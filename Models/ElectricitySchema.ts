
import mongoose from "mongoose";

const ElectSchema = new mongoose.Schema({
   
   // Crop Name/Info!
   // User Info!
   // Units! (Optional)
   units: {type: Number},
   // Bill!
   bill: {type: Number},
   // Month!
   date: {type:Date},
   // ParentId!
   parentId: {type:mongoose.Schema.ObjectId, ref:'crop'},
   // DESCRIPTION!
   desc: {type:String},

   
},{
    timestamps: true,
});

export const electModel = mongoose.models.electricity || mongoose.model('electricity' , ElectSchema);