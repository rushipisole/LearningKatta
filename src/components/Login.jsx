import React, { useState } from 'react'

const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const handleInput=(e)=>{
        let name = e.target.name;
        let value = e.target.value;

        setUser ({
            ...user,
            [name] : value,
        })
    }

    const handleSubmit=(e)=>{
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
                                <img src="/images/LoginImage.jpg" alt="Fill the login form   " width={500} height={500} />
                            </div>
                            <div className="registration-form">
                                <h1 className='main-heading mb-3'>Login From</h1>
                                <br />
                                <form onSubmit={handleSubmit}>

                                    <div>
                                        <label htmlFor="email">Email</label>
                                        <input type="email" name='email' placeholder='Enter your email here' id='email' required autoComplete='off' value={user.email} onChange={handleInput} />
                                    </div>

                                    <div>
                                        <label htmlFor="password">Password</label>
                                        <input type="password" name='password' placeholder='Enter your password here' id='password' required autoComplete='off' value={user.password} onChange={handleInput} />
                                    </div>
                                    <br />
                                    <button type='submit' className='btn btn-submit'>Register Here</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>

        </>
    )
}

export default Login
