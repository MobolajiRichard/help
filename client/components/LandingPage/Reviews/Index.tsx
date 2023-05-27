import Slider from "react-slick";
import Review from "./Review";
import { soowon, seema, ray, betsy } from "@/assets/Images";
import { carousel_settings } from "@/utils";

const Reviews = () => {
  const reviews = [
    {
      name: "Soowon E.",
      date: "April 8, 2023",
      ratings: 5,
      image: soowon,
      desc: "Angel was the best handyman I've ever hired. He was proactive, positive, efficient and truly wanted to help with everything we needed. He's an expert that you can trust in any handman task. I'd definitely hire him again.",
    },
    {
      name: "Betsy T.",
      date: "April 1, 2022",
      ratings: 5,
      image: betsy,
      desc: "Punctual, great communication, great work. I look forward to working with Thomas again!",
    },
    {
      name: "Ray E.",
      date: "April 1, 2022",
      ratings: 4,
      image: ray,
      desc: "Great cleaning! Reliable and was able to accommodate my schedule. Would recommend - thanks Nikolina!",
    },
    {
      name: "Seema H.",
      date: "April 1, 2022",
      ratings: 3,
      image: seema,
      desc: "Irina’s work was excellent and our home was left spotless. Great communication throughout. Highly recommended.",
    },
    {
      name: "Richard O.",
      date: "May 5, 2023",
      ratings: 5,
      image: soowon,
      desc: "Punctual, great communication, great work. I look forward to working with Thomas again!",
    },
  ];
  return (
    <div className="my-10">
      <p className="text-center text-primary font-bold">Reviews</p>
      <p className="text-center font-raleway text-2xl font-bold mb-4 ">
        Feedback from you
      </p>
      <Slider adaptiveHeight={false} {...carousel_settings}>
        {reviews.map((r, i) => (
          <div className="py-3 px-2" key={i}>
            <Review review={r} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Reviews;
