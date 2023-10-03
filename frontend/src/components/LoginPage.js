import React from 'react'
import { Link } from 'react-router-dom'

//import '../css/App.css';
import './LoginPage.css'

export default function SignInPage() {

    return (
        <div className="text-center2 m-5-auto">
            <h2 className='h22'>Sign in To Learn</h2>
            <form action="/home" className='form1'>
                <p>
                    <label className='label1'>Username or email address</label><br/>
                    <input type="text1" name="first_name" required />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label1">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password1" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer className='footer1'>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}