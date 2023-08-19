

import {useState , useEffect} from 'react';
import {Divider} from '@chakra-ui/react';

type Props = {
    expenses: any;
}

export default function ExpensesBody({expenses}:Props) {

    // const [mainModalState , setMainModalState] = useRecoilState(MainModelState);


    return(<>

<div className=" w-full h-full">

  {/* YO HAVE TOTAL SPEND AMOUNT UNTILL KNOW! */}
   <p className="text-lg text-gray-400 font-semibold">آپ کی کل خرچ کی گئی رقم <span className="text-lg px-1 text-red-500 font-bold">{expenses?.total?.toLocaleString()}</span> ہے</p>

<Divider my={1.5} bg={'blue.500'} />

  {/* YOUR ELECTRICITY SPEND! */}
  <p className="text-lg text-gray-400 font-semibold mt-8"> 
   <span className="text-green-500 text-lg font-bold">بجلی</span>  پر آپ کی کل خرچ کردہ لاگت <span className="px-1 text-red-500 text-lg font-bold">{expenses?.elect?.toLocaleString()}</span>  ہے
  </p>

<Divider my={1.5} />


  {/* YOUR FERTILIZER SPEND! */}
  <p className="text-lg text-gray-400 font-semibold"> 
   <span className="text-green-500 text-lg font-bold">ہل</span>  پر آپ کی کل خرچ کردہ لاگت <span className="px-1 text-red-500 text-lg font-bold">{expenses?.fert?.toLocaleString()}</span>  ہے
  </p>

  <Divider my={1.5} />

  {/* YOUR PLOUGH SPEND! */}
  <p className="text-lg text-gray-400 font-semibold"> 
   <span className="text-green-500 text-lg font-bold">کھاد</span>  پر آپ کی کل خرچ کردہ لاگت <span className="text-red-500 text-lg font-bold">{expenses?.plou?.toLocaleString()}</span>  ہے
  </p>

  <Divider my={1.5} />

  {/* YOUR ELECTRICITY SPEND! */}
  <p className="text-lg text-gray-400 font-semibold "> 
   <span className="text-green-500 text-lg font-bold">کیڑے مار ادویات</span>  پر آپ کی کل خرچ کردہ لاگت <span className="px-1 text-red-500 text-lg font-bold">{expenses?.dies?.toLocaleString()}</span>  ہے
  </p>

<Divider my={1.5} />


  {/* YOUR FERTILIZER SPEND! */}
  <p className="text-lg text-gray-400 font-semibold"> 
   <span className="text-green-500 text-lg font-bold">اضافی</span>  پر آپ کی کل خرچ کردہ لاگت <span className="px-1 text-red-500 text-lg font-bold">{expenses?.misc?.toLocaleString()}</span>  ہے
  </p>

  <Divider my={1.5} />

  {/* YOUR PLOUGH SPEND! */}
  <p className="text-lg text-gray-400 font-semibold"> 
   <span className="text-green-500 text-lg font-bold">ڈیزل</span>  پر آپ کی کل خرچ کردہ لاگت <span className="text-red-500 text-lg font-bold">{expenses?.dies?.toLocaleString()}</span>  ہے
  </p>



   </div> 
    
    
    </>)
}