import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const DataProduct = () => {
  return (
    <>
      <main>
        <section className='section-hero'>
          <div className='container grid grid-two-cols'>
            <div className="hero-content">
              <h1>Data & Products</h1>
              <h2 style={{ fontSize: "20px", marginTop: "7px" }}>The Customer's perception is our Reality</h2>
              <p style={{ textAlign: "justify" }}>MFS specializes in the domains - product engineering, data services, AI, ML, Data Science, Industrial IoT, PLM, Low Code/RAD and content transformation services, Test CoE.</p>
              <p style={{ textAlign: "justify" }}> Software Product Engineering empowers organizations to rapidly deliver feature-rich products in a cost-effective manner. Our Product Engineering team helps customers transform their perception into real products. Our product development strategies meet the evolving market demands while ensuring consumer choices. Also cutting-edge Product Engineering Services include intensive research and analysis to identify the appropriate technologies to achieve the best performance. Our data engineering services enable you to make quick and informed business decisions through our big data services that deliver all-inclusive, integrated solutions.</p>
            </div>
            <div className="hero-image">
              <img src="/images/HomeImage.png" alt="This is Home page" width={500} height={500} />
            </div>
          </div>
          <div className='container' style={{ justifyContent: "center" }}>
            <h1 style={{ fontSize: "30px", }}>Services We Provide</h1>
          </div>

        </section>
        <div className='container' style={{ justifyContent: "center" }}>
          <div className="row row-cols-1 row-cols-md-2 g-4" style={{ width: "70%", alignContent: "center" }}>
            <div className="col" >
              <div className="card" style={{ height: "570px" }}>
                <img src="./images/ProductDevelopment.jpg" className="card-img-top" alt="..." style={{ height: "230px" }} />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontSize: "22px", marginTop: "10px" }}>Product Development</h5>
                  <p class Name="card-text" style={{ textAlign: "justify" }} >We gain a deep understanding of the product, its functionality and the target audience. We take care of the entire process, helping you translate your ideas into a high-performance product. Our product development experts help in gaining insights into using advanced technology, align to changing business needs, and stay one step ahead of the market challenges. Our service differentiation is in technical expertise and in ensuring excellence at various product development stages.</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card" style={{ height: "570px" }}>
                <img src="./images/DataScience.png" className="card-img-top" alt="..." style={{ height: "230px" }} />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontSize: "22px", marginTop: "10px" }}>Data Science</h5>
                  <p className="card-text" style={{ textAlign: "justify" }}>Our Data Science and predictive analytics service enables organizations to develop customized statistical and machine learning models to leverage advanced customer, operational and stream analytics in real time. With our solutions, you can provide the right information to everyone in your enterprise - including in-depth analysis and reporting capabilities that are required to understand business, make the right decisions, gain the competitive edge and increase profitability.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ height: "570px" }}>
                <img src="./images/RapidAppDevelopmen.webp" className="card-img-top" alt="..." style={{ height: "230px" }} />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontSize: "22px", marginTop: "10px" }}>Rapid App Development</h5>
                  <p className="card-text" style={{ textAlign: "justify" }}>RAD approaches emphasized developing prototypes as well as or instead of rigorous design specifications. Prototypes had several advantages over traditional specifications like Risk reduction, Users are better at using and reacting than at creating specifications, Prototypes can be usable and can evolve into the completed product.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ height: "570px" }}>
                <img src="./images/DevOps.jpg" className="card-img-top" alt="..." style={{ height: "230px" }} />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontSize: "22px", marginTop: "10px" }}>DevOps </h5>
                  <p className="card-text" style={{ textAlign: "justify" }}>DevOps focusses at associating the gap between the operations & development teams, and quicker delivery of applications. Our DevOps services ensure on-boarding of applications by facilitating continuous integration and development and automating end-to-end delivery pipeline across leading platforms. DevOps develops and deploys software in a collaborative manner.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default DataProduct
