import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Review from "./Service";
import {
  cleaning,
  electrician,
  moving,
  mounting,
  pet_sitting,
  plumbing,
  yard,
  home_repair,
  photography,
} from "@/assets/Images";

const Service = () => {
  let settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const services = [
    {
      service: "Cleaning",
      image: cleaning,
      request: 500,
    },
    {
      service: "Help Moving",
      image: moving,
      request: 450,
    },
    {
      service: "Yard Work",
      image: yard,
      request: 400,
    },
    {
      service: "Plumbing Help",
      image: plumbing,
      request: 500,
    },
    {
      service: "Mounting",
      image: mounting,
      request: 450,
    },
    {
      service: "Home Repairs",
      image: home_repair,
      request: 500,
    },
    {
      service: "Electrician",
      image: electrician,
      request: 450,
    },
    {
      service: "Pet Sitting",
      image: pet_sitting,
      request: 400,
    },
    {
      service: "Photography",
      image: photography,
      request: 450,
    },
  ];
  return (
    <div className="mt-10">
      <p className="text-center text-[#2B4E8C] font-bold">Popular</p>
      <div className="flex flex-col md:flex-row items-center w-full justify-between mb-6">
        <p ></p>
        <p className=" font-raleway text-center text-2xl font-bold">
          Popular services
        </p>
        <p className="text-xl font-bold text-[#2B4E8C]">10 options</p>
      </div>

      <Slider adaptiveHeight={false} {...settings}>
        {services.map((s, i) => (
          <div className="mr-2" key={i}>
            <Review services={s} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Service;
