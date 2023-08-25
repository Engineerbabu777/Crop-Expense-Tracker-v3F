


import {mongooseConnect} from '@/lib/mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';
import {pestModel} from '@/Models/PestSchema';

export default async function handler(req:NextApiRequest,res:NextApiResponse) {

     mongooseConnect();

     if(req.method === 'POST'){
        const {date , quantity ,  amount , parentId,desc} = req.body;


        const newPest = await pestModel.create({
            amount:Number(amount), quantity:Number(quantity) , date:date , parentId,desc:desc,
        });

        res.status(200).json({success:true , newPest})
        res.end();
     }

     if(req.method === 'GET'){
        const allPest = await pestModel.find({});
        
        res.status(200).json({success:true , allPest});
        res.end();

     }

     
    // DELETE REQUEST 🗑️🗑️🗑️!
    if(req.method === 'DELETE'){
      const {id} = req.body;  // GETTING DELETING ID!
      await pestModel.findByIdAndDelete(id); // DELETING FROM DATABASE BY ID!
      res.status(200).json({success:true}); // RETURING SUCCESS STATUS CODE AND JSON RESPONSE!
      res.end(); // CLOSING THE REQUEST!
    }

    // UPDATE REQUEST  🔄🔄🔄!
    if(req.method === 'PUT'){
      const {id , quantity , amount , date,desc} = req.body;  // GETTING DATA FROM REQEUSTED BODY!
      console.log(req.body);
      const upadtedData = await pestModel.findByIdAndUpdate(id,{ // UPDATING THE DATA IN OUR DATABASE USING SCHEMA OF THAT DATA!
         quantity , amount , date,desc,
      });
      res.status(200).json({success:true}); // RETURING SUCCESS STATUS CODE AND JSON RESPONSE!
      res.end(); // CLOSING THE REQUEST!
    }

     
}