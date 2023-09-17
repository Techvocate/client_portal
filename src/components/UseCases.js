import React from 'react';
import { useState } from 'react';
import './UseCases.css'

const UseCases = () => {
    const [querygiven, setQueryGiven] = useState(true);
    const [query, setQuery] = useState('');
    const array = ["Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.","Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.","Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.","Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."];
    
    function handlequerygiven(){
        setQueryGiven(false);
    }

    function handleInputChange(event) {
        setQuery(event.target.value);
    }

    return (
        <div className='outer-div'>
            <div className='inner-container'> 
                <div className='inner-container1'>
                    <div className='inner-container1-1'>
                        {!querygiven ?  <p className='inner-container1-1p'>{query}</p> : null}
                    </div>
                    {!querygiven ? <div className='inner-container1-2'>
                        AGREEMENT FOR SALE OF PROPERTY

                        This Agreement for  to sale of Property (the "Agreement") is made and entered into on this ___ day of ___________, 2023 (the "Effective Date"), by and between:

                        Seller:
                        Name: Shreesh Shukla
                        Address: [Seller's Address]

                        Buyer:
                        Name: Ashwin Tyagi
                        Address: [Buyer's Address]

                        Hereinafter collectively referred to as the "Parties".

                        WHEREAS, the seller is the lawful owner of a residential property located at [Property Address] (the "Property");

                        WHEREAS, the seller wishes to sell the Property to the Buyer and the Buyer wishes desirous to purchase the said Property from the Seller;

                        NOW, THEREFORE, in consideration of the mutual covenants and promises contained herein, the Parties agree as follows:

                        1. SALE OF PROPERTY
                        1.1 The seller agrees to sell the Property to the Buyer, and the Buyer agrees to purchase the said property from the seller on the terms and conditions set forth in this Agreement.

                        2. PURCHASE PRICE
                        2.1 The purchase price for the Property shall be INR 50,00,000 (Fifty Lacs only) (the "Purchase Price"). The Buyer shall pay the Purchase Price to the Seller as follows:
                        a) INR _______ (_________) as an initial deposit upon signing this Agreement;
                        b) The remaining balance of INR _______ (_________) shall be paid by the Buyer to the Seller on or before the execution/registration of sale deed (here the Sale deed known as “Legal Document”).

                        3. PROPERTY DESCRIPTION
                        3.1 The Property is described as follows:
                        a) Type: Residential
                        b) Address: [Property Address]
                        c) Dimension of property : 
                        d) Boundaries of the Property : means on all the side of the situation where ever there is property other’s and road or street or any other things

                        4. REPRESENTATIONS AND WARRANTIES
                        4.1 The Seller represents and warrants that:
                        a) The Seller is the lawful owner of the said Property and has the legal right to sell  transfer his legal rights in the said Property;
                        b) The Property is free from any liens, encumbrances, or mortgage or charges etc.;
                        c) The Seller has disclosed all material information regarding the Property to the Buyer.

                        5. CLOSING
                        5.1 The closing of the sale shall take place on or before the ___ day of ___________, 2023 (the "Closing Date"). The Parties shall mutually agree upon the exact date, time, and location of the closing.

                        6. GOVERNING LAW
                        6.1 This Agreement to sale shall be governed by and construed in accordance with the laws enforce in Indian origin.

                        7. ENTIRE AGREEMENT
                        7.1 This Agreement constitutes the entire agreement between the Parties with respect to the sale of the Property and supersedes all prior oral or written agreements, understandings, or representations.

                        IN WITNESS WHEREOF, the Parties have executed this Agreement as of the Effective Date.

                        Seller:
                        _________________________
                        Shreesh Shukla

                        Buyer:
                        _________________________
                        Ashwin Tyagi

                        Date: _____________________

                    </div>: null}
                </div>
                {querygiven ? <div className='inner-container2'> 
                    {array.map((item, index) => <div className='card' key={index}>{item}</div>)} 
                </div>: null}
            </div>
            <div className='search-bar'>
                <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    placeholder="Search Query" 
                />
                <button className='button1' onClick={handlequerygiven}>search</button>
            </div>
        </div>
    )
}

export default UseCases
