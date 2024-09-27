import React, { useState } from 'react'
import logo from '../assets/logo.png'
import '../App.css'
import { login,signup } from '../Firebase'
import loading_gif from '../assets/netflix_spinner.gif'

const Login:React.FC = () => {

    const [signState, setSignState] = useState("Sign In")
    const [email,setEmail] = useState('')
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [loading,setLoading] = useState(false)

    const user_auth = async (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setLoading(true)
        e.preventDefault()
        if(signState==='Sign In'){
            await login(email,password)
        }else{
            await signup(name,email,password)
        }
        setLoading(false)
    }

  return (
    loading?<div className='w-full h-[100vh] flex items-center justify-center'>
        <img className='w-[60px]' src={loading_gif} alt="" />
    </div>:
    <div className='login '>
        <img className='w-[150px]' src={logo} alt="" />
        <div 
          className='login-form w-full max-w-[450px] bg-black/75 rounded p-16 m-auto'
        >
            <h1 className='text-4xl font-semibold mb-7'>{signState}</h1>
            <form action="">
                {signState==='Sign Up'?<input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Your name' />:<></>}
                <input  value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Your Email' />
                <input 
                  value={password} onChange={(e) => setPassword(e.target.value)}
                type="password" placeholder='Password' />
                <button
                   onClick={(e) => user_auth(e)}
                   type='submit'
                   className='w-full rounded outline-none p-4 bg-[#e50914] text-white text-lg font-semibold mt-5 cursor-pointer' 
                >{signState}</button>
                <div className='form-help flex items-center justify-between text-[#b3b3b3] text-sm'>
                    <div className='remember flex items-center gap-1'>
                        <input className='w-4 h-4 ' type="checkbox" />
                        <label htmlFor="">Rememeber Me</label>
                    </div>
                    <p>Need Help</p>
                </div>
            </form>
            <div className='switch mt-10 text-[#737373]'>
                {signState==="Sign Up"?<p>Already have account? <span onClick={() => setSignState('Sign In')} >Sign In Now</span></p>:
                <p>New to NetFlix? <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span></p>}
                
            </div>
        </div>
    </div>
  )
}

export default Login