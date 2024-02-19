import React from 'react'
const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>We are the world best IT company</p>
              <h1>Welcome to MagicFlare Software Services</h1>
              <p>Microsoft Corporation is an American multinational technology corporation headquartered in Redmond, Washington. Microsoft's best-known software products are the Windows line of operating systems, the Microsoft 365 suite of productivity applications</p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className='btn'>Connect Now</button>
                </a>
                <a href="/services">
                  <button className='btn secondary-btn'>Services</button>
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

      <section className="section-hero">
        <div className="container grid grid-two-cols">
          <div className="hero-image">
            <img src="/images/LastImage.webp" alt="This is Home page" width={500} height={500} />
          </div>
          <div className="hero-content">
            <p>We are here to help your</p>
            <h1>Get started today</h1>
            <p>Ready to take first step towards a more efficient secure IT infrastructure. Contact us today. Some of the famous slogans given byfreedom fighters are "Jai Hind", "Vande Mataram", "Swaraj is my birthright, and I shall have it".
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className='btn'>Connect Now</button>
              </a>
              <a href="/services">
                <button className='btn secondary-btn'>Services</button>
              </a>
            </div>
          </div>

        </div>
      </section>

     
    </>
  )
}

export default Home
