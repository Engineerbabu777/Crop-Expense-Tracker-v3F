

import {mongooseConnect} from '@/lib/mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';
import {electModel} from '@/Models/ElectricitySchema';

export default async function handler(req:NextApiRequest,res:NextApiResponse) {

    mongooseConnect();
    
    // GET DETAILS!
     if(req.method === 'POST'){
        const {month , units , bill , parentId} = req.body;

        console.log(month,units,bill,parentId)

        // Save!
        
        const elecData = await electModel.create({
            month , units , bill , parentId
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


}