import React from 'react'
import "./login.css"
function login() {
  return (
    <>
    <div className='login-container'>
    <div className="box">
    <div className="admin-header-logo">

    <h2>Admin Login</h2>
    </div>

    {/* login form */}
        <div className="login-form-container">
            <form action="">
            <div className="userSection">
            <i class="bi bi-person"></i>
            <input type="text" placeholder='Enter your username' id='user' required/></div>

            <div className="passSection"><i class="bi bi-lock"></i>
                <input type="password" placeholder='Enter your password' id='password' required /></div>
                <button type='submit'>Login</button>
            </form>
        </div>
        </div>
        </div>

    </>
  )
}

export default login;
