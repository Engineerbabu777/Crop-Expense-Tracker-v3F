


import {useEffect , useState} from 'react';
import toast from 'react-hot-toast';
import {useRouter} from 'next/router';
import {format} from 'date-fns';


type Props ={
    debt: any;
    setDebt: any;
}
export default function DebtBody({debt , setDebt}:Props) {


    const router = useRouter();


    const onBack = () => {
         setDebt((prev:any) => ({...prev , edit:false}))
    }

    const onSave = () => {
        if(!debt.amount || !debt.desc || !debt.date){
            toast.error('One of the field is empty!! ');
            return;
        }
      
        fetch('/api/debt',{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json",
            },
            body:JSON.stringify({amount:Number(debt.amount) , desc:debt.desc , date:debt.date ,parentId:router.query.crop})
        }).then((response) => response.json().then(data => console.log(data)));

    }



    return(<>
    
    { debt?.edit && <>
    <h1 className="text-center font-bold text-xl">Enter New Debt Details</h1>

    <div className="flex flex-col mt-3 ">
      <h2 className="text-red-600 font-semibold">Enter Your Debt Details Here: </h2>
      <textarea value={debt.desc} onChange={(e) => setDebt((prev:any) => ({...prev , desc:e.target.value}))} className="outline-none border-2 border-gray-200 rounded-md p-1 h-20 resize-none" placeholder="Enter Detail" />
      <h2 className="text-red-600 font-semibold mt-2">Enter your Amount</h2>
      <input value={debt.amount} onChange={(e) => setDebt((prev:any) => ({...prev , amount:e.target.value}))} 
       type="number" className="outline-none border-2 border-gray-200 rounded-md p-1" placeholder="Enter Amount"/>
      <h2 className="text-red-600 font-semibold mt-2">Enter Date: </h2>
      <input value={debt.date} onChange={(e) => setDebt((prev:any) => ({...prev , date:e.target.value}))} 
       type="date" className="outline-none border-2 border-gray-200 rounded-md p-1" placeholder="Enter Amount"/>
    </div>

    {/* BUTTONS! */}
    <div className="w-full flex gap-2 my-4">
      <button className="rounded-md w-full p-2 bg-gray-500 text-white text-semibold text-lg" onClick={onBack} >back</button>
      <button className="rounded-md w-full p-2 bg-green-500 text-white text-semibold text-lg" onClick={onSave} >Save</button>
    </div>
    
    </>}
    { !debt?.edit && <>

        {/* TOTAL DEBT! */}
         <div className=" my-2 border-2 border-blue-500 rounded-lg h-32 flex justify-center items-center flex-col bg-black ">
            <p className="text-xl font-semibold text-white">Total Debt Amount: </p>
            <p className=" font-bold text-white text-2xl">{debt?.totalDebt.toLocaleString()} -/Rs</p>
        </div>  
         
         {/* CREATE NEW DEBT! */}
         <div>
          <button className="rounded-md w-full p-2 bg-blue-500 text-white text-semibold text-lg" 
           onClick={() => setDebt((prev:any)=> ({...prev , edit:true}))} >Create New Debt</button>
         </div>


    
         {/* MAP THROUGH ALL DEBT! */}
         <div className="flex flex-col gap-2 overflow-auto h-48 mt-4">
            {debt?.colDebt.length>0 && debt?.colDebt?.map((d:any , i:any) => (<div key={i} className="p-1 border-2 bg-gray-200 border-gray-300 rounded-md flex flex-col gap-2">
              <div className="">
                <p className="text-xl text-black text-semibold">{d?.desc}</p>
              </div>
              <div className=" flex justify-between">
               <p className="bg-blue-300 text-black p-2 text-md">Date: {format(new Date(d?.date),'MMM dd yyyy')}</p>
               <p className="bg-red-500 text-white p-2 text-md">Debt Amount: {d?.debtAmount?.toLocaleString()} pkr</p>
              </div>
            </div>))}
            
         </div>


    </>}
    
    
    </>)
}