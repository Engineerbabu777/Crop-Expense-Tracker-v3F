
import Navbar from '@/components/HomePage/TopNavigation/Navbar';
import {useRouter} from 'next/router';
import DetailsTable from '@/components/DetailPageComponent/Table';
import Main from '@/components/DetailPageComponent/Main';
import {Divider} from '@chakra-ui/react';
import {IoAddCircle} from 'react-icons/io5'
import ViewDataState from '@/modals/DetailsModal';
import {
  RecoilRoot,} from 'recoil';

export default function DetailsPage({}) {




    return(<RecoilRoot>

    <ViewDataState />
    
     {/* NAVBAR! */}
     {/* <Navbar /> */}
      
      {/* MAIN */}
       <Main />
    
    </RecoilRoot>)
}