import React, { useEffect, useState } from 'react'

const ContentData = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % 3;
      setActiveIndex(nextIndex);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [activeIndex]);
  return (
    <>
      <main>
        <section className='section-hero'>
          <div className='container grid grid-two-cols' style={{ marginBottom: "-64px" }}>
            <div className="hero-image">
              <img src="/images/HomeImage.png" alt="This is Home page" width={500} height={500} />
            </div>
            <div className="hero-content">
              <h1 style={{ marginTop: "-111px" }}>Content & Data Transformation</h1>
              <h2 style={{ fontSize: "20px", marginTop: "17px" }}>reStructure, reWrite and reThink</h2>
              <p style={{ textAlign: "justify" }}>We provide corporate branding, technical content creation, marketing collaterals, indexing, language enhancement, and content marketing. Ensure effective data conversion, ensure data intelligibility across databases and applications with us.</p>
            </div>
          </div>

          <div className='container grid grid-two-cols'>
            <div className="hero-content" style={{ textAlign: "justify" }}>
              <p>
                We help our clients organizing the shape, structure, and application of content. For example, our data transformation services can help automate your basic important data tasks. Ensure manageable and usable data, customize data-related tasks, and take advantage of our expertise, tool-knowledge and make the handling of your day-to-day operations easier.</p>

              <p>Our key services include corporate branding, technical content creation, marketing collaterals, indexing, language enhancement, and content marketing.</p>

              <p>We restructure, rethink and rewrite content to create high-value, high-utility, connected and enriching experiences for your audience. We understand that consistent and rich data makes a huge difference to your marketplace advantage. Similarly, polished, updated, cleansed content has the power to reach out to the intended audience.</p>
            </div>
            <div className="hero-image">
              <img src="/images/HomeImage.png" alt="This is Home page" width={500} height={500} />
            </div>
          </div>
          <div className='container' style={{ justifyContent: "center" }}>
            <h1 style={{ fontSize: "30px", }}>Services We Provide</h1>
          </div>
          <div className='container'>


            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
              {/* Carousel Indicators */}
              <div className="carousel-indicators" style={{ color: "black" }}>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className={activeIndex === 0 ? "active" : ""}
                  aria-current={activeIndex === 0 ? "true" : "false"}
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  className={activeIndex === 1 ? "active" : ""}
                  aria-current={activeIndex === 1 ? "true" : "false"}
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  className={activeIndex === 2 ? "active" : ""}
                  aria-current={activeIndex === 2 ? "true" : "false"}
                  aria-label="Slide 3"
                ></button>
              </div>

              {/* Carousel Items */}
              <div className="carousel-inner">
                <div className={`carousel-item ${activeIndex === 0 ? "active" : ""}`}>
                  <img src="./images/HomeImage.png" className="d-block w-100" alt="First slide" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5 style={{ color: "black" }}>First slide label</h5>
                    <p style={{ color: "black" }}>Some representative placeholder content for the first slide.</p>
                  </div>
                </div>
                <div className={`carousel-item ${activeIndex === 1 ? "active" : ""}`}>
                  <img src="./images/DataScience.png" className="d-block w-100" alt="Second slide" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                  </div>
                </div>
                <div className={`carousel-item ${activeIndex === 2 ? "active" : ""}`}>
                  <img src="./images/blogs.jpg" className="d-block w-100" alt="Third slide" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                  </div>
                </div>
              </div>

              {/* Carousel Controls */}
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

        </section >
      </main >
    </>
  )
}

export default ContentData
