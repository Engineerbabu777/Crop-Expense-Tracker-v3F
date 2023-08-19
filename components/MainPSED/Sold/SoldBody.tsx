

import {useEffect , useState} from 'react';
import toast,{Toaster} from 'react-hot-toast';
import {useRouter} from 'next/router';


type Props ={
    sold: any
}
export default function SoldBody({sold}:Props) {

    const [amount , setAmount] = useState('')
    const [saving , setSaving] = useState(false)
    const [totalCrop , setTotalCrop] = useState('')
    
    const router = useRouter();

    const saveData = () => {
        if(!amount || !totalCrop){
            toast.error('Plz Enter All Detailz');
            return;
        }
        fetch('/api/sold',{
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body:JSON.stringify({amount:amount , totalCrop:totalCrop , parentId:router?.query?.crop})
           }).then((res) => res.json().then((data) => console.log(data)) )
    }

    return(<>
    <Toaster />
     <div className="border-2 border-gray-400 p-4 text-center rounded-md my-2 bg-black">
      <p className="text-xl text-white font-semibold">Total Crop: <span className="text-red-500 font-bold text-2xl">{sold?.totalCrop}(mann)</span></p>
      <p className="text-xl text-white font-semibold">Sold For: <span className="text-red-500 font-bold text-2xl">{sold?.amount?.toLocaleString()}</span></p>
    </div>

     <div className="flex flex-col gap-3">
    
    
       <input placeholder="Enter Your Sold Amount" className="p-1 border-2 border-gray-300 outline-none text-gray-600 font-semibold rounded-md" value={amount} onChange={(e) => {setAmount(e.target.value)}} />
    
    
      <input placeholder={"Enter Your Total Crop (C*50Kg)"} className="p-1 border-2 border-gray-300 outline-none text-gray-600 font-semibold rounded-md" value={totalCrop} onChange={(e) => {setTotalCrop(e.target.value)}} />
    
    
      <button className="border-2 border-gray-100 rounded-lg bg-green-500 text-white font-semibold text-xl p-2" type="button" onClick={saveData}>Save</button>
    
     </div>
    
    </>)
}






// // useEffect(() => {

// // },[]);


// const updateData = () => {

// }

// return(<>

