import { iphone } from "@/assets/Images";
import Image from "next/image";
import DownloadButton from "../DownloadButton";

const OurApp = () => {
  return (
    <div className="mt-10">
      <p className="text-center text-[#2B4E8C] font-bold">Join us</p>
      <p className="text-center font-raleway text-2xl font-bold mb-4 ">Our App</p>
      <div className="flex items-center">
        <Image className="ml-[7%] mr-10" src={iphone} alt="app" width={550} />
        <div>
          <p className="font-raleway text-5xl font-bold mb-4">
            Download Our <p>App Now</p>
          </p>
          <p className="text-sm mb-4 opacity-80">
            Make your to-do list wherever <p>you are with our mobile app.</p>
          </p>
          <p className="text-sm opacity-80">
            <b>Help</b> is an easy way to find qualified and <p>reliable local Helpers for
            everything from</p> <p>assembling and installing furniture to moving</p> and
            cleaning
          </p>
          <DownloadButton />
        </div>
      </div>
    </div>
  );
};

export default OurApp;
