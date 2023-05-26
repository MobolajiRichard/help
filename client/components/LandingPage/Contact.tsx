import Image from "next/image";
import DownloadButton from "../DownloadButton";
import { contact } from "@/assets/Images";
import {
  AlternateEmail,
  PhoneOutlined,
  PersonOutlineOutlined,
  MailOutlineOutlined,
  ChatBubbleOutlineOutlined,
} from "@mui/icons-material";

const Contact = () => {
  return (
    <div className="mt-10 flex flex-col items-center ">
      <p className="text-center text-[#2B4E8C] font-bold">Contacts</p>
      <p className="text-center font-raleway text-2xl font-bold mb-4 ">
        Contact us
      </p>
      <div className="flex items-center border-2 border-grey-500 rounded-xl w-[80%] shadow-lg py-6">
        <div className="flex flex-col items-center basis-1/2">
          <Image src={contact} alt="contact-hero" width={300}/>
          <div className="flex mt-5 ml-[20%]">
            <div className="flex text-sm">
              <PhoneOutlined />
              <div className="ml-2">
                <p className="font-bold">Call us</p>
                <p className="text-[12px]">+351-965-990-000</p>
              </div>
            </div>
            <div className="flex text-sm ml-4">
              <AlternateEmail />
              <div className="ml-2">
                <p className="font-bold">Our email</p>
                <p className="text-[12px]">@helpyou@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className='basis-1/2 px-[5%]'>
          <div className="border-2 rounded-[20px] border-grey-500 p-4 flex items-center mb-3 shadow-md">
            <PersonOutlineOutlined sx={{ color: "grey" }} />
            <input placeholder="Your Name" className="outline-none ml-2 grow" />
          </div>
          <div className="border-2 rounded-[20px] border-grey-500 p-4 flex items-center mb-3 shadow-md">
            <MailOutlineOutlined sx={{ color: "grey" }} />
            <input placeholder="Your Subject" className="outline-none ml-2 grow" />
          </div>
          <div className="border-2 rounded-[20px] border-grey-500 p-4 flex items-start mb-3 shadow-md">
            <ChatBubbleOutlineOutlined sx={{ color: "grey" }} />
            <textarea rows={5}  placeholder="Your Message" className="outline-none ml-2 grow resize-none" />
          </div>
          <button className='bg-[#2B4E8C] rounded-[20px] text-white w-full p-2'>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
