import React, { useState } from 'react';
import './Edit_Query.css';
import sendBtn from '../../assets/send.svg';
import userIcon from '../../assets/user.jpg';
import gptImgLogo from '../../assets/integrity.png';
import keep from '../../assets/keep.png';

function Edit_Query() {
  const [isEditing, setIsEditing] = useState(true);
  const [text, setText] = useState(
    `This Agreement ("Agreement") is made and entered into as of [Date], (the "Effective Date") by and between:

    M/s Elite Electronics, a company incorporated under the laws of [Country], with its principal place of business at [Address] (hereinafter referred to as "Elite Electronics"), 
    
    AND
    
    Bright Bulb Pvt. Ltd., a company incorporated under the laws of [Country], with its principal place of business at [Address] (hereinafter referred to as "Bright Bulb").
    
    WHEREAS, Elite Electronics is engaged in the business of selling electronic products, and Bright Bulb is engaged in the business of manufacturing and supplying bulbs;
    
    WHEREAS, Elite Electronics requires a regular supply of bulbs to meet its customer demands;
    
    WHEREAS, Bright Bulb has the capacity and capability to supply bulbs as per the requirements of Elite Electronics;
    
    NOW, THEREFORE, in consideration of the mutual covenants and promises contained herein, the parties agree as follows:
    
    1. SUPPLY OF BULBS
    
    1.1 Bright Bulb agrees to supply bulbs to Elite Electronics as per their demand and requirements.
    
    1.2 Elite Electronics agrees to purchase a minimum of 500 bulbs per month from Bright Bulb. The quantity of bulbs may be increased as per the requirements of Elite Electronics, subject to the mutual agreement of both parties.
    
    1.3 The cost of each bulb supplied by Bright Bulb to Elite Electronics shall be Rs. 280 (Indian Rupees Two Hundred and Eighty only).
    
    2. TERM
    
    2.1 This Agreement shall commence on the Effective Date and shall remain in effect for a period of 15 months (the "Term").
    
    2.2 Either party may terminate this Agreement by providing a written notice of termination to the other party at least 30 days prior to the desired termination date.
    
    3. PAYMENT TERMS
    
    3.1 Elite Electronics shall make payment to Bright Bulb for the supplied bulbs within 30 days from the date of receipt of the invoice.
    
    3.2 All payments shall be made in Indian Rupees through a bank transfer to the bank account specified by Bright Bulb.
    
    4. QUALITY CONTROL
    
    4.1 Bright Bulb shall ensure that all bulbs supplied to Elite Electronics meet the required quality standards and specifications.
    
    4.2 Elite Electronics shall have the right to inspect the bulbs upon delivery and reject any bulbs that do not meet the required quality standards.
    
    5. CONFIDENTIALITY
    
    5.1 Both parties agree to keep all confidential information received from the other party confidential and not disclose it to any third party without the prior written consent of the disclosing party.
    
    6. INTELLECTUAL PROPERTY
    
    6.1 Each party shall retain ownership of its respective intellectual property rights.
    
    7. GOVERNING LAW AND JURISDICTION
    
    7.1 This Agreement shall be governed by and construed in accordance with the laws of [Country].
    
    7.2 Any disputes arising out of or in connection with this Agreement shall be subject to the exclusive jurisdiction of the courts of [Country].  
    
    IN WITNESS WHEREOF, the parties hereto have executed this Agreement as of the Effective Date.
    
    _________________________
    M/s Elite Electronics
    
    _________________________
    Bright Bulb Pvt. Ltd.`
  );

  const handleEditClick = () => {
    setIsEditing(true);
  }

  const handleSaveClick = () => {
    setIsEditing(false);
  }

  const handleChange = (e) => {
    setText(e.target.value);
  }

  return (
    <div className='main1'>
      <div className='chats1'>
        <div className='chat11 bot1'>
          <img className="chatImg12" src={gptImgLogo} alt=''/>
          {isEditing ? (
            <textarea
              className='txt1'
              value={text}
              onChange={handleChange}
              autoFocus
            /> 
          ) : (
            <div className='structuredText'>
              {text.split('\n').map((sentence, index) => (
                <p key={index}>{sentence}</p>
              ))}
            </div>
          )}
          {isEditing ? (
            <button className='edit_save' onClick={handleSaveClick}>Save</button>
          ) : 
          <button className='edit_save' onClick={handleEditClick}>Edit</button>}
        </div>
      </div>
      <button className='downloadBtn'>Download</button>
    </div>
  )
}

export default Edit_Query;
