import { useState, useEffect } from 'react'
import Image1 from '/public/pic-1.avif'
import Image2 from '/public/pic-2.avif'
import Image3 from '/public/pic-3.jpg'
import Image4 from '/public/pic-4.jpg'
import Image5 from '/public/pic-5.jpg'
import { MdViewCozy } from 'react-icons/md'
import Link from 'next/link'
import BasicUsage from '@/modals/NewEntry'
import { AuthState } from '../../../atom/authState'
import useAllCrops from '@/utils/getAllCrops'
import { useRecoilState } from 'recoil'

import { useSession } from 'next-auth/react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
const images = [Image1, Image2, Image3, Image4, Image5]

export default function Greeting ({}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const currentImage = images[currentImageIndex]
  const [authState, setAuthState] = useRecoilState(AuthState)
  const { status, data: session } = useSession()
  const { crops, getFreshData } = useAllCrops()

  useEffect(() => {
    if (session) {
      getFreshData()
    }
  }, [status])

  const handleDelete = async (id: any) => {
    const res = await axios.delete(`/api/crop?crop_id=${id}`)
    if (res.data.success) {
      toast.success('Deleted! Please wait...');
      setTimeout(()=> {
        getFreshData();
      },2000);
    }
  }

  return (
    <>
    <Toaster />
      <BasicUsage />
      <div className='flex flex-col mt-2 px-2'>
        <p className='text-3xl text-gray-600 '>
          Hi, <span className='font-bold text-teal-400'> Jenifer!</span>
        </p>
        <p className='text-md text-gray-400 -mt-1'>Good Morning</p>

        <div className=' h-[300px] '>
          {/* SERACH INPUT! */}
          <div className='flex items-center justify-between mt-2'>
            <input
              className='border-2 border-teal-400 bg-gray-100 outline-none placeholder:text-gray-400 w-[68%] rounded-full p-1 px-4 '
              placeholder={'Search by year'}
              type='text'
            />
            <button className='border-2 border-teal-400 w-[30%] bg-gradient-to-r from-teal-300 to-teal-400 p-1 rounded-full font-semibold text-white '>
              Search
            </button>
          </div>

          {/* CROUSEL! */}
          <div className=' h-[200px] items-center mt-3 rounded-md overflow-hidden bg-cover flex mx-auto'>
            <img src={currentImage.src} className='object-cover' alt='img' />
          </div>

          {/* USER NOT LOGGED IN! */}
          {/* <div className=" min-fit-content flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md">
        <h1 className="text-3xl font-bold mb-6">CropTracker</h1>
        <img src={currentImage.src} alt="Crop Fields" className="mb-4 rounded-md w-full" />
        <p className="text-lg mb-4">
          Welcome to CropTracker, your comprehensive and intuitive app designed to revolutionize
          the way you manage and track your crop expenses. Whether you're a seasoned farmer or a
          budding agricultural enthusiast, CropTracker equips you with powerful tools to optimize
          your farming operations, boost yields, and cultivate success like never before.
        </p>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md">Get Started</button>
      </div>
    </div> */}

          {/* VIEW ALL! */}
          <div className='mt-2 rounded-md px-3 h-6 flex bg-gradient-to-r from-teal-300 to-teal-500 via-teal-400 items-center text-white justify-between'>
            <p className='text-lg underline'>View all</p>
            <MdViewCozy className='w-5 h-5' />
          </div>

          {/* SHOW CROPS! */}
          <div className='h-36 mt-2 flex gap-1 w-full flex-wrap'>
            {/* ADD NEW! */}
            <div
              onClick={() => setAuthState({ open: true })}
              className='items-center flex-col gap-1 justify-center h-36 rounded-md bg-gradient-to-r  from-teal-300 to-green-300  w-[49%] overflow-hidden relative flex'
            >
              <img
                src={'add-file.png'}
                alt='new-document'
                className='w-10 h-10'
              />
              <p className='text-center text-white font-semibold text-xl'>
                Add New Crop Entry
              </p>
            </div>
            {/* BOX! */}

            {/* VIEW CROPS! */}
            {crops?.length > 0 &&
              crops?.map((c: any, i: any) => (
                <div
                  key={i}
                  className='h-36 rounded-md bg-red-500 w-[49%] overflow-hidden relative flex'
                >
                  <div
                    className='w-8 h-8 rounded-full bg-red-600 absolute right-4 top-2'
                    onClick={() => handleDelete(c?._id)}
                  ></div>
                  <img
                    src={'wheat-1.jpg'}
                    alt="'whaet"
                    className=' object-fit w-full h-full'
                  />
                  <Link
                    href={`/ali/${c?._id}`}
                    className='items-center flex gap-4 absolute font-semibold text-xl bottom-0 right-0 left-0 bg-gradient-to-r from-[#F0FFF4] via-[#FFDFE5] to-[#E6E6FA] text-black  p-2 opacity-70 w-full'
                  >
                    <p className=''>{c?.name}</p>
                    <p className='text-sm'>
                      ({c?.month} - {c?.year})
                    </p>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}
