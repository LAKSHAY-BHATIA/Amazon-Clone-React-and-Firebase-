import React,{useState} from 'react'
import "./Login.css";
import {Link,useHistory} from 'react-router-dom';
import {auth,db} from './firebase';
function Login() {
    const history =  useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword]=useState('')
const signIn = (e)=>{

    e.preventDefault();
    // some fancy firebase stuff 
 auth.signInWithEmailAndPassword(email,password)
 .then(auth=>{
     if(auth)
     {
         history.push('/')
     }
 }).catch(err=>{
     alert(err.message)
 })

}


const register = (e) =>{
e.preventDefault();
//do some fancy firebase register
auth.createUserWithEmailAndPassword(email,password)
.then((auth)=>{
    console.log(auth);
    if(auth)
    {
        history.push('/');
    }
})
.catch(err=>{
    alert(err);
})

}


    return (
        <div className="login">
            <Link>
            <img 
            className="login__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/175px-Amazon_logo.svg.png" alt="logo"/>
      </Link>
      <div className="login__container">
          <h1>Sign-in</h1>
          <form>
            <h5>Email</h5>
            <input type="text"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <h5>Password</h5>
            <input type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
<button 
type="submit"
onClick={(e)=>signIn(e)}
className="login__signinButton">Sign In</button>
          </form>    
          <p>
          By continuing, you agree to FAKE Amazon's Conditions of Use and Privacy Notice.  
          </p>    
          <button
          onClick = {(e)=>{
               register(e)
          }}
          className="login__registerButton">Create Amazon account</button>

          </div>
        </div>
    )
}

export default Login
