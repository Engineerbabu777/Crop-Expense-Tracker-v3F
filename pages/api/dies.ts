



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

}