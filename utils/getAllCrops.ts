
import {useEffect , useState} from 'react';
import {useSession} from 'next-auth/react';

export default function useAllCrops(){

    const [crops , setCrops] = useState<any>([]);
    const {status,data:session}  = useSession();

    const getFreshData = () => {

        fetch('/api/crop?userId='+session?.user?.id).then((res) => res.json().then((data) => {setCrops(data.allCrops);console.log(data.allCrops)}));
       
    }
    
    useEffect(() => {

       if(session){
           getFreshData();
       }

    },[status, session]);
    




    return {getFreshData , crops}
}