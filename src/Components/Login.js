import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login()
{
    const navigate = useNavigate();
    function handleClick(){
        navigate("/")
    }

    return(
        <div className='container'>
            Login
            <div className='container'>
                <input type='text'placeholder='username' className='form-control'/> 
            </div>

            <div className='container'>
                <input type='password' placeholder='password' className='form-control'/>
            </div>

            <div className='container'>
                <button onClick={handleClick} className='btn btn-primary'>Login</button>
            </div>
        </div>
    )

}