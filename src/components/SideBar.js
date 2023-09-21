import React from 'react'
import gptlogo from '../assets/chatgpt.svg';
import addBtn from '../assets/add-30.png';
import msgIcon from '../assets/message.svg';
import home from '../assets/home.svg';
import saved from '../assets/bookmark.svg';
import rocket from '../assets/rocket.svg';
import './SideBar.css';

const SideBar = () => {
  return (
    <div className='sidebar'>
        <div className='upperSide'>
            <div className='upperSideTop'>
                <img src={gptlogo} alt='logo' className='logo'/>
                <span className='brand'>LegalEase</span>
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
            <div className='listItems'><img src={home} alt='' className='listitemsImg'/>Home</div>
            <div className='listItems'><img src={saved} alt='' className='listitemsImg'/>Downloads</div>
            <div className='listItems'><img src={rocket} alt='' className='listitemsImg'/>Legal Advice</div>
          </div>
        </div>
    </div>
  )
}

export default SideBar