import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import LoginData from './Context/LoginData'


const Login = () => {
    const {password,email,setEmail,setPassword,handlelogin} = useContext(LoginData)
  return (
    < div className='login'>
        <h2>Login</h2>
        <form onSubmit={handlelogin}>
            <label htmlFor='login Id'>Login ID</label>
            <input 
                type = "text"
                placeholder='Login Id'
                required
                onChange={(e)=> setEmail(e.target.value)}
                value={email}
            /><br/>
            <label htmlFor='password'>Password</label>
            <input 
                type = "Password"
                placeholder='Password'
                required
                onChange={(e)=> setPassword(e.target.value)}
                value={password}
            />
            <br/>
            <button type="submit">
                Login
            </button>
            <p> Don't have Account ?? <Link to ='register'><span>Click for Register</span></Link></p>
        </form> 
    </div>
  )
}

export default Login
