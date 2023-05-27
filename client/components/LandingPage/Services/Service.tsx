import { cleaning } from "@/assets/Images";
import Image, {StaticImageData} from "next/image";

type Service = {
    service:string;
    image: StaticImageData;
    request:number
}

const Review = ({services}: {services :Service}) => {
    const {image, service, request} = services
  return (
    <div className="mr-5 flex flex-col items-center text-[14px] text-[#484848]" >

        <div className='w-48 h-52 rounded-[20px]'>
        <Image src={image} alt={service} className='w-full h-full rounded-[20px]'/>
        </div>
      <p >{service}</p>
      <p className='font-bold'>+{request} requests</p>
    </div>
  );
};

export default Review;
