

import {mongooseConnect} from '@/lib/mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';
import {ploughModel} from '@/Models/PloughSchema';

export default async function handler(req:NextApiRequest,res:NextApiResponse) {

    mongooseConnect();

    if(req.method === 'POST'){
       const {acers , amount , date, parentId} = req.body;
       const newData = await ploughModel.create({
         acers , amount , date , parentId
       })

      res.status(200).json({success: true , newData});
      res.end();

    }

    if(req.method === 'GET'){
      const allPlough = await ploughModel.find({});

      res.status(200).json({success: true , allPlough});
      res.end();

    }

    // DELETE REQUEST 🗑️🗑️🗑️!
    if(req.method === 'DELETE'){
      const {id} = req.body;  // GETTING DELETING ID!
      await ploughModel.findByIdAndDelete(id); // DELETING FROM DATABASE BY ID!
      res.status(200).json({success:true}); // RETURING SUCCESS STATUS CODE AND JSON RESPONSE!
      res.end(); // CLOSING THE REQUEST!
    }

    // UPDATE REQUEST  🔄🔄🔄!
    if(req.method === 'PUT'){
      let {id , acers , amount , date} = req.body;  // GETTING DATA FROM REQEUSTED BODY!
      const upadtedData = await ploughModel.findByIdAndUpdate(id,{ // UPDATING THE DATA IN OUR DATABASE USING SCHEMA OF THAT DATA!
         acers , amount , date
      });
      res.status(200).json({success:true}); // RETURING SUCCESS STATUS CODE AND JSON RESPONSE!
      res.end(); // CLOSING THE REQUEST!
    }

}