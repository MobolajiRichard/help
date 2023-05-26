"use client";
import Image from "next/image";
import { Header, Footer, DownloadButton } from "@/components";
import { Star } from "@mui/icons-material";
import {garden, preview} from '@/assets/Images'
import OurApp from "@/components/LandingPage/OurApp";
import FAQ from "@/components/LandingPage/FAQ";
import Contact from "@/components/LandingPage/Contact"

export default function Home() {
  return (
    <div className="bg-white h-full font-montserrat px-[5%] pt-10">
      <Header />
      <div className="flex mt-16 w-full justify-between items-center">
        <div className="">
          <p className="font-raleway text-5xl font-bold">
            Revolutionizing <p>Everyday Work</p>{" "}
          </p>
          <p className="font-bold mb-1 mt-4">
            Everyday work is important, but it’s also time consuming.{" "}
            <p>We can help.</p>
          </p>
          <DownloadButton />
          <div className="flex items-center mt-2">
            <p className="text-4xl font-bold mr-2">4.8</p>
            <div >
              <div>
                <Star sx={{fontSize:'15px', color:'#FFE600'}}/>
                <Star sx={{fontSize:'15px', color:'#FFE600'}}/>
                <Star sx={{fontSize:'15px', color:'#FFE600'}}/>
                <Star sx={{fontSize:'15px', color:'#FFE600'}}/>
                <Star sx={{fontSize:'15px', color:'#FFE600'}}/>
              </div>
              <p className="text-xs text-[#8a8a8a]">990+ Reviews</p>
            </div>
          </div>
        </div>
        <div className='flex'>
          <div className='flex flex-col items-end mr-6 pt-4'>
          <div className=' font-raleway text-xl bg-[#2B4E8C] rounded-[20px] text-white h-1/3 w-2/3 flex flex-col items-center justify-center mb-4'>
            <p >+1500</p>
            <p className="opacity-80">Helpers</p>
          </div>
          <Image src={preview} alt='preview' width={300}/>
          </div>
          <Image src={garden} alt='gardener' width={300}/>
        </div>
      </div>
      <OurApp/>
      <FAQ/>
      <Contact/>
      <Footer />
    </div>
  );
}
