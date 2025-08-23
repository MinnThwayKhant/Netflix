import React from 'react'
import logo from '../../assets/logo.png'

export const Login = () => {
  return (
    <div className=''>
      <img src={logo} alt="logo" />
      <div className=''>
        <h1>Sign In</h1>
        <form>
          <input type="text" placeholder='Your Name'/>
          <input type="email" placeholder='Email'/>
          <input type="password" placeholder='Password'/>
          <button>
            Sign In
          </button>
          <div>
            <div>
               <input type="checkbox" />
               <label htmlFor="title">Remember Me</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
