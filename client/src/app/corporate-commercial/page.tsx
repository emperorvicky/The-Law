import { Nav } from "../components/Nav";
import Footer from "../components/Footer";
import { Vesper_Libre} from "next/font/google"




const Images :string[] = [
    'Other/security-lock-1512132-e1447065655707-768x1000.jpg',
    'Other/shaking-hands-1237145-1920x1280-e1447065633703-768x1000.jpg',
    'Other/signed-away-1-1549840-e1447065675123-768x1000.jpg',
    'Other/business-law-1238207-e1447066445713-768x1000.jpg'
    
];

export const Vesper = Vesper_Libre({
    subsets:["devanagari"],
    weight:"700"
})

export default function page() {


  return (
    <>
    <Nav/>
    <div>
        <div className="relative lg:left-[15rem]  block lg:flex pt-16">
            <img className="  md:h-[30rem] w-[20rem] h-[30rem] relative left-[10rem] lg:relative lg:left-0"   src="Other/puzzle-world.png"/>
            <div className="pl-16">      
              <h2 className="text-2xl relative left-[1rem] font-bold text-purple-600">Corporate Commercial</h2>              
                <div className="body-text"> 
             
                <p className="text py-2">
                    Stillwaters Law Firm corporate commercial team provides comprehensive business advisory services for clients 
                    in all aspects of corporate and commercial matters, including corporate governance, formation of companies, 
                    mergers and acquisitions, regulatory compliance, board advisory, risk management, joint ventures, banking and finance,
                    project finance, infrastructures, taxation, labour, competition and the cultural and creative industries.
                    We take great pride in aiming to fully protect the general interests of corporations, investors, and interested parties at all times.
                </p>
                <p className="text py-2">
                    At Stillwaters, we understand the need for compliance and corporate governance. For this reason, our Corporate/Commercial law department
                    is adequately equipped with the principles of best practice in the diverse areas of corporate practice, as well as the necessary 
                    experience and exposure in company secretarial matters.
                </p>
                <p className="text py-2">
                   We have advised on the most cutting-edge transactions and have a broad range of clients from startups to listed companies. 
                </p>
                <p className="text py-2"> 
                   Some of our recent transactions include, amongst others, advise and structure of: a multi-million US Dollars commercial airline 
                   project in Nigeria, the construction of a US$170m distillery plant, the restructuring of a US$500 million steel plant, the acquisition
                of US$43 million trawlers, and the construction of a US$10million paint factory on a JV basis.
                </p>  
                






                </div>
            </div>
        </div>
        <div className="pb-4" >
        <h2 className={` ${Vesper.className} text-center text-3xl text-gray-400 font-bold pb-7`}>Practice on Corporate Commercial</h2>

        <div className="grid lg:grid-cols-4 grid-cols-2 ">
        {Images.map((images, idx) => (
            <div className="shadow-md mx-auto  border-2 border-gray-100" key={idx}>
            <img className="lg:w-[20rem] w-[15rem] py-2 px-2" src={images}/>
            <p className="bg-gray-400 px-2 py-2 uppercase font-semibold text-white text-center hover:text-gray-300 cursor-pointer">
                {
                    Images[0] === images? "Securities" :
                    Images[1] === images? "Joint Ventures" :
                    Images[2] === images? "Business Formation" :
                    Images[3] === images? "Regulatory Compliance" : ""
                }
            </p>
            
            </div>
        ))}
        </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}
