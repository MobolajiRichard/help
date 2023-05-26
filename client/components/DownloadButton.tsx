import Image from "next/image";
import React from "react";
import { ios, google} from "@/assets/Images";

const DownloadButton = () => {
  return (
    <div className='flex mt-4'>
      <Image width={140} className='mr-5' src={ios} alt='app-store' />
      <Image width={140} src={google} alt='app-store' />
    </div>
  )
}

export default DownloadButton