import React,{useContext} from 'react'
import {Link} from "react-router-dom";
import dataContext from "../context/dataContext";
import './Login.css'

const SignUp = () => {
    const context = useContext(dataContext);
    const {AddUser,credentials,setCredentials} = context;
    const clickbutoon = () => {
        console.log('clicked button');
        AddUser();
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
  return (
    <div>
      

<form onSubmit={AddUser} className="login" style={{
  
}}>
  <h2 className='' style={{'margin':'2vh'}}>Create Account</h2>
<div className="form-outline mb-4">
<input type="text" name='name' id='name' className="form-control" onChange={onChange}/>
<label className="form-label" htmlFor="name" >Username</label>
</div>
<div className="form-outline mb-4">
<input type="email" name='email' id='email' className="form-control" onChange={onChange}/>
<label className="form-label" htmlFor="email" >Email address</label>
</div>
<div className="form-outline mb-4">
<input type="password" name='password' id='password' className="form-control" onChange={onChange}/>
<label className="form-label" htmlFor="password" >Password</label>
</div>
<button type="button" className="button"   onClick={clickbutoon}>SignUp</button>
<p className='last'>Already have an account?
<Link className="" aria-current="page" to="/login">Login</Link>

</p>
</form>
    </div>
  )
}

export default SignUp
