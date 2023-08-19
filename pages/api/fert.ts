

import {mongooseConnect} from '@/lib/mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';
import {fertModel} from '@/Models/FertlizerSchema';

export default async function handler(req:NextApiRequest,res:NextApiResponse) {

     mongooseConnect();

     if(req.method === 'POST'){
        const {date , bags , bill , parentId} = req.body;

        const newFert = await fertModel.create({
            date , bags , bill , parentId
        });

        res.status(200).json({success:true , newFert});
        res.end();
     }

     if(req.method === 'GET'){
        const allFert = await fertModel.find({});
        
        res.status(200).json({success:true , allFert});
        res.end();

     }
}