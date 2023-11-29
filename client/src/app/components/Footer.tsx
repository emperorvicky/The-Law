'use client'
import {BsFacebook, BsLinkedin, BsTwitter, BsGoogle,BsArrowUpSquareFill} from "react-icons/bs"

export default function Footer() {

  
  function scrollToSection() {
    const targetSection = document.getElementById('top');
  
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  const currentDate = new Date
  const currentYear = currentDate.getFullYear();
  return (
    <div id="footer" className="bg-gray-600">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <div className="py-[5rem] px-[5rem] relative sm:left-[10rem]">
            <h2 className="text-white text-2xl font-thin">Contact Details</h2>
            <div className="py-[2rem]">
            <p className="text-white text">KenG's Law Firm</p>
            <p className="text-white text">50 Oluwatosin Street</p>
            <p className="text-white text">JolayemiVille, RasheedahVille, Nigeria</p> 
            </div>

            <div className="pb-8">
             <p className="text-white text"> Tel: +234 0491 570 006</p>
             <p className="text-white text"> +234 0491 570 156</p>
             <p className="text-white text"> +234 0491 570 157 </p>
             <p className="text-white text"> +234 0491 570 158 </p>
            </div>
            <div>
              <p className="text-white text">Email:kenglaw12firm@gmail.com</p>
            </div>

        </div>

        <div className="py-[5rem] px-[5rem] text-center">
          <h2 className="text-white text-2xl font-thin">Contact Us</h2>
          <div className="pt-10">
            <form id="sub" >
              <div className="flex">
              <input className="bg-gray-700  rounded-md p-2 w-1/2 border border-gray-600 focus:outline-none text-white" placeholder="Name"/>
              <input className="bg-gray-700 rounded-md p-2 w-1/2 relative left-2 focus:outline-none text-white" placeholder="Email"/><br/>  
              </div>
              <div className="py-[2rem]">
                        <textarea className="bg-gray-700 rounded-md focus:outline-none px-4 text-white  w-[22.2rem]" placeholder="Message"/>
              </div>
              <a type="submit" 
                className="  sm:right-[20rem] rounded bg-yellow-400 text-white px-2 py-2 relative left-[8rem] cursor-pointer hover:bg-yellow-300">Send Now</a>
            </form>
          </div>
           </div>
          <div className="py-[5rem] px-[5rem]">
          <h2 className="text-white text-2xl font-thin">From the Barcode</h2>
          <div className="pt-4">
            <li className="text-white list-none">
            <p>
            Human Goodwill: Expanding the Scope of Intellectual Property in Nigeria April 1, 2017 
          </p> 
          <cite>Ifeanyi Okonkwo</cite>
            </li>
          <li className="text-white list-none">
          <p>The Status and Role of an Alternate Director Under the Nigerian Corporate Governance</p>
          <p>April 1, 2017</p>
          <cite>Aniebiet-Abasi Ubon</cite>
          </li>
        <li className="text-white list-none">
        <p>Informal Sector and Taxation in Nigeria </p> 
        <p >April 1, 2017</p>
        <cite>Genevieve Henshaw</cite>
        </li>
          </div>

          </div>
        </div>
    <div className="flex items-center justify-between bg-gray-900">
      <div className="py-6">
      <a className="text-xl pl-6 text-white" href="#">KenG's Law Firm © 2015</a>
      <a href="#" className="pl-3 text-xl text-white">Legal Notice</a>
      <a href="#" className="pl-3 text-xl text-white">Terms</a>
      <a href="#" className="pl-3 text-xl text-white">Copyright {currentYear} KenG's Law Firm |   All Rights Reserved </a>     
      </div>

    <div className="flex justify-between space-x-3">
            <BsFacebook className="nav-icons"/>
            <BsLinkedin className="nav-icons"/>
            <BsTwitter className="nav-icons"/>
            <BsGoogle className="nav-icons"/>
            
        </div>

    <div>

          <BsArrowUpSquareFill onClick={scrollToSection} className="nav-icons relative right-5"/>

    
    </div>
    </div>
    </div>
  )
}
