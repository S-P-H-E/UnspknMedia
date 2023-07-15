import Profiles from '@/components/Profiles'
import { BsYoutube, BsArrowDownShort } from 'react-icons/bs'
import { TiVideo } from 'react-icons/ti'
import One from '@/public/Charlie.jpg'
import Two from '@/public/Sphe.jpg'

export default function Home() {
  return (
    <>
      <div className="py-[24px] px-[80px] flex justify-between items-center border-b border-[#292929] font-medium">
        <TiVideo size={30}/>
        <div className="flex gap-[48px]">
          <button className="text-[#7B7B6F]">Home</button>
          <button className="text-[#7B7B6F]">Team</button>
          <button className="text-[#7B7B6F]">Plans</button>
          <button className="text-[#7B7B6F]">Contact</button>
        </div>
        <button className="border border-[#ffffff29] rounded-[8px] py-[16.5px] px-[24px]">
          Pick a Plan
        </button>
      </div>

      {/* Home */}
      <div className="mt-[80px] flex flex-col justify-center items-center w-full">
        <div className=" text-lg border px-4 py-1 my-3 font-medium rounded-full flex justify-center items-center gap-2">
          <BsYoutube />
          Short Form Agency
          </div>
        <h1 className="text-9xl text-center w-[1200px] font-medium mb-[4rem]">High quality social media content</h1>
        <button className='flex bg-white text-black py-[16.5px] px-[24px] rounded-[8px] font-medium'>
          Choose Your Plan
        </button>
        <button className='my-[150px] uppercase bg-[#0f1115] text-[#ffffffb8] flex justify-center items-center rounded-[8px] py-[12.5px] px-[16px] text-[16px] font-[400]'>
          Scroll to learn more
          <BsArrowDownShort className='text-[#525356]' size={25}/>
        </button>
      </div>

      {/* Team */}
      <div className='flex flex-col justify-center items-center m-10'>
        <h1 className='text-4xl font-medium'>Meet our Team</h1>
        <div className='flex justify-center items-center gap-10 m-10'>
          <Profiles image={One} name={'Charlie'} description={'CEO & Founder'} link={'https://www.instagram.com/champagneangello'}/>
          <Profiles image={Two} name={'Sphe'} description={'Head of Content Team'} link={'https://www.instagram.com/sphe.exe'}/>
        </div>
      </div>
    </>
  )
}
