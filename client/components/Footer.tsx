import Image from "next/image";
import React from "react";
import { logo } from "@/assets/Images";
import DownloadButton from "./DownloadButton";


const Footer = () => {
  return (
    <div className="w-full ">
      <div className="flex justify-between items-start">
        <div className="w-[20%]">
            <Image src={logo} width={100} height={100} alt='logo'/>
          <p className="mt-3 mb-2">Make your to do list wherever you are with our mobile app.</p>
          <p>©2023. All rights reserved.</p>
        </div>
        <div className="w-[20%]">
          <p className=" text-[#2B4E8C] font-bold mb-2">About us</p>
          <p className='hover:text-black cursor-pointer mb-1'>Frequently Asked Questions</p>
          <p className='hover:text-black cursor-pointer mb-1'>Confidential Policy</p>
          <p className='hover:text-black cursor-pointer mb-1'>Contact</p>
          <p className='hover:text-black cursor-pointer '>Blog</p>
        </div>
        <div className="w-[20%]">
          <p className="text-[#2B4E8C] font-bold mb-2">Contacts</p>
          <p className='mb-1'>+351-965-990-000</p>
          <p >@helpyou@gmail.com</p>
        </div>
        <div className="w-[20%]">
          <p className="text-[#2B4E8C] font-bold mb-2">Download our app</p>
          <p>Tackle your to do list wherever you are with our mobile app.</p>
          <DownloadButton />
        </div>
      </div>
      <p className="text-center mt-10 text-sm text-[#0e0e0e80]">
        By using this website, you understand the information being presented is
        provided for informational purposes only
      </p>
    </div>
  );
};

export default Footer;
