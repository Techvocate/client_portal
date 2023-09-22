import React from 'react';
import './QueryMain.css';
import sendBtn from '../assets/send.svg';
import userIcon from '../assets/user.jpg';
import gptImgLogo from '../assets/integrity.png';

function QueryMain() {
  return (
    <div className='main'>
      <div className='chats'>
        <div className='chat1'>
          <img className='chatImg' src={userIcon} alt=''/>
          <p className='txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className='chat1 bot'>
          <img className="chatImg" src={gptImgLogo} alt=''/>
          <p className='txt'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab dolorum optio voluptate a error, ut libero cumque saepe velit, quis nam asperiores dolor? Minima quos cupiditate rerum obcaecati beatae quibusdam nobis. Mollitia, autem. Dicta laudantium nisi aliquam distinctio dolor vel cupiditate culpa animi quaerat, maiores deserunt. Exercitationem assumenda nobis, optio veniam, dolor neque ratione suscipit placeat ullam ipsum, quas modi. Enim sint earum dignissimos excepturi, libero fugiat labore neque, harum corporis cum fugit. Quia, vel corporis est laboriosam ipsam ducimus. Natus repudiandae dolorum harum dolore doloremque temporibus aliquam nostrum accusantium laboriosam numquam, impedit amet corporis consequatur vel labore vero minus.</p>
        </div>
        <div className='chat1'>
          <img className='chatImg' src={userIcon} alt=''/>
          <p className='txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className='chat1 bot'>
          <img className="chatImg" src={gptImgLogo} alt=''/>
          <p className='txt'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab dolorum optio voluptate a error, ut libero cumque saepe velit, quis nam asperiores dolor? Minima quos cupiditate rerum obcaecati beatae quibusdam nobis. Mollitia, autem. Dicta laudantium nisi aliquam distinctio dolor vel cupiditate culpa animi quaerat, maiores deserunt. Exercitationem assumenda nobis, optio veniam, dolor neque ratione suscipit placeat ullam ipsum, quas modi. Enim sint earum dignissimos excepturi, libero fugiat labore neque, harum corporis cum fugit. Quia, vel corporis est laboriosam ipsam ducimus. Natus repudiandae dolorum harum dolore doloremque temporibus aliquam nostrum accusantium laboriosam numquam, impedit amet corporis consequatur vel labore vero minus.</p>
        </div>
      </div>
      <div className='chatFooter'>
        <div className='inp'>
          <input placeholder='Type Your Query..'/>
          <button className='send'>
            <img src={sendBtn} alt='send'/>
          </button>
        </div>
        <p style={{color:"black"}}>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
      </div>
    </div>
  )
}

export default QueryMain