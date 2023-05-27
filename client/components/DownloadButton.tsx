import Image from "next/image";
import React from "react";
import { ios, google} from "@/assets/Images";

const DownloadButton = () => {
  return (
    <div className='flex mt-4'>
      <Image width={140} className='mr-5 hover:scale-110 cursor-pointer' src={ios} alt='app-store' />
      <Image width={140} className='mr-5 hover:scale-110 cursor-pointer' src={google} alt='app-store' />
    </div>
  )
}

export default DownloadButton