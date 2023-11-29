'use client'
import {useState, useEffect } from 'react';
import {BsChevronCompactLeft, BsChevronRight} from 'react-icons/bs';
import {RxDotFilled} from "react-icons/rx"



const images :string[] = [
    'Law/gavel02.png',
    'Law/bulls-fighting.png',
    'Law/stacks-of-silver-coins.png'
]



export default function Carousel() {

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    const previousImage = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length -1 : prevIndex -1
        )
    }
const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
}
    useEffect(() => {
        const interval = setInterval(nextImage, 5000);

        return () => {
            clearInterval(interval)
        };
    }, []);

  return (
    <div className='  max-w-[1200px] h-[600px] w-full  m-auto py-16 px-2 relative bg-gradient-to-r from-blue-300 via-purple-300 rounded-md mt-5 shadow-md'>

        <div style={{backgroundImage: `url(${images[currentIndex]})`}}  
            className='w-full h-full bg-cover  bg-left bg-no-repeat duration-500 '>
               {currentIndex === 0 ? 
               <div className='relative'>
               <h2 className='  uppercase font-bold text-6xl text-white slide-in-blurred-left lg:relative lg:left-[10rem]'>
                People Integrity Service
                </h2>
                <h2></h2>
               
                <a className='bounce-in-bottom bg-purple-300 py-2 px-4 text-white  font-bold rounded  cursor-pointer hover:bg-purple-200   border-purple-300     absolute top-[15rem] left-[17rem]  md:relative md:top-[10rem] md:left-[22rem] lg:absolute lg:top-[15rem] lg:left-[30rem] '>KenG Law Firm</a>
             
                </div> : currentIndex === 1? 
                    <div className='relative' >                
                    <h2 className='fade-in uppercase font-bold text-6xl text-white  relative left-[5rem]'>
                        Litigation/Dispute Resolution
                    </h2> 
                    <p className=' fade-in-bck w-[40rem] text-white flex relative left-[7rem] lg:relative md:relative md:left-[8rem]  lg:left-[20rem] text-md pt-[1rem]  lg:max-w-xl max-w-md'>
                    Arbitration  |  Banking Litigation  |  Civil Litigation   |  Counterfeiting  | Corporate Litigation  |
                    Copyright Litigation  |  Commercial Litigation Enforcement |  Franchise Litigation  |  
                    Federal Civil Litigation  |  Infringement | Intellectual Property Litigation  |  Passing-Off  |  Piracy    |   Patent Litigation 
                    </p>
                    <a className='fade-in-left carousel-button lg:absolute lg:top-[15rem] lg:left-[34rem] left-[18rem] top-[18rem]  absolute   '>Learn More</a>
                    </div> : currentIndex === 2? 
                            <div> 
                            <h2 className='roll-in-top  uppercase font-bold text-6xl text-white  relative left-[1rem]'>
                                Tax Advisory Services
                            </h2>
                            <p className='roll-in-top text-2xl text-white  relative left-[6rem]'>Unbundling the bundles</p>
                            <p className='roll-in-right w-[30rem] relative left-[1rem] text-white'>
                            Personal Income Tax for local and expatriate workers |
                            Corporate Income Tax  |  Petroleum Profit Tax |
                            Customs and Excise   |  Value Added Tax |
                            Capital Gains Tax  |  Stamp Duties |
                            </p>
                            <a className='roll-in-bottom carousel-button absolute top-[19rem] left-[6rem]  lg:absolute lg:top-[15rem] lg:left-[6rem] md:absolute md:top-[15rem] md:left-[6rem] '>Learn More</a>
                            </div> : ''} 
        </div>
        <div className=' left-5 carousel-move' onClick={previousImage}>
            <BsChevronCompactLeft size={30}/>
        </div>
        <div className='right-5 carousel-move' onClick={nextImage}>
            <BsChevronRight size={30} />
        </div>
        <div className='flex top-5 justify-center py-2'>
            {
                images.map((slide, slideIndex) => (
                    <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className='text-2xl cursor-pointer'>
                        <RxDotFilled/>
                    </div>
                ))
            }
        </div>

           
     

    </div>
  )
}
