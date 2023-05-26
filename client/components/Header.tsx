import { logo } from '@/assets/Images'
import Image from 'next/image'
// import { useState } from 'react'


const Header = () => {
    // const [activeTab, setActiveTab] = useState<String>('home')
    const changeTab = (page:string) => {
        // setActiveTab(page)
    }
  return (
    <div className='flex items-center'>
        <div className='mr-[10%]'>
            <Image src={logo} width={100} height={100} alt='logo'/>
        </div>
        <div className='flex'>
            <a className='ml-10' >Home</a>
            <a className='ml-10' >Contact</a>
            <a className='ml-10' >Confidentiality Policy</a>
            <a className='ml-10' >About Us</a>
            <a className='ml-10' >Blog</a>
        </div>
    </div>
  )
}

export default Header