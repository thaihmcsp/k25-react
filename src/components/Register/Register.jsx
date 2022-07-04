import React from 'react'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './register.css'

function Register(props) {
    const navigate = useNavigate()

    function registerUser () {
        const username = document.querySelector('#username').value
        const password = document.querySelector('#password').value

        if(!username || !password) return alert('vui long nhap du thong tin')

        props.registerNewUser(username, password)
        navigate('/login')
    }

    return (
        <div className='register'>
            <h1>Register</h1>
            <div><input type="text" placeholder='username' id='username'/></div>
            <div><input type="text" placeholder='password' id='password'/></div>
            <button onClick={registerUser}>register</button>

            <p>already have account <Link to='/login'>login now</Link></p>
        </div>
    )
}

export default Register