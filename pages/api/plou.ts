

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

}