

export const Images2 : string[] = [
    'Other/copyright-1024x1024.png',
    'Other/damned-administration-1501134-768x768.jpg',
    'Other/domain_name-768x768.jpg',
    'Other/drugs-768x768.png',
    'Other/trademark-monogram-750x410-768x768.jpg',
    'Other/url-768x768.jpeg'
]

export default function Section3() {

  return (

    <div className="py-4 text-center">
        <h2 className="italic font-bold pb-6">We provide quality legal representation on all these areas.</h2>
        <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-3 gap-4">
        {Images2.map((images, idx) => (
            <div className="shadow-md mx-auto   border-2 border-gray-100" key={idx}>
            <img className="w-[12rem] py-2 px-2" src={images}/>
            <p className="bg-gray-400 px-2 py-2 uppercase font-semibold text-white hover:text-gray-300 cursor-pointer">
                {   Images2[0] === images? "Domain Name" :
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
  )
}
