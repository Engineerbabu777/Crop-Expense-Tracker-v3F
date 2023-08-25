



import {mongooseConnect} from '@/lib/mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';
import {diesModel} from '@/Models/DieselSchema';

export default async function handler(req:NextApiRequest,res:NextApiResponse) {

    mongooseConnect();

    if(req.method === 'POST'){
       const {liters , amount , date , parentId} = req.body;
       const newData = await diesModel.create({
         liters , amount , date , parentId
       });

       
      res.status(200).json({success: true , newData});
      res.end();

    }

    if(req.method === 'GET'){
      const allDiesel = await diesModel.find({});
    //   res.json({success:true});
      res.status(200).json({success: true , allDiesel});
      res.end();
    }

    // DELETE REQUEST 🗑️🗑️🗑️!
    if(req.method === 'DELETE'){
      const {id} = req.body;  // GETTING DELETING ID!
      await diesModel.findByIdAndDelete(id); // DELETING FROM DATABASE BY ID!
      res.status(200).json({success:true}); // RETURING SUCCESS STATUS CODE AND JSON RESPONSE!
      res.end(); // CLOSING THE REQUEST!
    }

    // UPDATE REQUEST  🔄🔄🔄!
    if(req.method === 'PUT'){
      let {id , liters , amount , date} = req.body;  // GETTING DATA FROM REQEUSTED BODY!
      const upadtedData = await diesModel.findByIdAndUpdate(id,{ // UPDATING THE DATA IN OUR DATABASE USING SCHEMA OF THAT DATA!
         liters , amount , date
      });
      res.status(200).json({success:true}); // RETURING SUCCESS STATUS CODE AND JSON RESPONSE!
      res.end(); // CLOSING THE REQUEST!
    }



}