import { logo } from "@/assets/Images";
import Image from "next/image";
import { useState } from "react";
import { MenuOutlined, Close } from "@mui/icons-material";
import Link from "next/link";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="flex items-center justify-between md:justify-start">
      <div className="mr-[10%]">
        <Image src={logo} width={100} height={100} alt="logo" />
      </div>
      <div className=" hidden md:flex">
        <Link href='/' className="ml-10">Home</Link>
        <Link href='#contact' className="ml-10">Contact</Link>
        <Link href='/' className="ml-10">Confidentiality Policy</Link>
        <Link href='/' className="ml-10">About Us</Link>
        <Link href='/' className="ml-10">Blog</Link>
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
            <Link href='/' className="mb-2 mt-2">Home</Link>
            <Link className="mb-2" href='#contact'>Contact</Link>
            <Link href='/' className="mb-2">Confidentiality Policy</Link>
            <Link href='/' className="mb-2">About Us</Link>
            <Link href='/'>Blog</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
