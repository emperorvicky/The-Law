'use client'
import dynamic from "next/dynamic"
import {useEffect, useState} from "react"
import {BsFacebook, BsLinkedin, BsTwitter, BsGoogle} from "react-icons/bs"
import {BiChevronDown, BiChevronUp} from "react-icons/bi"
import {AiOutlineClose} from "react-icons/ai";
import {GiHamburgerMenu} from "react-icons/gi"



export const Nav = () => {

 
    const [open, setOpen] = useState<boolean[]>([false, false, false])
    const [menu, setMenu] =useState<boolean>(false);

    const handleDropDown = (index: Number) => {
        const updatedOpen = open.map((value, idx) => (idx == index ? !value : false))
        setOpen(updatedOpen)
    }
    const handleMenu = () => {
        setMenu(!menu)
    }


  return (
    <div className="mb-28">  
     <header id="top"  className='bg-blue-500 p-4 shadow-md w-full fixed top-0 z-20 '>
 
        <div className='container mx-auto px-4 py-2'>
        <nav className='flex items-center justify-between'>
            <div className="flex items-center">
            {   menu ? 
  
            <AiOutlineClose onClick={handleMenu} size={50} className="lg:hidden hover:bg-blue-600 px-1 py-2 relative right-9 rounded-md text-gray-300"/> 
            :
            
            <GiHamburgerMenu onClick={handleMenu}  size={50} className=" hover:bg-blue-600 px-1 py-2 lg:hidden relative right-9 rounded-md text-gray-300"/>
            }
                <h2 className="text-white font-semibold text-2xl cursor-pointer"> KenG Law Firm</h2>
            </div>

        <ul className=' space-x-4 lg:flex hidden'>
            <li className='nav'>
                <a href="/" >Home</a>     
            </li>
            <li  className='nav'>Updates</li>
            <li className='nav flex items-center'  onClick={() => handleDropDown(0)}>
                Who we are <BiChevronDown className="pl-1"/>
                {open[0] && (
                    <div className="menu " 
                        role="menu" 
                        aria-orientation="vertical" 
                        aria-aria-labelledby="options-menu">
                        <div className="py-1">
                            <a href="/about-us" className="menuitem" role="menuitem">About Us</a>
                            <div className="border border-gray-100"></div>
                            <a href="/our-team" className="menuitem">Meet Our Team</a>
                        </div>
                    </div>
                )}
                
            </li>
            <li className='nav flex items-center' onClick={() => handleDropDown(1)}>
                Expertise <BiChevronDown className="pl-1"/>
                {open[1] && (
                    <div className="menu" 
                        role="menu" 
                        aria-orientation="vertical" 
                        aria-aria-labelledby="options-menu">
                        <div className="py-1">
                            <a href="/corporate-commercial" className="menuitem" role="menuitem">Corporate Commercial</a>
                            <div className="border border-gray-100"></div>
                            <a href="/intellectual-property" className="menuitem">Intellectual Property</a>
                            <div className="border border-gray-100"></div>
                            <a href="/met-law-department" className="menuitem">Media, Entertainment, Technology and Sports (METs) Law</a>
                            <div className=" border border-gray-100"></div>
                            <a href="/tax" className="menuitem">Tax Advisory</a>
                            <div className="border border-gray-100"></div>
                            <a href="/litigation-2-2" className="menuitem">Litigation/Dispute Resolution</a>
                        </div>
                    </div>
                )}
            </li>
            <li className='nav'>Mark Tracker</li>
            <li className='nav flex items-center' onClick={() => handleDropDown(2)}>
                The Bar Code <BiChevronDown className="pl-1"/>
                {open[2] && (
                    <div className="menu" 
                        role="menu" 
                        aria-orientation="vertical" 
                        aria-aria-labelledby="options-menu">
                        <div className="py-1">
                            <a href="#footer" className="menuitem" role="menuitem">News letter</a>
                            <div className="border border-gray-100"></div>
                            <a href="#sub" className="menuitem">Subscribe</a>
                        </div>
                    </div>
                )}
            </li>
            <li className='nav'>Contact Us</li>
        </ul>


  
        <div className="hidden lg:flex justify-between space-x-3">
            <BsFacebook className="nav-icons"/>
            <BsLinkedin className="nav-icons"/>
            <BsTwitter className="nav-icons"/>
            <BsGoogle className="nav-icons"/>
            
        </div>

        </nav>
        </div>
    {  menu?    
        <div className={`slide-in-top block lg:hidden  relative    list-none `} role="navigation">
        <div className="border pl-[3rem] border-blue-200 opacity-20 w-[60rem] relative right-[7rem] "></div>
        <div className="  w-full pl-2 text-center">
        <li className="text-xl font-semibold text-gray-50 py-2 hover:text-gray-200 cursor-pointer">Home</li>
        <div className="border border-blue-400 mx-[5rem]"></div>
        <li className="text-xl font-semibold text-white py-2 hover:text-gray-200 cursor-pointer"> Updates</li>
        <div className="border border-blue-400 mx-[5rem]"></div>
        <li onClick={() => handleDropDown(0)} className="text-xl  font-semibold text-white py-2 hover:text-gray-200 md:relative md:left-[26rem] cursor-pointer flex items-center relative left-[19rem]"
                >Who we are {open[0] ? <BiChevronUp className="pl-1" /> :<BiChevronDown className="pl-1"/>} </li>
        {open[0] && (
            <>
                <a href="/about-us" className="block text-white hover:text-gray-300 cursor-pointer">About us</a>
                <a href="/our-team" className="block text-white hover:text-gray-300 cursor-pointer">Meet Our Team</a>
            </>
          
        )
        }
        <div className="border border-blue-400 mx-[5rem]"></div>
        <li onClick={() => handleDropDown(1)} className="text-xl font-semibold text-white py-2 hover:text-gray-200 cursor-pointer flex items-center md:relative md:left-[26.5rem] relative left-[19rem]">Expertise {open[1] ? <BiChevronUp className="pl-1" /> :<BiChevronDown className="pl-1"/>}</li>
        {open[1] && (
            <>
            <a href="/corporate-commercial" className="block pb-1 text-white hover:text-gray-300 cursor-pointer">Corporate Commercial</a>
            <a href="/intellectual-property" className="block pb-1 text-white hover:text-gray-300 cursor-pointer">Intellectual Property</a>
            <a href="/met-law-department" className="block pb-1 text-white hover:text-gray-300 cursor-pointer">Media, Entertainment, Technology ans Sports(METs) Law</a>
            <a href="/tax" className="block pb-1 text-white hover:text-gray-300 cursor-pointer">Tax Advisory</a>
            <a href="/litigation-2-2" className="block pb-1 text-white hover:text-gray-300 cursor-pointer">Litigation/Dispute Resolution</a>
        
            </>
          
        )
        }
        <div className="border border-blue-400 mx-[5rem]"></div>
        <li className="text-xl font-semibold text-white py-2 hover:text-gray-200 cursor-pointer">Mark Tracker</li>
        <div className="border border-blue-400  mx-[5rem]"></div>
        <li onClick={() => handleDropDown(2)} className=" text-xl font-semibold text-white py-2 hover:text-gray-200 cursor-pointer flex items-center md:relative md:left-[25.6rem] relative left-[18.5rem]">The Bar Code {open[2] ? <BiChevronUp className="pl-1" /> :<BiChevronDown className="pl-1"/>}</li>
        {open[2] && (
            <>
            <a href="#footer" className="block text-white hover:text-gray-300 cursor-pointer">News letter</a>
            <a href="#sub" className="block text-white hover:text-gray-300 cursor-pointer">Subscribe</a>
            </>
          
        )
        }
        <div className="border border-blue-400 mx-[5rem]"></div>
        <li className="text-xl font-semibold text-white py-2 hover:text-gray-200 cursor-pointer">Contact Us</li>
        <div className=" flex md:relative md:left-[25rem] relative left-[18rem] space-x-3 py-4 ">
                    <BsFacebook className="nav-icons"/>
                    <BsLinkedin className="nav-icons"/>
                    <BsTwitter className="nav-icons"/>
                    <BsGoogle className="nav-icons"/>
                    
                </div>
        </div>  

      
    </div> : ''
    }
    </header>
    
  

    </div>
 
  )
}
