
import {mongooseConnect} from '@/lib/mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';
import {cropModel} from '@/Models/CropSchema';

export default async function handler(req:NextApiRequest,res:NextApiResponse) {

    mongooseConnect(); // CREATING DB CONNECTION!
    // GET ALL DATA!
     const {name , month , year,userId} = req.body;
      // POST REQUEST!
        if(req.method === 'POST'){
         // CREATING DATA IN MONGODB! 
           const newCropEntry = await cropModel.create({
             name , month , year, userId
            });
           res.status(200).json({success:true , newCropEntry}); // RETURNING RESPONSE!
           res.end(); // ENDING REQUEST!
       }
    // GET REQUEST !!
     if(req.method === 'GET') {
      // Check if q exists!
      const {crop_id , userId} = req.query;

      if(crop_id){
        const specifiCrop = await cropModel.findById(crop_id,{name:1,month:1,year:1,createdAt:1});
        res.status(200).json({success:true , crop:specifiCrop});
        res.end();
      }
      const allCrops = await cropModel.find({userId});
      res.json({success:true , allCrops});
      res.end();
     }
}