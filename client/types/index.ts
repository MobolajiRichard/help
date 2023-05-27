import { StaticImageData } from "next/image";

export type Review = {
    name: string;
    date: string;
    ratings: number;
    image: StaticImageData;
    desc: string;
  }

 export type ServiceType = {
    service:string;
    image: StaticImageData;
    request:number
}
