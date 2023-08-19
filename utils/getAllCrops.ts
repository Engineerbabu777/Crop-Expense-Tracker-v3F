
import {useEffect , useState} from 'react';


export default function useAllCrops(){

    const [crops , setCrops] = useState<any>([]);

    const getFreshData = () => {
        fetch('/api/crop').then((res) => res.json().then((data) => {setCrops(data.allCrops);console.log(data.allCrops)}));
       
    }
    
    useEffect(() => {
       
     getFreshData();

    },[]);
    




    return {getFreshData , crops}
}