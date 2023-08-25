

import {mongooseConnect} from '@/lib/mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';
import {fertModel} from '@/Models/FertlizerSchema';

export default async function handler(req:NextApiRequest,res:NextApiResponse) {

     mongooseConnect(); // MAKING A CONNECTION WITH OUR MONGODB DATABASE!

     // POST REQUEST  📭 📭 📭 !
    if(req.method === 'POST'){
      const {date , bags , bill , parentId,desc} = req.body;  // GETTING DATA FROM REQEUSTED BODY!
      const newFert = await fertModel.create({
         date , bags , bill , parentId, desc   // CREATING NEW DOCUMENT IN OUR DATABASE!
      });
      res.status(200).json({success:true , newFert});  // RETURING SUCCESS STATUS CODE AND JSON RESPONSE!
      res.end();  // CLOSING THE REQUEST!
     }
      
     // GET REQUEST 🌍🌍🌍!
    if(req.method === 'GET'){ 
      const allFert = await fertModel.find({});  // FINDING ALL DOCUMENTS FROM DATABASE USING OUR DATA SCHEMA!
      res.status(200).json({success:true , allFert}); // RETURING SUCCESS STATUS CODE AND JSON RESPONSE!
      res.end();  // CLOSING THE REQUEST!
     }

     // DELETE REQUEST 🗑️🗑️🗑️!
    if(req.method === 'DELETE'){
      const {id} = req.body;  // GETTING DELETING ID!
      await fertModel.findByIdAndDelete(id); // DELETING FROM DATABASE BY ID!
      res.status(200).json({success:true}); // RETURING SUCCESS STATUS CODE AND JSON RESPONSE!
      res.end(); // CLOSING THE REQUEST!
    }

    // UPDATE REQUEST  🔄🔄🔄!
    if(req.method === 'PUT'){
      let {id,bill,date,desc,bags} = req.body;  // GETTING DATA FROM REQEUSTED BODY!
      const upadtedData = await fertModel.findByIdAndUpdate(id,{ // UPDATING THE DATA IN OUR DATABASE USING SCHEMA OF THAT DATA!
        bill , date , desc , bags ,
      });
      res.status(200).json({success:true}); // RETURING SUCCESS STATUS CODE AND JSON RESPONSE!
      res.end(); // CLOSING THE REQUEST!
    }
}