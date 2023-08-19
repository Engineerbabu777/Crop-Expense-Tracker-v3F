



import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react';
import {useEffect , useState} from 'react';
import {format} from 'date-fns';


type Props = {
  Data: any;
}

export default function DetailsTable({Data}:Props){


  console.log(Data)
    return(<>
    
    <TableContainer bg={'white'}  w={'95%'} mt={4} display={'flex'} mx={'auto'} >
  <Table variant='simple'>
    
    
    <Thead  >
      <Tr  >
        <Th color={'gray.400'} fontWeight={'600'} fontSize={'1.05rem'} >No.</Th>
        <Th color={'gray.400'} fontWeight={'600'} fontSize={'1.05rem'}>Liters</Th>
        <Th color={'gray.400'} fontWeight={'600'} fontSize={'1.05rem'}>Date</Th>
        <Th color={'gray.400'} fontWeight={'600'} fontSize={'1.05rem'}>Amount</Th>
        <Th color={'gray.400'} fontWeight={'600'} fontSize={'1.05rem'}>Actions</Th>

      </Tr>
    </Thead>
    
    <Tbody  fontWeight={'600'} fontSize={'1.10rem'}>
      { Data?.length>0 && Data?.map((d:any , i:any) => (<Tr key={i}>
        <Td>{i+1}</Td>
        <Td>{d.liters}</Td>
        <Td>{format(new Date(d.date), 'yyyy-MM-dd')}</Td>
        <Td>{d.amount}</Td>
        <Td>Edit</Td>
      </Tr>))
      }
    </Tbody>

  </Table>
</TableContainer>
    
    
    
    
    
    
    </>);

}