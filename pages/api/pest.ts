


import {mongooseConnect} from '@/lib/mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';
import {pestModel} from '@/Models/PestSchema';

export default async function handler(req:NextApiRequest,res:NextApiResponse) {

     mongooseConnect();

     if(req.method === 'POST'){
        const {month , bags , amount , name} = req.body;


        const newPest = await pestModel.create({
            amount:Number(amount), bags , month:month , name:name,
        });

        res.status(200).json({success:true , newPest})
        res.end();
     }

     if(req.method === 'GET'){
        const allPest = await pestModel.find({});
        
        res.status(200).json({success:true , allPest});
        res.end();

     }
}