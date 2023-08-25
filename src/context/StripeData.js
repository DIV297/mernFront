import React,{useState} from 'react'
import dataContext from "./dataContext";
import Alert from '../components/Alert';
import { useNavigate } from 'react-router-dom';

    const StripeData = (props) => {
        let history =useNavigate();
const [credentials, setCredentials] = useState({ email: '', password: '' })

const loginUser = async () => {
    // login(user.email,user.password);
    try{
    const response = await fetch("https://mernback-s8gc.onrender.com/auth/user/loginuser", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: credentials.email, password: credentials.password })

    });
    const json = await response.json();
    console.log(json)
    if (json.success) {
        localStorage.setItem('token', json.token);
        // showAlert("success", "successfully login")
        showAlert("success", "successfully login", "block")
        history("../home");
    }
    else if(json.success===false) {
        showAlert("danger", "Invalid credentials", "block")
       
    }
    else{
      showAlert("danger","Network Error.Please check connection","block");
    }
  }
  catch(err){
    showAlert("danger","Network Error.Please check connection","block");
  }
} 

const AddUser = async () => {
  // login(user.email,user.password);
  try{
  const {name,email,password}=credentials;
  const response = await fetch("https://mernback-s8gc.onrender.com/auth/user/adduser", {
    
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({name,email,password })

  });
  const json = await response.json();
      console.log(json)
      if (json.answer===0) {
          localStorage.setItem('token', json.authtoken);
          showAlert("success", "successfully account created",'block')
          history("../", { replace: true });
          if(json.success===true)
          showAlert("success", "successfully account created. You can now login",'block')
      }
      else if(json.answer===2) {
          showAlert("danger", "User already exist.Try to login", "block")
      }
      else if(json.answer===1) {
        showAlert("danger", "Invalid Crudentials - Fill details correctly.Your detalis should have atleast 3 characters", "block")
      }
      else{
        showAlert("danger","Network Error.Please check connection","block");
      }
  }
  catch(err){
    showAlert("danger","Network Error.Please check connection","block");
  }
  }
  const addPlan = async (plantype, hardware,price,time,date) => {
    try{
      const response = await fetch("https://mernback-s8gc.onrender.com/auth/stripe/addplan", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify({ plantype, hardware,price,time,date })
      });
      const json = await response.json();
      // setCenters(centers.concat(json))
     
      if(json.success==0)
    showAlert("danger",'Already Subscribed with plan','block')
    else 
    showAlert("success",'Subscription Done','block')
    }
    catch(err){

    }
    }
    

const [plans,setPlans] = useState([]);
const fetchplan = async () => {
  const response = await fetch("https://mernback-s8gc.onrender.com/auth/stripe/fetchplan", {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'auth-token': localStorage.getItem('token')
    },

  });
  const json = await response.json();
  console.log(json);
  setPlans(json);
  console.log(plans);
}
  const [message, setMessage] = useState('');
  const [type, setType] = useState(' ');
  const [display,setDisplay]=useState('none');

  const showAlert = (type, message,display) => {

    setMessage(message);
    setType(type)
    setDisplay(display)
    setTimeout(() => {
      setMessage(' ')
    setType(' ')
    setDisplay('none')
    },[2000])
    
  }
      return (
        <>
        <Alert message={message} type={type} display={display}/>
          <dataContext.Provider value={{loginUser,AddUser,addPlan,credentials,setCredentials,plans,fetchplan}}>
            {props.children}
          </dataContext.Provider>
        </>
      )
    }
    
    export default StripeData
    