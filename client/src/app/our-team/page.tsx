import { Nav } from "../components/Nav"
import Footer from "../components/Footer"
import { Roboto } from "next/font/google"

const ROb = Roboto({
  subsets:["cyrillic"],
  weight:"700"

})

// "latin" | "latin-ext" | "cyrillic" | "cyrillic-ext" | "greek" | "greek-ext" |


const Images :string[] = [
  "people/KenG.jpg",
  "people/Emperor.jpg",
  "people/Uncle.jpg",
  "people/Anita.jpg",
  "people/Favour.jpg",
  "people/Ebube.jpeg",
  "people/Presh.jpg",
  "people/Bobos.JPG"
]

export default function page() {
  return (
  <>
  <Nav/>
    <div className="">
      <div className="text-center">
             <h2 className={`${ROb.className} text-3xl text-gray-400 pt-12`} >Meet Our Team</h2> 
      </div>
      <div className="flex h-screen w-full justify-center items-center ">
        <div className="bg-gray-200 rounded-md relative">
              <img className="w-[20rem] rounded-sm flex py-3 px-3" src={Images[0]}/>
              <div className="absolute bottom-[1rem] left-[1rem] ">
              <p className="text-xl font-semibold text-white">Okpalifo Godspower </p>  
              <p className="text-white">Principal Counsel</p>  
              </div>
               

        </div>
      </div>
      <div className="flex relative">
      <div className="bg-gray-200 rounded-md relative ml-7">
              <img className="w-[20rem] rounded-sm flex py-3 px-3" src={Images[1]}/>
              <div className="absolute bottom-[1rem] left-[1rem] ">
                <p className="text-xl font-semibold text-white">Emperor</p>  
                <p className="text-white">Angel Investor</p>  
              </div>
               
      </div>
      <div className="bg-gray-200 rounded-md lg:relative lg:left-[50rem] md:relative md:left-[18rem] sm:relative sm:left-[2rem]">
              <img className="w-[20rem] rounded-sm flex py-3 px-3" src={Images[2]}/>
              <div className="absolute bottom-[1rem] left-[1rem] ">
              <p className="text-xl font-semibold text-white">Felix</p>  
              <p className="text-white">Angel Investor</p>  
              </div>
              
      </div>
      </div>

      <div className="flex mt-16 md:pb-[34rem] sm:pb-[34rem] lg:pb-0">
      <div className="bg-gray-200 ml-7 rounded-md md:relative md:left-[1rem]">
              <img className="md:w-[20rem] w-[110rem] rounded-sm flex py-3 px-3 h-[30rem]" src={Images[3]}/>
              <div className="absolute bottom-[1rem] left-[1rem] ">
              <p className="text-xl font-semibold text-white">Anita</p>  
              <p className="text-white">Litigation / Dispute Resolution / Head of Chambers</p>  
              </div>
              
      </div>

      <div className="bg-gray-200 rounded-md md:relative md:left-[18rem] relative left-[2rem]">
              <img className="md:w-[20rem] w-[110rem] rounded-sm flex py-3 px-3 h-[30rem]" src={Images[6]}/>
              <div className="absolute bottom-[1rem] left-[1rem] ">
              <p className="text-xl font-semibold text-white">Data Buddy &#x1F602;</p>  
              <p className="text-white">Data Subscription</p>  
              </div>
              
      </div>
      <div className="bg-gray-200 rounded-md lg:relative lg:left-[30rem] lg:top-0 lg:right-0 md:relative md:top-[32rem] md:right-[20rem] absolute top-[122rem] right-[12rem] block">
              <img className="md:w-[20rem] w-[20rem] rounded-sm flex py-3 px-3 h-[30rem]" src={Images[4]}/>
              <div className="absolute bottom-[1rem] left-[1rem] ">
              <p className="text-xl font-semibold text-white">Favour</p>  
              <p className="text-white">Media, Entertainment, Technology and Sports</p>  
              </div>
              
      </div>
      </div>

      <div className="flex mt-16 lg:relative lg:left-[15rem] md:relative md:left-0 relative right-3 pb-6">
      <div className="bg-gray-200 ml-7 rounded-md relative left-[1rem]">
              <img className="w-[20rem] rounded-sm flex py-3 px-3 h-[30rem]" src={Images[5]}/>
              <div className="absolute bottom-[1rem] left-[1rem] ">
              <p className="text-xl font-semibold text-white">Chidebube Ibezim</p>  
              <p className="text-white">Intellectual Property</p>  
              </div>
              
      </div>

      <div className="bg-gray-200 rounded-md md:relative md:left-[18rem] relative left-[2rem] ">
              <img className="w-[20rem] rounded-sm flex py-3 px-3 h-[30rem]" src={Images[7]}/>
              <div className="absolute bottom-[1rem] left-[1rem] ">
              <p className="text-xl font-semibold text-white">Bobos</p>  
              <p className="text-white">Tax Advisory Services</p>  
              </div>
              
      </div>

      </div>
    </div>
<Footer/>
  </>
  )
}
