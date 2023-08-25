


import {mongooseConnect} from '@/lib/mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';
import {miscModel} from '@/Models/MiscSchema';

export default async function handler(req:NextApiRequest,res:NextApiResponse) {

     mongooseConnect();

     if(req.method === 'POST'){
        const {date , purpose , amount, parentId} = req.body;

        const newMisc = await miscModel.create({
            date , purpose , amount,parentId
        });

        res.status(200).json({success:true , newMisc});
        res.end();
     }

     if(req.method === 'GET'){
        const allMisc = await miscModel.find({});
        
        res.status(200).json({success:true , allMisc});
        res.end();
     }

     // DELETE REQUEST 🗑️🗑️🗑️!
    if(req.method === 'DELETE'){
      const {id} = req.body;  // GETTING DELETING ID!
      await miscModel.findByIdAndDelete(id); // DELETING FROM DATABASE BY ID!
      res.status(200).json({success:true}); // RETURING SUCCESS STATUS CODE AND JSON RESPONSE!
      res.end(); // CLOSING THE REQUEST!
    }

    // UPDATE REQUEST  🔄🔄🔄!
    if(req.method === 'PUT'){
      let {id , purpose , amount , date} = req.body;  // GETTING DATA FROM REQEUSTED BODY!
      const upadtedData = await miscModel.findByIdAndUpdate(id,{ // UPDATING THE DATA IN OUR DATABASE USING SCHEMA OF THAT DATA!
         purpose , amount , date
      });
      res.status(200).json({success:true}); // RETURING SUCCESS STATUS CODE AND JSON RESPONSE!
      res.end(); // CLOSING THE REQUEST!
    }
}