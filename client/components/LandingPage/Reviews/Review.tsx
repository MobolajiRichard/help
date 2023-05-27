import { seema } from "@/assets/Images";
import Image, { StaticImageData } from "next/image";
import { Avatar } from "@mui/material";
import { Rating } from "@/Utils";

type Review = {
  name: string;
  date: string;
  ratings: number;
  image: StaticImageData;
  desc: string;
};

const Review = ({ review }: { review: Review }) => {
  const { name, date, ratings, image, desc } = review;
  return (
    <div className=" h-96 rounded-[20px]  flex flex-col items-end py-2 border border-grey-100 px-4  shadow-xl justify-between">
      <div className="flex flex-col items-center">
        <div className="w-[67px] h-[67px] bg-grey-400 rounded-full">
          <Image
            alt="ii"
            src={image}
            className="w-full h-full object-contain"
          />
        </div>
        <p className="font-semibold">{name}</p>
        <Rating rate={ratings} />
        <p className="font-medium text-sm mt-4">{desc}</p>
      </div>
      <p className="font-semibold">{date}</p>
    </div>
  );
};

export default Review;
