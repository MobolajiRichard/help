
import Image from "next/image";
import Slider from "react-slick";
import Service from "./Service";
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
import { carousel_settings } from "@/utils";


const Services = () => {
  let carouselSettings = { ...carousel_settings, slidesToSHow: 4, dots: false };
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
    <div className="my-10">
      <p className="text-center text-primary font-bold">Popular</p>
      <div className="flex flex-col md:flex-row items-center w-full justify-between mb-6">
        <p></p>
        <p className=" font-raleway text-center text-2xl font-bold">
          Popular services
        </p>
        <p className="text-xl font-bold text-primary">10 options</p>
      </div>

      <Slider adaptiveHeight={false} {...carouselSettings}>
        {services.map((s, i) => (
          <div className="mr-2" key={i}>
            <Service services={s} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Services;
