import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import SignUp from "./components/SignUp"
import Login from "./components/Login"
import PaymentPage from "./components/PaymentPage"

import StripeData from './context/StripeData';
import Home from './components/Home';
function App() {
  return (
    <div style={{"backgroundColor":"#1e4c90","height":"100vh"}}>
    
    <Router><StripeData>
      <Routes>
     <Route exact path='/' element={<SignUp></SignUp>}></Route>
     <Route exact path='/login' element={<Login></Login>}></Route>
     <Route  exact path='/home' element={<Home></Home>}></Route>
     <Route exact path='/paymentpage' element={<PaymentPage></PaymentPage>}></Route>

     </Routes></StripeData></Router>
    </div>
  );
}

export default App;
