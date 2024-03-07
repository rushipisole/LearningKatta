import React from 'react'

const About = () => {
  return (
    <>
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          <div className="hero-content">
            <p>Welcome to Learning Katta</p>
            <h1>Why you choose us?</h1>
            <p style={{ textAlign: "justify" }} >
            Learning Katta is a technology services and consulting organization specializing in IT Services, Software Development, Outsourced Product Development and Test engineering services. Headquartered in Pune, India.
            </p>
            <p style={{ textAlign: "justify" }}>
            Learning Katta combines a passion for development, QA and testing, industry and process, client satisfaction and helping client to reach their business goals.
            </p>
            <p style={{ textAlign: "justify" }}> 
              Our approach is to combine our understanding of user behavior with a commitment to meeting the business goals of our clients. We are proactive in our service and will alert our customers of any malicious behavior that we find.
            </p>
            <p style={{ textAlign: "justify" }}>
              Our staff is diverse and talented in all aspects of website technology. We love what we do and it shows in the solutions we produce. We strive for excellence in all that we do. We set high personal and company standards, and then consistently try to exceed them.
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
            <img src="/images/LastImage.webp" alt="This is Home page" width={500} height={500} />
          </div>
        </div>
      </section>
      <section className="section-analytics">
        <div className='container grid grid-four-cols'>
          <div className="div1">
            <h2>50+</h2>
            <p>Registered companies</p>
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
    </>
  )
}

export default About
