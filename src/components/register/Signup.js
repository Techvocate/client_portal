import { Link } from 'react-router-dom';
import './Signup.css'
import { useState } from 'react';

export default function Signup(){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  async function register(ev) {
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/signup', {
      method: 'POST',
      body: JSON.stringify({username,password}),
      headers: {'Content-Type':'application/json'},
    });
    if (response.status === 200) {
      alert('registration successful');
    } else {
      alert('registration failed');
    }
  }

    return(
        <div class="signup-container">
        <div class="form-container">
          <h2>Sign Up</h2>
          <form  onSubmit={register}> 
            <input type="text"
             placeholder="Username"
             value={username}
             onChange={ev => setUsername(ev.target.value)}/>
            <input type="email" 
            placeholder="Email"/>
            <input type="password"
             placeholder="Password"
             value={password}
             onChange={ev => setPassword(ev.target.value)}/>
            <input type='password' placeholder='Confirm Password'></input>
            <button className='but1' type="submit">Sign Up</button>
          </form>
          <p class="login-link">Already have an account? <Link to={'/login'}>Login</Link></p>
        </div>
      </div>
      
    );
}