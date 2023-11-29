

export default function Section1() {

  return (
    <div className="text-center">
        <h2 className="text-2xl py-6 text-purple-800 font-bold">Areas of Practice</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-1 py-4">
        <div>
        <h3 className="section1-heading">Corporate Commercial</h3>
        <div className="body-text">
               <p className="text">
        Stillwaters Law Firm corporate commercial team provides comprehensive business 
        advisory services for clients in all aspects of corporate and commercial matters,
        including corporate governance, formation of companies, mergers and acquisitions, regulatory compliance,...
        <a className="section1-read-more text-base leading-6 tracking-wide " href="/corporate-commercial">Read More</a>   
     </p>
    </div>

        </div>
        <div>
        <h3 className="section1-heading" >Intellectual Property (IP)</h3>
        <div className="body-text">
                 <p className="text">
        Our IP department offers a broad spectrum of services. From searches to registration,
        renewals, annuities, assignments, agency, distributorship, franchising, licensing,
        transfer of technology, copyright depository, piracy, infringement, passing-off, boarder enforcement measures,...
        <a className="section1-read-more" href="/intellectual-property">Read More</a>
        </p> 
        </div>

      
        </div>
        <div>
        <h3 className="section1-heading">Media, Entertainment, Technology and Sports (METS)</h3>
        <div className="body-text">
                <p className="text">
          Due to an innate understanding of our clients’ industries, we bring to the table,
          innovative and business-minded solutions to the legal needs of businesses in the media,
          entertainment, technology and sports industries...
          <a className="section1-read-more" href="/met-law-department">Read More</a>
        </p>
        </div>
  
        </div>
        <div className="py-8">
          <h3 className="section1-heading">Tax Advisory</h3>
          <div className="body-text">
            <p className="text">
          Our tax team has considerable experience in offering practical and efficient solutions to complex tax matters.
          We have a diverse client base including financial institutions, multinational corporations and governmental bodies...
          <a className="section1-read-more" href="/tax">Read More</a>
          </p>
          </div>

        </div>
        <div className="py-8">
        <h3 className="section1-heading"> Litigation/Dispute Resolution</h3>
        <div className="body-text">
          <p className=" text">
          We are fully engaged in alternative dispute resolution and litigation covering varieties of issues in banking, contracts,
          real estate, international trade and investments, intellectual property, consumer protection, taxation ...
          <a className="section1-read-more" href="/litigation-2-2">Read More</a>
        </p>
        </div>

        </div>
        </div>
    </div>
  )
}
