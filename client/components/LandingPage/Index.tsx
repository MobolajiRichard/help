import Contact from "./Contact";
import FAQ from "./FAQ";
import OurApp from "./OurApp";
import Header from "../Header";
import Footer from "../Footer";
import DownloadButton from "../DownloadButton";
import Image from "next/image";
import { Rating } from "@/Utils";
import { preview, garden } from "@/assets/Images";
import Reviews from "./Reviews/Index";
import Services from "./Services/Index";

const Index = () => {
  return (
    <div className="bg-white h-full font-montserrat px-[5%] pt-10">
      <Header />
      <div className="flex mt-16 w-full justify-between items-center">
        <div className="">
          <p className="font-raleway text-5xl font-bold">
            Revolutionizing <p>Everyday Work</p>{" "}
          </p>
          <p className="font-bold mb-1 mt-4">
            Everyday work is important, but it’s also time consuming.{" "}
            <p>We can help.</p>
          </p>
          <DownloadButton />
          <div className="flex items-center mt-2">
            <p className="text-4xl font-bold mr-2">4.8</p>
            <div>
              <Rating rate={5} />
              <p className="text-xs text-[#8a8a8a]">990+ Reviews</p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col items-end mr-6 pt-4">
            <div className=" font-raleway text-xl bg-[#2B4E8C] rounded-[20px] text-white h-1/3 w-2/3 flex flex-col items-center justify-center mb-4">
              <p>+1500</p>
              <p className="opacity-80">Helpers</p>
            </div>
            <Image src={preview} alt="preview" width={300} />
          </div>
          <Image src={garden} alt="gardener" width={300} />
        </div>
      </div>
      <Services />
      <OurApp />
      <FAQ />
      <Contact />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Index;
