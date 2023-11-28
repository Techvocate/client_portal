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
  console.log(inputquery)

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
    console.log(response)
    const data = await response.json();
    const responseText = data;
    console.log(data.response.response)
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
      {/* <div className='form'> */}
      <button onClick={handleforms} className='formsButton'>Forms</button>
      {formsactive && <Forms updateFormValues={updateFormValues}/>}
      {/* </div> */}
        {chats.map((chat, index) => (
          <div key={index} className={`chat1 ${chat.type === 'bot' ? 'bot' : ''}`}>
            <img className='chatImg' src={chat.type === 'user' ? userIcon : gptImgLogo} alt='' />
             {/* {loading && (
              <Lottie animationData = {lottie1}/>
            )} */}
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
        <p style={{ color: 'white', marginRight:'85px' }}>LeagalEase A Revolution in legal industries.</p>
      </div>
    </div>
  );
}

export default QueryMain;
