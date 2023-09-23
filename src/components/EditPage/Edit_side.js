import React from 'react'
import gptlogo from '../../assets/integrity.png';
import addBtn from '../../assets/add-30.png';
import msgIcon from '../../assets/chat.png';
import home from '../../assets/home.png';
import saved from '../../assets/bookmark.png';
import rocket from '../../assets/rocket.png';
import './Edit_side.css';
import { Link } from 'react-router-dom';

const EditSide = () => {
  return (
    <div className='sidebar1'>
        <div className='upperSide'>
            <div className='upperSideTop'>
                <img src={gptlogo} alt='logo' className='logo'/>
                <span className='brand'>LegalEase</span>
            </div>
            <button className='midBtn'><img src={addBtn} alt='' className='addBtn'/>New Chat</button>
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

export default EditSide;