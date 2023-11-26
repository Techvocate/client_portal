import React, { useEffect, useState } from 'react';
import './QueryMain.css';
import sendBtn from '../assets/send.svg';
import userIcon from '../assets/user.jpg';
import gptImgLogo from '../assets/integrity2.png';
import keep from '../assets/keep.png';
import Lottie from 'lottie-react';
import lottie1 from '../assets/lottie1.json';
import Response from './register/Response';

function QueryMain() {
  const [inputquery, setInputQuery] = useState('');
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleQueryChange = (e) => {
    setInputQuery(e.target.value);
  };

  const handleQuerySubmit = async () => { 
    setLoading(true);
    setTimeout(async () => {
      if 
      (inputquery.trim() === Response.query) {
        const predefinedResponse = Response.response;
        const newChats = [...chats, { type: 'user', text: inputquery }];
        const responseMessage = { type: 'bot', text:<pre>{predefinedResponse}</pre>};
        newChats.push(responseMessage);
        setChats(newChats);
        setInputQuery('');
      } else {
        const response = await fetch('http://18.236.83.68:5000/input', {
          method: 'POST',
          body: JSON.stringify({query: inputquery}),
          headers: {'Content-Type':'application/json'},
        });
        const data = await response.json();
        const responseText = data.response.response;
  
        if (inputquery.trim() === '') return;
  
        const newChats = [...chats, { type: 'user', text: inputquery }];
        const responseMessage = { type: 'bot', text:<pre>{responseText}</pre>};
        newChats.push(responseMessage);
  
        setChats(newChats);
        setInputQuery('');
      }
      setLoading(false);
    }, 18000); 
  };
  

  function handleeditbutton() {
    const shouldNavigate = window.confirm(
      'Are you sure you want to proceed to the next page? Otherwise template will be lost.'
    );
    if (shouldNavigate) {
      window.location.href = `/editpage`;
    }
  }

  return (
    <div className='main'>
      <div className='chats'>
        {chats.map((chat, index) => (
          <div key={index} className={`chat1 ${chat.type === 'bot' ? 'bot' : ''}`}>
            <img className='chatImg' src={chat.type === 'user' ? userIcon : gptImgLogo} alt='' />
             {loading && (
              <Lottie animationData = {lottie1}/>
            )}
            {!loading && (
              <>
                <p className='txt'>{chat.text}</p>
                {chat.type === 'bot' && (
                  <div className='edit__div'>
                    <img className='chatImg1' src={keep} alt='' />
                    <button onClick={handleeditbutton} className='edit'>
                      Edit
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
      <div className='chatFooter'>
        <div className='inp'>
          <input placeholder='Type Your Query..' value={inputquery} onChange={handleQueryChange} />
          <button onClick={handleQuerySubmit} className='send'>
            <img src={sendBtn} alt='send' />
          </button>
        </div>
        <p style={{ color: 'black' }}>LeagalEase A Revolution in legal industries.</p>
      </div>
    </div>
  );
}

export default QueryMain;
