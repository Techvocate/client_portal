import {useContext, useState} from "react";
import {Navigate,Link} from "react-router-dom";
import {UserContext} from "../../../src/UserContext.js";
import './Login.css'

export default function LoginPage() {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [redirect,setRedirect] = useState(false);
  const {setUserInfo} = useContext(UserContext);
  async function login(ev) {
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type':'application/json'},
      credentials: 'include',
    });
    if (response.ok) {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
        setRedirect(true);
      });
    } else {
      alert('wrong credentials');
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }
    return(
        <div class="login-container">
            <div class="form-container">
                <h2>Login</h2>
                <form onSubmit={login}>
                    <input type="text" 
                    placeholder="Username" 
                    value={username}
                    onChange={ev =>setUsername(ev.target.value)}/>
                    <input type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={ev =>setPassword(ev.target.value)}/>
                    <button className='but1' type="submit">Login</button>
                </form>
                <p class="signup-link">Don't have an account? <Link to={'/signup'}>Signup</Link></p>
            </div>
        </div>

    );
}