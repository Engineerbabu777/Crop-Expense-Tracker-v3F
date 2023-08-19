

import {mongooseConnect} from '@/lib/mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';
import {electModel} from '@/Models/ElectricitySchema';
import {diesModel} from '@/Models/DieselSchema';
import {fertModel} from '@/Models/FertlizerSchema';
import {miscModel} from '@/Models/MiscSchema';
import {pestModel} from '@/Models/PestSchema';
import {ploughModel} from '@/Models/PloughSchema';
import { soldModel } from '@/Models/SoldSchema';

export default async function handler(req:NextApiRequest,res:NextApiResponse) {

    mongooseConnect();

    if(req.method === 'GET'){
      const {p_id} = req.query;

      const soldData = await soldModel.findOne({parentId:p_id});

      res.status(200).json({success:true , soldData});
      res.end();
    }

    if(req.method ==='POST'){
       const {parentId , amount  , totalCrop} = req.body;

       const soldData = await soldModel.create({
         parentId , amount , totalCrop
       });

       res.status(200).json({success:true , soldData});
       res.end();
    }

    if(req.method === 'PUT'){
        const {parentId , amount , totalCrop} = req.body;

        const updateData = await soldModel.findOneAndUpdate({parentId},{
            amount , totalCrop
        });

        res.json({success:true , updateData});
        res.end();
    }


}