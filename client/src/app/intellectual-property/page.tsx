
import { Nav } from '../components/Nav'
import Footer from '../components/Footer'
import { Vesper } from '../corporate-commercial/page'
import { Images2 } from '../components/Sections/Section3'


const Images: string[] = [
    "IP/electric-bulb-1.1-e1447065006801.png"
]
export default function page() {
  return (
    <>    
    <Nav/>
    <div>
        <div className='relative  left-[10rem] lg:flex block pt-16 items-center'>
        <img src={Images[0]} className='w-[20rem] relative left-40 lg:relative lg:left-0'/>
        <div>
        <h2 className='text-2xl relative left-[3.4rem] font-bold text-purple-600'>Intellectual Property</h2>
            <div className="body-text ml-10">
            <p className="text py-2"> 
            Our IP department offers a broad spectrum of services.
            </p>

            <p className="text py-2">
            From searches to registration, renewals, annuities, assignments, agency, distributorship, franchising, licensing, 
            transfer of technology, copyright depository, piracy, infringement, passing-off, boarder enforcement measures, customs related
            assis-tance, product registration, and dispute resolution, with 3 Partners, 9 Associates and over 12 support staff in the departme-nt,
            our practice is adequately equipped to handle matters arising from and relating to all aspects intellectual property laws 
            in Nigeria, Angola and within the OAPI dispensation (OAPI is an intellectual property union comprising of 17 (seventeen) African countries made up of Benin, 
            Burkina Faso, Cameroon, Central African Republic, Chad, Congo, Gabon, Guinea, Guinea-Bissau, Ivory Coast, Mali, Mauritania, Niger, Senegal and Togo; from our offices in Cameroon).
            </p>

            <p className="text py-2">
            In over 14 years, we have achieved tremendous success in IP administration before the various Registries and an enviable reputation in dispute resolution matters before the administrative tribunals,
             arbitration panels, trial and appellate courts. We represent blue chip companies, major brands and start-ups. With a portfolio base of over 8,000 files, we are always available to provide 
             the individual attention and quality service that has helped many of our clients to grow with us over the years.
            </p>
        </div>
        </div>
        </div> 
        <div className='pt-6 pb-6'>
        <h2 className={` ${Vesper.className} text-center text-3xl text-gray-400 font-bold pb-7`}>Practice on Intellectual Property</h2>
        <div className="grid lg:grid-cols-6 grid-cols-2 ">
        {Images2.map((images, idx) => (
            <div className="shadow-md mx-auto   border-2 border-gray-100" key={idx}>
            <img className="w-[15rem] py-2 px-2" src={images}/>
            <p className="bg-gray-400 px-2 py-2 uppercase font-semibold text-white text-center hover:text-gray-300 cursor-pointer">
                {
              Images2[0] === images? "Domain Name" :
              Images2[1] === images ? "Product Registration" :
              Images2[2] === images? "Copyright" : 
              Images2[3] === images? "Trade Service Marks" : 
              Images2[4] === images? "Patent Designs" : 
              Images2[5] === images? "Administrative Set Ups" : ''
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
