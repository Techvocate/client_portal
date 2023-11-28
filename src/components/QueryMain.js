import React, { useEffect, useState } from 'react';
import './QueryMain.css';
import sendBtn from '../assets/send.svg';
import userIcon from '../assets/user.jpg';
import gptImgLogo from '../assets/integrity2.png';
import keep from '../assets/keep.png';
import Lottie from 'lottie-react';
import lottie1 from '../assets/lottie1.json';
import Response from './register/Response';
import Forms from './Forms';

function QueryMain() {
  const [inputquery, setInputQuery] = useState('');
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formsactive,setformsactive] = useState(true);
  const [formData, setFormData] = useState({
    // agreementType: '',
    landlordName: '',
    tenantName: '',
    // partner1Name: '',
    // partner2Name: '',
    // sellerName: '',
    // buyerName: '',
    rentDetails: {
      amount: '',
      duration: '',
      location: '',
    },
    // businessDetails: {
    //   partners: '',
    //   initialDuration: '',
    //   paymentPolicy: '',
    // },
    // agreementSale: {
    //     propertyDetails: '',
    //     propertyDimensions: '',
    //     propertyAmount: '',
    //     legalIssues: '',
    //   },
    // SaleAgreement: {
    //     propertyDetails: '',
    //     propertyDimensions: '',
    //     propertyAmount: '',
    //     legalIssues: '',
    //   },
  });

  const handleQueryChange = (e) => {
    setInputQuery(`Draft a lease agreement between ${formData.landlordName} and ${formData.tenantName}, for a residential property located in ${formData.rentDetails.location}, for minimum duration of ${formData.rentDetails.duration} at the rent of ${formData.rentDetails.amount}.`)
  };

  const handleQuerySubmit = async () => { 
    setLoading(true);
    const response = await fetch('http://192.168.232.253:5000/input', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: inputquery
    })
    });
    const responseData = await response.json();
    const responseText = JSON.stringify(responseData.response.source_nodes[0].node.text);
    
    const newChats = [...chats, { type: 'user', text: inputquery }];
    const responseMessage = { type: 'bot', text:<pre>{responseText}</pre>};
    newChats.push(responseMessage);
  
    setChats(newChats);
    setInputQuery('');
    setLoading(false);
  };
  
  

  function handleeditbutton() {
    const shouldNavigate = window.confirm(
      'Are you sure you want to proceed to the next page? Otherwise template will be lost.'
    );
    if (shouldNavigate) {
      window.location.href = `/editpage`;
    }
  }

  function handleforms(){
    setformsactive(!formsactive)
  }
  const updateFormValues = (newFormValues) => {
    setFormData(newFormValues);
  };

  return (
    <div className='main'>
      <div className='chats'>
      <button onClick={handleforms}>Forms</button>
      {formsactive && <Forms updateFormValues={updateFormValues}/>}
        {chats.map((chat, index) => (
          <div key={index} className={`chat1 ${chat.type === 'bot' ? 'bot' : ''}`}>
            <img className='chatImg' src={chat.type === 'user' ? userIcon : gptImgLogo} alt='' />
             {/* {loading && (
              <Lottie animationData = {lottie1}/>
            )} */}
            {!loading && (
              <>
                {typeof chat.text === 'string' ? (
                <p className='txt'>{chat.text}</p>
              ) : (
                <div className='response-container'>
                  {/* Split the chat text and render with line breaks */}
                  {chat.text.props.children.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </div>
              )}
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
        <p style={{ color: 'white' }}>LeagalEase A Revolution in legal industries.</p>
      </div>
    </div>
  );
}

export default QueryMain;
