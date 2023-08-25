import React,{useState,useContext} from 'react'
import { Link } from 'react-router-dom';
import './Home.css'
import axios from 'axios';
import PaymentPage from './PaymentPage';
import { useNavigate } from 'react-router-dom';
import dataContext from "../context/dataContext";

import Stripe from 'react-stripe-checkout';
const Home = () => {
  const context = useContext(dataContext);
const {addPlan} = context;
  const [detailsArr,setDetailsArr] = useState([]);
  let history = useNavigate();
  const handleToken = (totalAmount,token)=>{
    try{
        axios.post("https://mernback-s8gc.onrender.com/auth/stripe/pay",{
            token:token.id,
            amount:totalAmount,
        });
    }catch(error){
        console.log(error);
    }
}
const tokenHandler = (token)=>{


    handleToken(choosenprice,token);
    history("../paymentpage");
    console.log(detailsArr);
    if(choosenprice>=1000)
    addPlan(detailsArr.plantype,detailsArr.hardware,detailsArr.price,'yr');
  else addPlan(detailsArr.plantype,detailsArr.hardware,detailsArr.price,'month');
}
const [mob,setMob] = useState('');
const [bas,setBas] = useState('');
const [stand,setStand] = useState('');
const [prem,setPrem] = useState('');
  const [mobileprice,setMobilePrice] = useState(100);
  const [basicprice,setBasicPrice] = useState(200);
  const [standardprice,setStandardPrice] = useState(500);
  const [premiumprice,setPremiumPrice] = useState(700);
  const [choosenprice,setChoosenprice] = useState(0);
  const chooseforYear=()=>{
    setMobilePrice(1000);
    setBasicPrice(2000);
    setStandardPrice(5000);
    setPremiumPrice(7000);
  }
  const chooseforMonth=()=>{
    setMobilePrice(100);
    setBasicPrice(200);
    setStandardPrice(500);
    setPremiumPrice(700);
  }
  return (
    <div className="mainbox">
      <h3 style={{margin:'0 25%'}}>Choose the right plan for you</h3>
      <table>
        <tr>
          <th className='slidebar'><button className='mainbuttons' onClick={chooseforMonth}>Monthly</button>
            <button className="mainbuttons" onClick={chooseforYear}>Yearly</button></th>
          <th><button className='servicebutton' onClick={()=>{
            setChoosenprice(mobileprice);
            setDetailsArr({plantype:'Mobile',hardware:'Phone+Tablet',price:`₹${mobileprice}`});
            setMob('darktext');
            setBas('');
            setStand('');
            setPrem('');
          }}>Mobile</button></th>
          <th><button className='servicebutton' onClick={()=>{
            setChoosenprice(basicprice);
            setDetailsArr({plantype:'Basic',hardware:'Phone+Tablet+Computer+TV',price:`₹${basicprice}`});
            setMob('');
            setBas('darktext');
            setStand('');
            setPrem('');
          }}>Basic</button></th>
          <th><button className='servicebutton' onClick={()=>{
            setChoosenprice(standardprice);
            setDetailsArr({plantype:'Standard',hardware:'Phone+Tablet+Computer+TV',price:`₹${standardprice}`});
            setMob('');
            setBas('');
            setStand('darktext');
            setPrem('');
          }}>Standard</button></th>
          <th><button className='servicebutton' onClick={()=>{
            setChoosenprice(premiumprice);
            setDetailsArr({plantype:'Premium',hardware:'Phone+Tablet+Computer+TV',price:`₹${premiumprice}`});
            setMob('');
            setBas('');
            setStand('');
            setPrem('darktext');
          }}>Premium</button></th>
        </tr>
        <tr className='btmborder'>
          <td style={{color:'black'}}>Monthly Price</td>
          <td className={mob}><span>&#8377;</span>{mobileprice}</td>
          <td className={bas}><span>&#8377;</span>{basicprice}</td>
          <td className={stand}><span>&#8377;</span>{standardprice}</td>
          <td className={prem}><span>&#8377;</span>{premiumprice}</td>
        </tr>

        <tr className='btmborder'>

          <td style={{color:'black'}}>Video Quality</td>
          <td className={mob}>Good</td>
          <td className={bas}>Good</td>
          <td className={stand}>Better</td>
          <td className={prem}>Best</td>

        </tr>

        <tr className='btmborder'>

          <td style={{color:'black'}}>Resolution</td>
          <td className={mob}>480p</td>
          <td className={bas}>480p</td>
          <td className={stand}>1080p</td>
          <td className={prem}>4K+HDR</td>
        </tr>
        <tr >

          <td  style={{color:'black'}}rowSpan={5}>Devices you can use to watch</td>
          
        </tr>
        <tr >

          <td className={mob}>Phone</td>
          <td className={bas}>Phone</td>
          <td className={stand}>Phone</td>
          <td className={prem}>Phone</td>

        </tr>
        <tr >

          <td className={mob}>Tablet</td>
          <td className={bas}>Tablet</td>
          <td className={stand}>Tablet</td>
          <td className={prem}>Tablet</td>
        </tr>
        <tr >

          <td></td>
          <td className={bas}>Computer</td>
          <td className={stand}>Computer</td>
          <td className={prem}>Computer</td>
        </tr>
        <tr>
          <td></td>
          <td className={bas}>TV</td>
          <td className={stand}>TV</td>
          <td className={prem}>TV</td>
        </tr>
      </table>
      {choosenprice!==0?<div><Stripe className="stripe" stripeKey='pk_test_51NdIEmSJLwKvVE9YTRj4H2kfDJuvmFAsVcVouwdODni0BLtMzmQr7LqhrOgj70bMPAuefw3GlU75wiEJl4WNGpPb00Z1McNx22' token={tokenHandler} ></Stripe></div>:<div></div>}
    </div>

  )
}

export default Home
