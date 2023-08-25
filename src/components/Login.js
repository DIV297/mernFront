import React,{useContext} from 'react'
import {Link} from "react-router-dom";
import dataContext from "../context/dataContext";
import './Login.css';
const Login = () => {
    const context = useContext(dataContext);
    const {loginUser,credentials,setCredentials} = context;
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const clickbutoon = () => {
        console.log('clicked button');
        loginUser();
    }
  return (
    <div className='fullbody'>
    

<form onSubmit={loginUser} className="login">
  <h2 className='' style={{'margin':'2vh'}}>Login to your account</h2>
<div className="form-outline mb-4">
<input type="email" name='email' id='email' className="form-control" onChange={onChange}/>
<label className="form-label" htmlFor="email" >Email address</label>
</div>
<div className="form-outline mb-4">
<input type="password" name='password' id='password' className="form-control" onChange={onChange}/>
<label className="form-label" htmlFor="password" >Password</label>
</div>



<button type="button" className="button"  onClick={clickbutoon}>Login</button>
<p className="last">New to MyApp?
<Link  aria-current="page" to="/">SignUp</Link>
</p>
</form>
  </div>
  )
}

export default Login
