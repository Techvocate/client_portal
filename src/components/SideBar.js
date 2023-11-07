import React from 'react'
import gptlogo from '../assets/integrity.png';
import addBtn from '../assets/add-30.png';
import msgIcon from '../assets/chat.png';
import home from '../assets/home.png';
import saved from '../assets/bookmark.png';
import rocket from '../assets/rocket.png';
import './SideBar.css';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className='sidebar1'>
        <div className='upperSide'>
            <div className='upperSideTop'>
                <img src={gptlogo} alt='logo' className='logo'/>
                <Link to={'/'}><span className='brand'>LegalEase</span></Link>
            </div>
            <button className='midBtn'><img src={addBtn} alt='' className='addBtn'/>New Chat</button>
            <div className='upperSideBottom'>
                <button className='query'><img src={msgIcon} alt='Query'/>What is LegalEase</button>
                <button className='query'><img src={msgIcon} alt='Query'/>What is LegalEase</button>
                <button className='query'><img src={msgIcon} alt='Query'/>What is LegalEase</button>
                <button className='query'><img src={msgIcon} alt='Query'/>What is LegalEase</button>
            </div>
        </div>
        <div className='lowerside'>
          <div className='lowerSide'>
            <Link to="/" >
            <div className='listItems'><img src={home} alt='' className='listitemsImg'/>Home</div>
            </Link>
            <div className='listItems'><img src={saved} alt='' className='listitemsImg'/>Downloads</div>
            <div className='listItems'><img src={rocket} alt='' className='listitemsImg'/>Legal Advice</div>
          </div>
        </div>
    </div>
  )
}

export default SideBar