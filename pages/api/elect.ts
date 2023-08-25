

import {mongooseConnect} from '@/lib/mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';
import {electModel} from '@/Models/ElectricitySchema';

export default async function handler(req:NextApiRequest,res:NextApiResponse) {

    mongooseConnect();
    
    // GET DETAILS!
     if(req.method === 'POST'){
        const { units , bill , parentId, date,desc} = req.body;


        // Save!
        
        const elecData = await electModel.create({
            date, desc , units , bill , parentId
        });

        res.status(200).json({success:true , ElecData:elecData});
        res.end();
     } 

    // Get Request !
    if(req.method === 'GET'){

            const allBills = await electModel.find({});
          

            res.status(200).json({success:true , allBills});
            res.end();
        
    }

    // DELETE REQUEST 🗑️🗑️🗑️!
    if(req.method === 'DELETE'){
        const {id} = req.body;  // GETTING DELETING ID!
        await electModel.findByIdAndDelete(id); // DELETING FROM DATABASE BY ID!
        res.status(200).json({success:true}); // RETURING SUCCESS STATUS CODE AND JSON RESPONSE!
        res.end(); // CLOSING THE REQUEST!
    }

    // UPDATE REQUEST  🔄🔄🔄!
    if(req.method === 'PUT'){
        let {id,bill,units,desc,date} = req.body;
        // if(!units) units = 0
        // if(!desc) desc = '' 

        const upadtedData = await electModel.findByIdAndUpdate(id,{
          bill , units , date , desc
        });

        res.status(200).json({success:true,upadtedData});
        res.end();
    }


}