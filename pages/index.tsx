
import { useSession, signIn, signOut } from "next-auth/react"
import { ClipLoader } from 'react-spinners';
import { FcGoogle } from 'react-icons/fc';
import HomePageMain from "@/components/HomePage/Main";

export default function Home() {
  const { data: session, status: sessionStatus } = useSession();



  // IF PREV-SESSION NOT EXISTS! 
  if (!session && sessionStatus === 'unauthenticated') {
    return <div className="p-4 h-screen w-full bg-[#D0BFFF] flex justify-center items-center flex-col">
      <h2 className="text-2xl text-black font-semibold">Crop Expense Tracker</h2>
      <div className=" mb-12 flex flex-col  justify-center items-center">
        <img src="/test.gif" alt="test" className="w-32 h-32" />
        <button onClick={() => signIn('google')} className="h-12 justify-center items-center p-1 bg-gradient-to-r from-[#313866] to-[#504099] text-white rounded-md px-3 flex gap-4">
          <FcGoogle size={24} />
          <p className="text-lg">Sign in with Google</p>
        </button>
      </div>
    </div>
  }


  // CHECKING IF USER/SESSION AVAILABLE
  if (!session?.user && sessionStatus === 'loading') {
    return <div className="p-4 h-screen w-full bg-[#D0BFFF] flex justify-center items-center flex-col">
      <ClipLoader color="green" size={90} />
    </div>
  }

  return (
    <>

    {/* IF SESSION AVAILABLE AND USER HAS LOGGED! */}
      {session?.user && sessionStatus === 'authenticated' && <>
       
       <div className="sm:hidden">
       <HomePageMain />
       </div>

       <div className="hidden sm:block text-red-500 text-xl text-center">
        Only Mobile Version is Available
       </div>

      </>
      }

    </>
  )
}
