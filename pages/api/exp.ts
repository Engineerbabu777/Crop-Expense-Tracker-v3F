

import {mongooseConnect} from '@/lib/mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';
import {electModel} from '@/Models/ElectricitySchema';
import {diesModel} from '@/Models/DieselSchema';
import {fertModel} from '@/Models/FertlizerSchema';
import {miscModel} from '@/Models/MiscSchema';
import {pestModel} from '@/Models/PestSchema';
import {ploughModel} from '@/Models/PloughSchema';


export default async function handler(req:NextApiRequest,res:NextApiResponse) {

    mongooseConnect();

    const {p_id} = req.query;
    
    console.log(p_id)
    // ELECTRICITY!
       const data1 = await electModel.find({parentId:p_id},{bill:1});

    // DIESEL!
       const data2 = await diesModel.find({parentId:p_id},{amount:1});


    // FERTILIZER!
       const data3 = await fertModel.find({parentId:p_id},{bill:1});


    // PESTICIDES!
       const data4 = await pestModel.find({parentId:p_id},{amount:1});


    // PLOUGH!
       const data5 = await ploughModel.find({parentId:p_id},{amount:1});


    // MISC!
       const data6 = await miscModel.find({parentId:p_id},{amount:1});

       res.json({success:true , data1 , data2 , data3 , data4,  data5 , data6})
       res.end();

}