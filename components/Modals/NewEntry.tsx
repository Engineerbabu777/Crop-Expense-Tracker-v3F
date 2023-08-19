


import {Input , Text , Box,Checkbox} from '@chakra-ui/react';

type Props ={
  name: string;
  date: any;
  setDate: any
  setName:any
}

export default function NewEntryBody({
  name , date, setName , setDate}:Props) 
  {

    // getCrrentDate!



    return(<>

    <Box >
     {/* ENTER YOUR CROP NAME! */}
      <Box >
       <Text color={"teal.300"} fontWeight={600} mb={1}>What&apos;s Your Crop Name ?</Text>
       <Input value={name} 
       onChange={(e) => setName(e.target.value)} 
       placeholder={"Crop Name ... Wheat"}/>
      </Box>

     {/* STARTED DATE CHOICE! */}
      <Box mt={2}>
       <Text color={"teal.300"} fontWeight={600} mb={1}>What is the started date for your crop (Optional) ?</Text>
       <Input value={date} 
       onChange={(e) => setDate(e.target.value)} 
       type="date"/>
       
      </Box>

    </Box>
    
    
    
    </>)
}