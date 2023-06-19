import { createContext } from "react";
import { useState, } from 'react';
import api from "../api/link"
import { useNavigate } from "react-router-dom";

const LoginData = createContext({})

export const LoginDataProvider =({children})=>{
    const[name,setName]=useState('')
    const[password,setPassword]=useState('')
    const[confrompassword,setConformpassword] = useState('')
    const[email,setEmail] =useState('')
    const navigate = useNavigate()
  
  
    //Register button function
  
    const handleRegister= async(e)=>{
      e.preventDefault()
      const registerdata = {name,password,email}
      try{
        const response = await api.post("api/auth/register",registerdata)
        console.log(response.data)
        navigate('/');
        setName('')
        setPassword('')
        setEmail('')
        setConformpassword('')
      }catch(err){
        alert(err.message)
      }
    }
  
    //login button function
  
    const handlelogin= async(e)=>{
      e.preventDefault()
      const logindata ={email,password}
      try{
        const response = await api.post("api/auth/login",logindata)
        localStorage.setItem("token",response.data)
        alert("Login Successfull")
        navigate('home');
        setEmail('')
        setPassword('')
      }catch(err){
        alert(err.message)
      }
    }

    return(
        <LoginData.Provider value={{
            password,email,setEmail,setPassword,handlelogin,name,setName,confrompassword,setConformpassword,handleRegister,
            
        }}>
            {children}
        </LoginData.Provider>
    )
}

export default LoginData