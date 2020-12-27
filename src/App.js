import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './Header.js';
import Home from './Home'
import Checkout from './Checkout'
import Login from './Login';
import {auth,db} from './firebase';
import {useStateProvider} from './StateProvider';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Payment from './Payment';
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import Orders from './Orders'



const promise = loadStripe('pk_test_51HxtOTEi5XEK01ul680BWd1x50lIaozHdqpRIZnsJMt1oO8Q6IqVpuveJczNicu8Kc9G4XVceKoNofaiIf0qfguE005kQRhLFZ');


//key pk_test_51HxtOTEi5XEK01ul680BWd1x50lIaozHdqpRIZnsJMt1oO8Q6IqVpuveJczNicu8Kc9G4XVceKoNofaiIf0qfguE005kQRhLFZ
const App = ()=>{
  const [{basket},dispatch] = useStateProvider();
  useEffect(()=>{
  auth.onAuthStateChanged(authUser=>{
    console.log('THE USER IS >> ',authUser)

    if(authUser)
    {
      //the user just logged in or the user was logged in
   dispatch({type:'SET_USER',user: authUser})
    }
    else{
      //the user is logged out 
      dispatch({type:'SET_USER',user: null})
    }
  })
  },[])
 
console.log(basket)
  return(
    //BEM convention 
    <BrowserRouter>
<div className="app">
  
  <Switch>
    <Route exact path="/">
    <Header/>
<Home/>
     </Route> 
     <Route exact path="/checkout">
     <Header/>
<Checkout/>
     </Route>
     <Route exact path="/login">
<Login/>
     </Route>
     <Route exact path="/payment">
<Elements stripe={promise}>
<Payment/>
  </Elements>       
     </Route>
  {/* <Route exact path="/" component={Home} />
  <Route exact path="/checkout" component={Checkout} />
  <Route exact path="/login" component={Login}/> */}
  
  <Route exact path="/orders">
    <Header/>
<Orders/>
     </Route>

  </Switch>
  </div>
  </BrowserRouter>
  )
}

export default App;