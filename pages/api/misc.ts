


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
}