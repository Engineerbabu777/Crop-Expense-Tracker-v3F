

import {useState} from 'react';
import {ClipLoader} from 'react-spinners';

type Props = {
    closeButton:any;
    prevData:any;
}

export default function Update({closeButton,prevData}:Props){
    console.log(prevData)

    const [data , setData] = useState({
       amount: prevData?.amount || 0,
       desc: prevData?.desc || '',
       acers: prevData?.acers || 0,
       date: prevData?.date || null,
       updating:false,
    });

    const handler = (e:any) => {
        setData((prev:any)=> ({...prev,[e.target.name]:e.target.value}));
    }

    const updateData = async() => {
        if(!data?.amount || !data?.date) console.log('some is empty')
        
        setData((prev) => ({...prev, updating:true}));
        fetch('/api/plou',{
            method: 'PUT',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body:JSON.stringify({amount:data.amount , acers:data.acers , date:data.date , id:prevData?._id , desc:data?.desc })
           }).then((res) => res.json().then((data) => {console.log(data);
            setData((prev:any) => ({...prev, updating:false}));
            closeButton();
        }) ).catch((err:any) => {
        setData((prev:any) => ({...prev, updating:false}));
        closeButton();
        })
    }


    return(<div>
    { !data?.updating && (<>
    <p className="text-start mb-1">Enter Description:</p>
    <textarea className="w-full h-16 rounded-md border-2 border-gray-400 resize-none p-1" name="desc" value={data?.desc} onChange={handler}></textarea>

    <p className="text-start mb-1">Enter Amount:</p>
    <input type="number" name="amount" value={data?.amount} onChange={handler} className="w-full p-2 outline-none border-2 border-green-500 rounded-md" placeholder="Enter Update Amount"/>

    <p className="text-start mb-1">Enter Acers:</p>
    <input type="number" name="acers" value={data?.acers} onChange={handler}className="w-full p-2 outline-none border-2 border-green-500 rounded-md" placeholder="Enter Updated Units"/>

    <p className="text-start">Enter Date:</p>
    <input type="date" name="date" value={data?.date} onChange={handler} className="w-full p-2 outline-none border-2 border-green-500 rounded-md" placeholder="Enter Updated Date"/>

    <div className="flex gap-4 mt-4 justify-end">
    <button className="bg-green-500 text-white font-bold text-md rounded-md p-1" onClick={updateData}>Update</button>
    <button onClick={() => closeButton()} className="bg-red-500 text-white font-bold text-md rounded-md p-1">Cancel</button>
    </div></>)}

    {data?.updating && (<div className=""> <ClipLoader size={48} color={'orange'} /> </div>)}
    
    </div>)
}