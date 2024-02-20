import React, { useState } from 'react'

const Registration = () => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    })

    const handleInput = (e) => {
        // console.log(e.target.value);
        let name = e.target.name;
        let value = e.target.value;
        setUser({
            ...user,
            [name]: value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user)
    }

    return (
        <>
            <section>
                <main>
                    <div className="section-registration">
                        <div className="container grid grid-two-cols">
                            <div className="registration-image">
                                <img src="/images/RegistrationImage.jpg" alt="Registration On Going" width={500} height={500} />
                            </div>
                            <div className="registration-form">
                                <h1 className='main-heading mb-3'>Registration From</h1>
                                <br />
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="username">Username</label>
                                        <input type="text" name='username' placeholder='Enter your name here' id='username' required autoComplete='off' value={user.username} onChange={handleInput} />
                                    </div>
                                    <div>
                                        <label htmlFor="email">Email</label>
                                        <input type="email" name='email' placeholder='Enter your email here' id='email' required autoComplete='off' value={user.email} onChange={handleInput} />
                                    </div>
                                    <div>
                                        <label htmlFor="phone">Mobile no.</label>
                                        <input type="number" name='phone' placeholder='Enter your phone here' id='phone' required autoComplete='off' value={user.phone} onChange={handleInput} />
                                    </div>
                                    <div>
                                        <label htmlFor="password">Password</label>
                                        <input type="password" name='password' placeholder='Enter your password here' id='password' required autoComplete='off' value={user.password} onChange={handleInput} />
                                    </div>
                                    <br />
                                    <button type='submit' className='btnn btnn-submit'>Register Here</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>



        </>

    )
}

export default Registration
