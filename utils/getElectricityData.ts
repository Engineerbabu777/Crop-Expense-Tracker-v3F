

export const Get_Electricity_Data = (query:any,setTotalBill,setTotalUnits,setLoading) => {
    setLoading(true);
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
          setLoading(false);
          console.log(data);
        }));
    }
    console.log("testing");
}  
