import { logo } from "@/assets/Images";
import Image from "next/image";
import { useState } from "react";
import { MenuOutlined, Close } from "@mui/icons-material";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="flex items-center justify-between md:justify-start">
      <div className="mr-[10%]">
        <Image src={logo} width={100} height={100} alt="logo" />
      </div>
      <div className=" hidden md:flex">
        <a className="ml-10 border-b-2 border-gradient-to-r from-white via-blue-700 to-white">Home</a>
        <a href='#contact' className="ml-10">Contact</a>
        <a className="ml-10">Confidentiality Policy</a>
        <a className="ml-10">About Us</a>
        <a className="ml-10">Blog</a>
      </div>
      <div className=" relative md:hidden flex flex-col items-end w-full">
        {!open && (
          <div onClick={() => setOpen(true)}>
            <MenuOutlined />
          </div>
        )}
        {open && (
          <div className="absolute flex flex-col items-end bg-white w-full text-primary">
            <div onClick={() => setOpen(false)}>
              <Close />
            </div>
            <a className="mb-2 mt-2">Home</a>
            <a className="mb-2" href='#contact'>Contact</a>
            <a className="mb-2">Confidentiality Policy</a>
            <a className="mb-2">About Us</a>
            <a>Blog</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
