import React from 'react'
const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>We are the world best IT company</p>
              <h1 style={{fontSize:"45px"}}>Welcome to Learning Katta</h1>
              <p style={{ textAlign: "justify" }}>Learning katta is a technology services and consulting organization specializing in IT Services, Software Development, Outsourced Product Development and Test engineering services. Headquartered in Aurangabad, India, Learning Katta combines a passion for development, QA and testing, industry and process, client satisfaction and helping client to reach their business goals.

              </p>
              <div className="btnn btnn-group">
                <a href="/contact">
                  <button className='btnn'>Connect Now</button>
                </a>
                <a href="/services">
                  <button className='btnn secondary-btnn'>Services</button>
                </a>
              </div>
            </div>
            <div className="hero-image">
              <img src="/images/HomeImage.png" alt="This is Home page" width={500} height={500} />
            </div>
          </div>
        </section>
      </main>

      <section className="section-analytics">
        <div className='container grid grid-four-cols'>
          <div className="div1">
            <h2>50+</h2>
            <p>Clients</p>
          </div>
          <div className="div1">
            <h2>10,000+</h2>  
            <p>Happy Customer</p>
          </div>
          <div className="div1">
            <h2>500+</h2>
            <p>Well Known Developer</p>
          </div>
          <div className="div1">
            <h2>24/7</h2>
            <p>Service</p>
          </div>
        </div>
      </section>

      {/* <section>
        <div className="container" style={{justifyContent:"center", }}>
          <div className='section-title' style={{justifyContent:"center", display:"flex", textAlign:"center"}}>
            <a> Our Technologies</a>
          </div>
          <div className='container count'>
            <div className="row">
              <div className="column col">
                <img src="./images/Angular.png" alt="" />
              </div>
            </div>

          </div>
        </div>
      </section> */}


      <section className="section-hero">
        <div className="container grid grid-two-cols">
          <div className="hero-image">
            <img src="/images/LastImage.webp" alt="This is Home page" width={500} height={500} />
          </div>
          <div className="hero-content">
            <p>We are here to help your</p>
            <h1>Get started today</h1>
            <p style={{ textAlign: "justify" }}>To create canon with diverse IT Services to transoceanic by innovating possibilities through vigorous minds for helping client to reach their business goals.
            </p>
            <div className="btnn btnn-group">
              <a href="/contact">
                <button className='btnn'>Connect Now</button>
              </a>
              <a href="/services">
                <button className='btnn secondary-btnn'>Services</button>
              </a>
            </div>
          </div>

        </div>
      </section>


    </>
  )
}

export default Home
