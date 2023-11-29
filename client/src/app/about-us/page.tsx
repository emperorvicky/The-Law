import React from 'react'
import { Nav } from '../components/Nav'
import Footer from '../components/Footer'

export default function page() {
  return (
   <>
   <Nav/>
   <div className='grid grid-cols-2 py-10'>
    <img src='Law/lawyer1.2.png' className='relative left-16' />
  
    <div className=''>  
        <h2 className='section1-heading'>About Ken'G's Firm</h2>
    <div className='body-text  '>
    <p className='text' > <span className='font-bold'>KenG's Firm</span> is a law firm based in Nigeria. The firm was established in 2001 and specialises </p>
    <p className='text'>in corporate  and commercial law, intellectual property (IP) law, tax advisory services, Media-Entertainment-Technology and  Sports (METS), and Litigation/Dispute Resolution .</p>

    </div>
    <div className='body-text '>
   <p className='text'>As a firm, it is our belief that many aspects of today’s legal landscape require a keen
   understanding as well as knowledge of the law; accordingly, we offer solutions to the often
    complex arrays of regulations and requirements that confront the business client in Nigeria 
    thereby creating conducive legal environments for our clients to achieve their goals.</p> 
  
    </div>
    <div className='body-text'>
        <p className='text'>  Professionalism, flexibility and innovation are the hallmark of our practice. We value professional
        excellence, outstanding result and realize they both require creativity and hard work. With over 125
        years of combined partnership practice experience, we strive to gain every legal advantage for our,
        clients while upholding the principles behind our guiding goal of PEOPLE, INTEGRITY and SERVICE
        as a driving force steering our entire practice.</p>
    </div>

    <div className='body-text'>
        <p className='text'>From corporate commercial contracts, media rights mergers, sport licensing, corporate income tax,
        copyright issues, due diligence to general trademark/patent administration, infringement, passing-off,
    
        anti-counterfeiting, piracy technology transfer, joint venture, dispute resolution and enforcement, practice representative clients include over 600 foreign multinationals, quoted companies, financial institutions, industries, small and medium-size businesses and private entrepreneurs.

        Our IP department operates from the commericalk cities of Lagos and Abuja in Nigeria, with associate offices in Cameroon (for OAPI matters) and Angola; and our dispute resolution department has extensive practice before the trial and appellate courts in Nigeria.
   
        </p>
   </div>
    </div>

        



    </div>

   <Footer/>
   </>
  )
}
