import React, { useContext, useEffect } from 'react'
import dataContext from '../context/dataContext';
import './PaymentPage.css'
const PaymentPage = () => {
useEffect(()=>{
        fetchplan();
    },[]);
    const context = useContext(dataContext);
    const {plans,fetchplan} = context;
    
  return ( 
    
    <div >
      {
        plans.map((plan)=>{
          return <div className='mainboxx'>
            <span style={{fontSize:20}}>Current Plan Details</span>
   <button className='cancelb'>Cancel</button>
   <p>Plan Type :{plan.plantype}</p>
   <p>Hardware: {plan.hardware}</p>
   <h3>Price:{plan.price}/{plan.time}</h3>
   
    <button className='buttonp'>
        Change Plan
        </button>
        
        <p>Your plan has started on {plan.date} and will auto renew on {}</p>
            </div>
        })
   }

</div>

    
  )
}

export default PaymentPage
