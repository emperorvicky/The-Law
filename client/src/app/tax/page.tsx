import { Nav } from "../components/Nav";
import Footer from "../components/Footer";
import { Vesper } from "../corporate-commercial/page";

const Images : string[] = [
  "Tax/general-business-1241245-e1447065470572-768x1000.jpg",
  "Other/damned-administration-1501134-768x768.jpg"
]

const writeUp : string[] = [
  "Taxation of Non Residents in Nigeria",
  "Administrative Set ups"
]

export default function page() {

  return (
    <div>
        <Nav/>
        <div>

          <div className="lg:flex block pt-16 lg:relative lg:left-[15rem]">
            <img src="Tax/moedas-e1447064929206.png" className="w-[25rem]  "/>
            <div className="pl-16">
              <h2 className="text-purple-800 text-3xl font-bold relative left-3">Tax Advisory Services</h2>
              <div className="body-text">
              <p className="text">
                The administrative instruments currently existing for tax management in Nigeria include:
              </p>
              <div className="py-4 relative left-[3rem]">
              <ul className="list-disc">
                <li className="pb-2">The Federal Board of Inland Revenue (FBIR)</li>
                <li className="pb-2">The Joint Tax Board (JTB)</li>
                <li className="pb-2">The State Board on Internal Revenue (SBIR)</li>
                <li className="pb-2">Local Government Revenue Committee</li>
                <li>Joint State Revenue Committee</li>
              </ul>
              </div>
              <div className="body-text">
                <p className="text relative right-3">
                Our tax team has considerable experience in offering practical and efficient solutions to complex tax matters.
                We have a diverse client base including financial institutions, multinational corporations and governmental bodies.
                Our lawyers work closely with clients to create innovative structures and solve complex tax issues arising from
                transactions, controversies and general business operations. We have expertise in providing tax advice, tax risk
                analysis, tax arbitration, tax compliance reviews and providing implementation support to clients.
                </p>
              </div>
              <div className=" py-4">
              <h2 className={` ${Vesper.className} text-center text-3xl text-gray-400 font-bold pb-7`}>Practice on Intellectual Property</h2>
                <div className="flex">
              {
                  Images.map((image, idx) =>
                  <div className=" shadow-md mx-auto   border-2 border-gray-100" key={idx}>
                    <img className="w-[20rem] h-[20rem] py-2 px-2" src={image} alt={`image ${idx}`} />
                   <p className="bg-gray-400 px-2 py-2 uppercase font-semibold text-white hover:text-gray-300 cursor-pointer text-center">
                    {
                    Images[0] === image ? "Taxation of Non Residents in Nigeria" :
                    Images[1] === image ?  "Administrative Set ups" : ''
                    }
                    </p> 
                  </div>
                  )
                }
                </div>
  

              </div>
              </div>

            </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}
