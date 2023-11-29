'use client'
import { useState, useEffect } from "react";
import { Nav } from "../components/Nav";
import Footer from "../components/Footer";
import {PiTelevisionBold} from "react-icons/pi";
import {BsFillLaptopFill, BsMouseFill} from "react-icons/bs";
import {GrTechnology} from "react-icons/gr";
import {FcSportsMode} from "react-icons/fc"
import { Vesper } from "../corporate-commercial/page";

export default function page() {

  const [scrolled, SetScrolled] = useState(false)

  const Areas: string[] = [
    "Advertising and Marketing",
    "Endorsements and Merchandising",
    "Media Rights",
    "Arts (Creative, Fine and Applied)",
    "Exhibitions, Events and Concerts",
    "Mergers and Acquisition",
    "Business formation",
    "Financing",
    "Music and Film/TV",
    "Emerging Growth and Venture Capital",
    "Intellectual Property",
    "Private Equity",
    "Employment and Talents",
    "Radio",
    "Intellectual Property (Copyright, Patents and Trademarks)",
    "Registration of Technology",
    "Mergers and Acquisition",
    "Publishing",
    "Regulatory and Compliance"


  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrolly = window.scrollY || document.documentElement.scrollTop



      const scrolThreshold = 500;

      if( scrolly >= scrolThreshold){
        SetScrolled(true)
  
      } else {
        SetScrolled(false)
      }
    } 

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

 

  return (
    <>
    <Nav/>
    <div className="pt-8">
            <div className="w-1/2 mx-auto">
                <h2 className='text-center  text-2xl lg:relative lg:left-[3.4rem] font-bold text-purple-700'>Media, Entertainment, Technology and Sports (METS) Law Department</h2>
            </div>
            <div className="p-4 max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto mt-5 mb-16">
                <p className=" text-justify leading-6 tracking-wide">
                Stillwaters Law Firm’s (SLF) METS Law department is the first of its kind in Nigeria. The department boasts of a cross section 
                of brilliant and innovative transactional lawyers and litigators with over 50 years’ worth   of collective experience. We support
                the creative and the technology industries, bringing our collective expertise to bear in their routine and special operations.
                </p>
                <p className="text-justify leading-6 tracking-wide pt-3">
                Due to an innate understanding of our clients’ industries, we bring to the table, innovative and business-minded solutions to the legal
                needs of businesses in the media, entertainment, technology and sports industries. We understand how to close transactions quickly and 
                efficiently at a cost that makes business sense and we provide one-stop-shop, wholesome and affordable legal services to corporations 
                and startups. Upon engagement, we deploy a highly qualified, competent and readily available team of lawyers to handle the client’s brief with zest.
               
                </p>
            </div>
            <div className="focus-in-contract-bck ">
              <div className="flex justify-center">
              <div className="text-center ">
                <div className="flex items-center">
                  <BsFillLaptopFill size={30} className="relative right-7 text-purple-700"/>
                <h2 className="text-left relative right-4  text-purple-900 font-semibold text-xl">Media</h2> 

                </div>

                <div className="body-text">
                <p className="text">
                  In MEDIA we provide legal advice and representation across bricks and mortar as well as digital advertising, 
                  marketing, branding, journalism, publicity and privacy rights and digital content concerns and clearance, 
                  offering multi-jurisdictional capabilities to small and large media organisations.
                </p>
                </div>
              </div>
              <div className="pl-16">
                <div className="flex items-center">
                  <PiTelevisionBold size={30} className="relative right-7 text-purple-700"/>
                 <h2 className="text-left relative right-4 text-purple-900 font-semibold text-xl">Entertainment</h2>   
                </div>
              
                <div className="body-text">
                <p className="text">
                  Our ENTERTAINMENT LAW practice covers niche areas in entertainment such as film/TV production and finance (indie 
                  and professional companies), music companies and artist representation, cinema, digital gaming, photography,
                  choreography, stage performance, creative and applied arts, creative writing and publishing, concerts, exhibitions,
                  sports and fashion.
                </p>
                </div>
              </div>
            </div>
            <div className="pt-10 flex justify-center">
              <div className="text-center ">
                <div className="flex items-center">
                  <GrTechnology size={30} className="relative right-7 "/>
                <h2 className="text-left relative right-4  text-purple-900 font-semibold text-xl">Technology</h2> 

                </div>

                <div className="body-text">
                <p className=" text">
                From TECH start-ups to mid-market and big businesses, we provide counsel and representation covering markets such as,
                eCommerce, telecoms, software, IT and outsourcing services, games and entertainment, hardware, food tech and power tech.
                We advise from inception stage till maturity where we assist in continued growth by providing services in areas like
                Mergers and Acquisitions, IPOs and dispute resolution.
                </p>
                <p className="text">
                Enterprises and individuals in Media, Entertainment, Technology and sports are constantly in the business of pushing
                boundaries. Our leanings toward a “Yes” as opposed to a “No”, exemplifies our commitment to providing innovative legal
                solutions and strategic, long-term value propositions focused on smart growth, risk-management and competitive advantage.
                </p>
                </div>
              </div>
              <div className="pl-16">
                <div className="flex items-center">
                  <FcSportsMode size={30} className="relative right-7 "/>
                 <h2 className="text-left relative right-4 text-purple-900 font-semibold text-xl">Sports</h2>   
                </div>
              
                <div className="body-text">
                <p className="text py-4">
                The relevance of sports law in the entertainment industry is fast becoming a very noticeable index.
                The digital age and its attendant globiliasation has exposed the inherent legal and commercial potency
                in this sector. Sport and entertainment are now bonded in an intricately woven global web with abundant followership.
                </p>
                <p className="text py-4">
                In Nigeria, Entertainment and Sports law are amongst the fastest growing areas of legal practice when juxtaposed with 
                other areas of civil law practice.
                </p>
                <p className="text py-4">
                Our attorneys are thoroughly versed in their areas of specialization and have worked extensively with various sport
                ownership groups, sport agents, coaches, sponsors and media companies on contentious and non-contentious issues 
                relating to Sponsorship, arena naming rights, event contracts, brand management, sport governance, exploitation of
                commercial rights, marketing rights, stadium financings to franchise acquisitions and others.
                </p>
                </div>
              </div>
            </div>
   

            </div>
         <div className="py-20">
                <h2 className={`${Vesper.className} text-center text-4xl text-gray-500 font-semibold`}> Areas</h2>
                <div className={`${scrolled? 'slide-in-bottom grid' : ''} grid  grid-cols-2 lg:grid-cols-3 text-center pt-10`}>
                  {
                    Areas.map((area, idx) => 
                    <div key={idx} className="pb-10  text-purple-600 text-xl font-semibold hover:text-purple-300 cursor-pointer">
                      <p> {area}</p>
                       <hr className="border border-gray-300 my-4 ml-[3rem]"></hr>  
                  </div>
             
                    )
                  }
            
                </div>
            </div>
        </div>
    <Footer/>
    </>

  )
}
