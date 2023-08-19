
import Navbar from '@/components/HomePage/TopNavigation/Navbar';
import {useRouter} from 'next/router';
import DetailsTable from '@/components/DetailPageComponent/Table';
import {Divider} from '@chakra-ui/react';
import {IoAddCircle} from 'react-icons/io5'
import ViewDataState from '@/modals/DetailsModal';
import {
  RecoilRoot,} from 'recoil';
  import { DataState } from '@/atom/dataState';
  import {useRecoilState} from 'recoil';
import  ElectricityMain from './ElectrictyPage';
import FertilizerMain from './FertilizerPage';
import PloughPage from './PloughPage';
import MiscPage from './MiscPage';
import PesticidesPage from './PesticidesPage';
import DieselPage from './DieselPage';

export default function Main({}) {

    const {query} = useRouter();
    const {name} = query;
    const [data , setData] = useRecoilState(DataState);



    return(<>
    

    {/* ELECTRICITY !! */}
      { name === 'electricity' && <ElectricityMain /> }

    {/* FERTILIZER !! */}
      { name === 'fertilizer' && <FertilizerMain /> }
    
    {/* PLOUGH !! */}
      { name === 'plough' && <PloughPage /> }

    {/* DESEAL !! */}
      { name === 'diesel' && <DieselPage /> }
     
    {/* MISC */}
      { name === 'misc' && <MiscPage /> }

    {/* PESTICIDES !!  */}
      { name === 'pest' && <PesticidesPage /> }
    
    
    </>)
}