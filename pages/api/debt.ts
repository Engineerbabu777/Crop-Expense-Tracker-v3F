

import {mongooseConnect} from '@/lib/mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';
import {electModel} from '@/Models/ElectricitySchema';
import {diesModel} from '@/Models/DieselSchema';
import {fertModel} from '@/Models/FertlizerSchema';
import {miscModel} from '@/Models/MiscSchema';
import {pestModel} from '@/Models/PestSchema';
import {ploughModel} from '@/Models/PloughSchema';
import { soldModel } from '@/Models/SoldSchema';
import {debtModel} from '@/Models/DebtSchema';


export default async function handler(req:NextApiRequest,res:NextApiResponse) {

    mongooseConnect();

    if(req.method === 'GET'){
         const {p_id} = req.query;
         const debtData = await debtModel.find({parentId:p_id});

          res.status(200).json({success:true , debtData});
        res.end();
    }

    if(req.method ==='POST'){
       const {desc , amount , date,parentId} = req.body;

       console.log(desc , amount , date , parentId);

       const newDebt = await debtModel.create({
         desc , debtAmount:amount , date, parentId
       });

       res.status(200).json({success:true , newDebt});
       res.end();
    }


}