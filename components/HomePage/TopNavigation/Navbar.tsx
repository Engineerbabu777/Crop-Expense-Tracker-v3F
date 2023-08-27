

import {AiOutlineAppstore} from 'react-icons/ai';
import {Box} from '@chakra-ui/react';
import {IoNotifications} from 'react-icons/io5';
import Link from 'next/link';
import React , {useState} from 'react';
import {signOut} from 'next-auth/react';

export default function Navbar({}){

      const [user , setUser] = useState<boolean>(false);


    return(<>

    <div className=" bg-white shadow-md sm:bg-blue-100 md:bg-red-100 lg:gray-100 h-12  w-full sticky top-0 left-0 right-0">

      <div className="mx-2 flex justify-between items-center h-full ">
       {/* ICON */}
        <AiOutlineAppstore className="w-6 h-6" />
       {/* TEXT */}
        <Link href={'/'} className="text-[1.2rem] font-semibold">
        { !user ? (<>Home</>) : (<>Login/SignUp</>)}
        </Link>

       {/* ICON */}
       <div d-className="relative" onClick={() => signOut()}>
        <IoNotifications className="w-6 h-6" />
        <div className="bg-red-600 h-3 w-3 rounded-full absolute right-2 top-3"></div>
       </div>
      </div>

    </div>
    
    </>)
}