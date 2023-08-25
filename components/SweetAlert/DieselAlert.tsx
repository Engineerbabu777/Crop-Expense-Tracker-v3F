


import toast from 'react-hot-toast';
import {useState,useEffect} from 'react';
import {ClipLoader} from 'react-spinners';
import useElectricity from '@/hooks/useCrop';

type Props ={
    closeButton:any;
    diesel:any;
    setDiesel:any;
    d:any;
    
}

function Alert({closeButton,diesel,setDiesel,d}:Props){

    const [deleting , setDeleting]  = useState<boolean>(false);
    const [load , setload] = useState(false); 




    const deleteEntry = (id:string) => {
        setDeleting(true);

        setDiesel([...diesel.filter((d:any) => d._id != id)])
          
    fetch('/api/dies',{
        method:'DELETE',
        headers:{
          'Content-Type':'application/json',
          'accept':'application/json',
        },
        body:JSON.stringify({id})
      }).then((res)=> res.json().then(()=> {toast.success('deleting was successfull');closeButton();setDeleting(false);setload(true)}))
  
    }


    return(<>
    
    {!deleting && <>
    <p className="">Are you sure you want to delete it?</p>

<div className="flex gap-4 justify-center items-center mt-12">

    <button  className="text-red-300 bg-red-700 opacity-[0.9] p-2 rounded-md" onClick={() => deleteEntry(d._id)}>Delete</button>
    <button className="text-white bg-green-600 opacity-[0.9] p-2 rounded-md" onClick={()=> closeButton()}>Cancel</button>
     
</div>    
    </>}
    {deleting && <>
    <ClipLoader size={22} color={'red'}/>
    </>

    }

    </>);



}

export {Alert};