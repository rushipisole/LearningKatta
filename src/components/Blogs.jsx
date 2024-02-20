import React from 'react'

const Blog = () => {
  return (
    <main>
      <section className='section-hero'>
        <div className='container grid grid-two-cols'>
          <div className="hero-content">  
            <h1>Blogs</h1>
          </div>
          <div className="hero-image">
            <img src="/images/HomeImage.png" alt="This is Home page" width={500} height={500} />
          </div>
        </div>

      </section>
    </main>
  )
}

export default Blog
