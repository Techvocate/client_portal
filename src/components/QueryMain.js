import React from 'react';
import './QueryMain.css';
import sendBtn from '../assets/send.svg';
import userIcon from '../assets/user-icon.png';
import gptImgLogo from '../assets/chatgptLogo.svg';

function QueryMain() {
  return (
    <div className='main'>
      <div className='chats'>
        <div className='chat'>
          <img src={userIcon} alt=''/>
          <p className='txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className='chat'>
          <img src={gptImgLogo} alt=''/>
          <p className='txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
      <div className='chatFooter'>
        <div className='inp'>
          <input placeholder='Type Your Query..'/>
          <button className='send'>
            <img src={sendBtn} alt='send'/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default QueryMain