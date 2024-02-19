import React, { useState } from 'react'

const Contact = () => {

  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: ""

  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value


    setContact({
      ...contact,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contact)
  }

  return (
    <>
      <section className="section-contact">
        <div className="contact-contain container">
          <div className="main-heading">
            <h1>Contact Us</h1>
          </div>
        </div>

        <div className='container grid grid-two-cols'>
          <div className="contact-img">
            <img src="/images/LastImage.webp" alt="" />
          </div>

          <section className='section-form'>
            <form onClick={handleSubmit}>
              <div>
                <label htmlFor="username">Username</label>
                <input type="text" name='username' id='username' value={Contact.username} onChange={handleInput} autoComplete='off' required />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" name='email' id='email' value={Contact.email} onChange={handleInput} autoComplete='off' required />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" value={Contact.message} onChange={handleInput} autoComplete='off' required cols="30" rows="9"></textarea>
              </div>
            </form>
            <button type='submit'>
              Submit
            </button>
          </section>
        </div>
        <section className='mb-3'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.8364432227736!2d75.36593937522612!3d19.889127081490173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba3411c832a53%3A0xf3747f16a77d75e6!2sMagicflare%20Software%20Services%20-%20Aurangabad!5e0!3m2!1sen!2sin!4v1708327854153!5m2!1sen!2sin"

            width="100%" height={350}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          >
          </iframe>
        </section>




      </section>

    </>
  )
}

export default Contact
