

import {useEffect , useState} from 'react';
import toast,{Toaster} from 'react-hot-toast';
import {useRouter} from 'next/router';
import {format} from 'date-fns';

type Props ={
    sold: any;
    setSold:any;
}

export default function SoldBody({sold , setSold}:Props) {

  
    const router = useRouter();

    const onSave = () => {
        if(!sold.amount || !sold.totalCrop || !sold?.desc){
            toast.error('Plz Enter All Detailz');
            return;
        }

        console.log(sold);

        fetch('/api/sold',{
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body:JSON.stringify({amount:Number(sold?.amount) , date:sold?.date ,totalCrop:Number(sold?.totalCrop) , parentId:router?.query?.crop,desc:String(sold?.desc)})
           }).then((res) => res.json().then((data) => console.log(data)) )
    }

      const onBack = () => {
        setSold((prev:any) => ({...prev , edit:false}))
       }

    return(<>
    
    { sold?.edit && <>
    <h1 className="text-center font-bold text-xl">Enter New Sold Details</h1>

    <div className="flex flex-col mt-3 ">
      <h2 className="text-red-600 font-semibold">Enter Your Sold Details Here: </h2>
      <textarea value={sold?.desc} onChange={(e) => setSold((prev:any) => ({...prev , desc:e.target.value}))} className="outline-none border-2 border-gray-200 rounded-md p-1 h-20 resize-none" placeholder="Enter Detail" />
      <h2 className="text-red-600 font-semibold mt-2">Enter your Amount</h2>
      <input value={sold?.amount} onChange={(e) => setSold((prev:any) => ({...prev , amount:e.target.value}))} 
       type="number" className="outline-none border-2 border-gray-200 rounded-md p-1" placeholder="Enter Amount"/>
       <h2 className="text-red-600 font-semibold mt-2">Enter your Total Crop</h2>
      <input value={sold?.totalCrop} onChange={(e) => setSold((prev:any) => ({...prev , totalCrop:e.target.value}))} 
       type="number" className="outline-none border-2 border-gray-200 rounded-md p-1" placeholder="Enter Crop Totally"/>
      <h2 className="text-red-600 font-semibold mt-2">Enter Date: </h2>
      <input value={sold?.date} onChange={(e) => setSold((prev:any) => ({...prev , date:e.target.value}))}
       type="date" className="outline-none border-2 border-gray-200 rounded-md p-1" placeholder="Enter Date"/>
    </div>

    {/* BUTTONS! */}
    <div className="w-full flex gap-2 my-4">
      <button className="rounded-md w-full p-2 bg-gray-500 text-white text-semibold text-lg" onClick={onBack} >back</button>
      <button className="rounded-md w-full p-2 bg-green-500 text-white text-semibold text-lg" onClick={onSave} >Save</button>
    </div>
    
    </>}
    { !sold?.edit && <>

        {/* TOTAL DEBT! */}
         <div className=" my-2 border-2 border-blue-500 rounded-lg h-32 flex justify-center items-center flex-col bg-black ">
            <p className="text-xl font-semibold text-white">Total Sold Amount: </p>
            <p className=" font-bold text-white text-2xl">{sold?.totalSold?.toLocaleString() || 0} -/Rs</p>
        </div>  
         
         {/* CREATE NEW DEBT! */}
         <div>
          <button className="rounded-md w-full p-2 bg-blue-500 text-white text-semibold text-lg" 
           onClick={() => setSold((prev:any)=> ({...prev , edit:true}))} >Add New Sold Detail</button>
         </div>

{console.log(sold?.colSold)}
    
         {/* MAP THROUGH ALL DEBT! */}
         <div className="flex flex-col gap-2 overflow-auto h-48 mt-4">
            {sold?.colSold?.length>0 && sold?.colSold?.map((d:any , i:any) => (<div key={i} className="p-1 border-2 bg-gray-200 border-gray-300 rounded-md flex flex-col gap-2">
              <div className="">
                <p className="text-xl text-black text-semibold">{d?.desc}</p>
              </div>
              <div className=" flex justify-between">
               <p className="bg-blue-300 text-black p-2 text-sm">Date: {format(new Date(d?.date),'MMM dd yyyy')}</p>
               <p className="bg-red-500 text-white p-2 text-sm">Sold Amount: {d?.amount?.toLocaleString()} pkr</p>
              </div>
            </div>))}
            
         </div>


    </>}
    
    
    </>)
    
}


