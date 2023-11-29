import Footer from "../components/Footer";
import { Nav } from "../components/Nav";


export default function page() {
  return (
    <div>
        <Nav/>
        <div className="">
          <div className="lg:flex lg:relative relative left-[10rem] block lg:left-[15rem] mt-[5rem] pb-6">
            <img className="w-[25rem]" src="Law/bulls-fighting.png" />
            <div className="body-text lg:ml-[5rem]">
              <h2 className="text-2xl font-bold text-purple-600 uppercase ">Litigation/Dispute Resolution</h2>
              <p className="text">
              We are fully engaged in alternative dispute resolution and litigation covering varieties of issues in banking,
              contracts, real estate, international trade and investments, intellectual property, consumer protection, taxation
              and banking. Our dispute resolution portfolio includes ADR/litigation on contracts, commercial contract, equity
              distribution, joint venture structure, trademark infringement and/or passing off, real estate recovery, counterfeiting,
              copyright, piracy, royalty payment, debt recovery, insolvency, corporate dissolution, asset recovery, consumer
              litigation, Consumer Rights, licensing, distributorship, franchise, personal/corporate tax, and banking.
              </p>
              <p className="text pt-[2rem]">
              Our practice forum in Nigeria extends from Administrative Tribunals in intellectual Property matters,
              to Arbitration and Mediation Panels, Federal and States High Courts, Court of appeal and the Supreme Court.
              </p>
              <p className="text pt-[2rem]">
              Indeed, contentious trial and appellate matters have been one of our major strong points and we are very proud
              of the enviable reputation we have achieved in these areas over the years. Regardless of our strength in this
              area of practice, our primary objective remains to ensure that disputes involving our clients are efficiently
              resolved on a cost effective basis and within the shortest possible time frame.
              </p>
            </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}
