import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useEffect,useContext} from 'react';
import {UserContext} from "../UserContext";

const Navbar = () => {
  const {setUserInfo,userInfo} = useContext(UserContext);
  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;
  return (
    <nav className="navbar1">
      <div className="navbar-container">
        <div className='navbar-title'>
            <p id='title'>LegalEase</p>
        </div>
        <ul className="navbar-links">
          <Link to={'/'}><li className="navbar-link">Home</li></Link>
          <Link to={'/legaladvice'}><li className="navbar-link">Legal Advice</li></Link>
          <li className="navbar-link">About</li>
          {/* <li className="navbar-link">UseCases</li> */}
        </ul>
        {/* {!username && <div className="navbar-auth">
          <Link><button className="auth-button">Login</button></Link>
          <Link to={'/signup'}><button className="auth-button">Signup</button></Link>
        </div>}
        {username && <div className="navbar-auth">
          <Link to={'/profile'}><button className="auth-button">{username}</button></Link>
          <button className="auth-button" onClick={logout}>Logout</button>
        </div>} */}
        {username && (
          <div className='navbar-auth'>
              <div>{username}</div>
              <div><Link className='auth-button' onClick={logout}>Logout</Link></div>
          </div>
        )}
        {!username && (
          <div className='navbar-auth'>
            <div eventKey={2}><Link className='auth-button' to={'/login'}>Login</Link></div>
            <div eventKey={2}><Link className='auth-button' to={'/signup'}>Signup</Link></div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
