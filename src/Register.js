import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import LoginData from './Context/LoginData'

const Register = () => {
  const {name,password,setName,setPassword,confrompassword,setConformpassword,email,setEmail,handleRegister} = useContext(LoginData)
  return (
    <div className='register'>
        <h2>Registraion form</h2>
        <form onSubmit={handleRegister}>
            <label htmlFor='Name'>Name : </label><br/>
            <input
              type ="text"
              required
              onChange={(e)=> setName(e.target.value)}
              value={name}
            /><br/> <br/>
            <label htmlFor='email'>Email : </label><br/>
            <input
              type ="email"
              required
              onChange={(e)=> setEmail(e.target.value)}
              value={email}
            /><br/> <br/>
            <label htmlFor='password'>Password : </label><br/>
            <input
              type ="password"
              required
              onChange={(e)=> setPassword(e.target.value)}
              value={password}
            /><br/> <br/>
            <label htmlFor='confrompassword'>Conform Password : </label><br/>
            <input
            type ="password"
            required
            onChange={(e)=> setConformpassword(e.target.value)}
            value={confrompassword}
            /><br/> <br/>

            <button type= "submit" disabled ={(confrompassword === password ) ? false : true}>
                Register
            </button>
            

            <p>Already have an Account ?? <Link to ={'/'}><span>Login Here..</span></Link></p>

        </form>
      
    </div>
  )
}

export default Register
