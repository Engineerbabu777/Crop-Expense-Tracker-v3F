
import {useEffect , useState} from 'react';


export default function useElectricity(){

    const [totalUnits , setTotalUnits] = useState<number>(0);
    const [totalBill , setTotalBill] = useState<number>(0);
    const [bills , setBills] = useState<any>([]);
    const [loading , setLoading] = useState<boolean>(false);

    console.log("from use crop",bills)



    const Get_Electricity_Data = (query:any) => {
        if(query?.crop){
            fetch('/api/elect?parentId='+query?.crop).then((res:any) => res.json().then((data:any) => {
              // total units!
              let a = data.allBills.filter((b:any) => b?.parentId == query?.crop);
              setBills(a)
              const d = data.allBills.filter((b:any) => b?.parentId == query?.crop);
               const u = d?.reduce((accumulator:any, currentObject:any) => accumulator + currentObject.units, 0);        
              // total amount!
              const db = data.allBills.filter((b:any) => b?.parentId == query?.crop);
              const b = db?.reduce((accumulator:any, currentObject:any) => accumulator + currentObject.bill, 0); 
              setTotalUnits(u);
              setTotalBill(b);
              console.log("from use server",data)

            }));
        }
    }  


    return{
        Get_Electricity_Data , totalUnits , totalBill , bills , loading,setBills,
    }

}