
import Navbar from './TopNavigation/Navbar';
import Greeting from './Greetings/Greeting';
import MainBody from './Body/Body';
import {Toaster} from 'react-hot-toast';

export default function HomePageMain({}) {


    console.log('1')
    return(<>

    <Toaster />

     {/* NAVBAR! */}
      <Navbar />
    
     {/* NAME + GREETINGS! */}
      <Greeting />
      
     {/* MAIN BODY! */}
      <MainBody />

     {/* FOOTER! */}
        
    </>)
}