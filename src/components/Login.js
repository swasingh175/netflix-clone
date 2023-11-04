import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignInForm, setIsSignForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignForm(!isSignInForm);
    }

  return (
      <div>
          <Header />
          <div className='absolute'>
            <img
                src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
                alt="netflix-logo" 
                />
          </div>
          <form className='p-12 bg-black absolute w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-90 rounded-md'>
              <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
              {!isSignInForm &&
                  <input
                    type="text"
                    placeholder='Full Name'
                    className='p-4 my-4 w-full bg-gray-700 rounded-md' 
                  />
              }
              <input
                  type="text"
                  placeholder='Email or phone number'
                  className='p-4 my-4 w-full bg-gray-700 rounded-md' 
                />
              <input
                  type="password"
                  placeholder='Password'
                  className='p-4 my-4 w-full bg-gray-700 rounded-md'
              />
              <button className='p-4 my-6 bg-red-700 w-full rounded-md'>{isSignInForm? "Sign In": "Sign Up"}</button>
              <p
                  className='py-4 cursor-pointer'
                  onClick={toggleSignInForm}
              >
                  {isSignInForm
                      ? "New to Netflix? Sign up now."
                      : "Already registered. Sign In now"}
                  
              </p>
          </form>
    </div>
  )
}

export default Login