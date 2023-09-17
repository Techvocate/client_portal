// import React, { useState } from 'react';
// import './QueryPage.css'; // You'll need to create this CSS file for styling

// const QueryPage = () => {
//   const [query, setQuery] = useState('');
//   const [query1, setQuery1] = useState('');
//   const [querygiven, setQueryGiven] = useState(true);
// //   const [results, setResults] = useState();

//   const handleInputChange = (event) => {
//     setQuery(event.target.value);
//     setQuery1(event.target.value);
//     // Reset height to auto when input changes
//     event.target.style.height = "auto";
//     // Set the height to scrollHeight to allow scrolling
//     event.target.style.height = `${Math.min(event.target.scrollHeight, 5 * 20)}px`;
//   }

//   const handleSearch = () => {
//     setQueryGiven(false);
//     setQuery('');
    
//   }

//   return (
//     <div className="gpt-query-page">
//       <div className="main-panel">
//       {!querygiven && <div className="query-result">
//           <h3>Query:</h3>
//           <p>{query1}</p>
//         </div>}
//         <div className="results">
//         {!querygiven &&
//           (
//             <div>
//             <h3>Results:</h3>
//           <p>AGREEMENT FOR SALE OF PROPERTY

// This Agreement for  to sale of Property (the "Agreement") is made and entered into on this ___ day of ___________, 2023 (the "Effective Date"), by and between:

// Seller:
// Name: Shreesh Shukla
// Address: [Seller's Address]

// Buyer:
// Name: Ashwin Tyagi
// Address: [Buyer's Address]

// Hereinafter collectively referred to as the "Parties".

// WHEREAS, the seller is the lawful owner of a residential property located at [Property Address] (the "Property");

// WHEREAS, the seller wishes to sell the Property to the Buyer and the Buyer wishes desirous to purchase the said Property from the Seller;

// NOW, THEREFORE, in consideration of the mutual covenants and promises contained herein, the Parties agree as follows:

// 1. SALE OF PROPERTY
// 1.1 The seller agrees to sell the Property to the Buyer, and the Buyer agrees to purchase the said property from the seller on the terms and conditions set forth in this Agreement.

// 2. PURCHASE PRICE
// 2.1 The purchase price for the Property shall be INR 50,00,000 (Fifty Lacs only) (the "Purchase Price"). The Buyer shall pay the Purchase Price to the Seller as follows:
//    a) INR _______ (_________) as an initial deposit upon signing this Agreement;
//    b) The remaining balance of INR _______ (_________) shall be paid by the Buyer to the Seller on or before the execution/registration of sale deed (here the Sale deed known as “Legal Document”).

// 3. PROPERTY DESCRIPTION
// 3.1 The Property is described as follows:
//    a) Type: Residential
//    b) Address: [Property Address]
//   c) Dimension of property : 
//    d) Boundaries of the Property : means on all the side of the situation where ever there is property other’s and road or street or any other things

// 4. REPRESENTATIONS AND WARRANTIES
// 4.1 The Seller represents and warrants that:
//    a) The Seller is the lawful owner of the said Property and has the legal right to sell  transfer his legal rights in the said Property;
//    b) The Property is free from any liens, encumbrances, or mortgage or charges etc.;
//    c) The Seller has disclosed all material information regarding the Property to the Buyer.

// 5. CLOSING
// 5.1 The closing of the sale shall take place on or before the ___ day of ___________, 2023 (the "Closing Date"). The Parties shall mutually agree upon the exact date, time, and location of the closing.

// 6. GOVERNING LAW
// 6.1 This Agreement to sale shall be governed by and construed in accordance with the laws enforce in Indian origin.

// 7. ENTIRE AGREEMENT
// 7.1 This Agreement constitutes the entire agreement between the Parties with respect to the sale of the Property and supersedes all prior oral or written agreements, understandings, or representations.

// IN WITNESS WHEREOF, the Parties have executed this Agreement as of the Effective Date.

// Seller:
// _________________________
// Shreesh Shukla

// Buyer:
// _________________________
// Ashwin Tyagi

// Date: _____________________
// </p>
// </div>)}
//         </div>
//         {querygiven ? (
//         <div className="suggestions">
//             <div className="card">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar etiam non quam lacus suspendisse. Cursus euismod quis viverra nibh cras. Tincidunt eget nullam non nisi est sit amet facilisis. Scelerisque felis imperdiet proin fermentum leo vel.</div>
//             <div className="card">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar etiam non quam lacus suspendisse. Cursus euismod quis viverra nibh cras. Tincidunt eget nullam non nisi est sit amet facilisis. Scelerisque felis imperdiet proin fermentum leo vel.</div>
//             <div className="card">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar etiam non quam lacus suspendisse. Cursus euismod quis viverra nibh cras. Tincidunt eget nullam non nisi est sit amet facilisis. Scelerisque felis imperdiet proin fermentum leo vel.</div>
//             <div className="card">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar etiam non quam lacus suspendisse. Cursus euismod quis viverra nibh cras. Tincidunt eget nullam non nisi est sit amet facilisis. Scelerisque felis imperdiet proin fermentum leo vel.</div>
//         </div>) : null}
//       </div>
//       <div className="search-bar">
//       <textarea
//             value={query}
//             onChange={handleInputChange}
//             placeholder="Enter your query"
//             rows={1} 
//             className="chat-input" // Add this class
//           />
//         <button onClick={handleSearch}>Search</button>
//       </div>
//     </div>
//   );
// }

// export default QueryPage;


import React, { useState } from 'react';
import './QueryPage.css';

const QueryPage = () => {
  const [queryResults, setQueryResults] = useState([]);
  const [currentQuery, setCurrentQuery] = useState('');
  const [query, setQuery] = useState(true);

  // const handleInputChange = (event) => {
  //   setCurrentQuery(event.target.value);
  // }
    const handleInputChange = (event) => {
    setCurrentQuery(event.target.value);
    // setQuery(event.target.value);
    // setQuery1(event.target.value);
    // Reset height to auto when input changes
    event.target.style.height = "auto";
    // Set the height to scrollHeight to allow scrolling
    event.target.style.height = `${Math.min(event.target.scrollHeight, 5 * 20)}px`;
  }

  const handleSearch = () => {
    if(currentQuery!=''){
      setQuery(false);
    }
    if (currentQuery.trim() !== '') {
      // Perform the search and get the result (you can replace this with your actual search logic)
      const searchResult = `Result for: ${currentQuery}`;

      // Store both the query and its result as an object
      const queryResult = {
        query: currentQuery,
        result: searchResult,
      };

      // Add the queryResult object to the queryResults state
      setQueryResults([...queryResults, queryResult]);

      // Clear the current query
      setCurrentQuery('');
    }
  }


  return (
    <div className="gpt-query-page">
      <div className="main-panel">
      {query ? (
        <div className="suggestions">
            <div className="card">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar etiam non quam lacus suspendisse. Cursus euismod quis viverra nibh cras. Tincidunt eget nullam non nisi est sit amet facilisis. Scelerisque felis imperdiet proin fermentum leo vel.</div>
            <div className="card">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar etiam non quam lacus suspendisse. Cursus euismod quis viverra nibh cras. Tincidunt eget nullam non nisi est sit amet facilisis. Scelerisque felis imperdiet proin fermentum leo vel.</div>
            <div className="card">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar etiam non quam lacus suspendisse. Cursus euismod quis viverra nibh cras. Tincidunt eget nullam non nisi est sit amet facilisis. Scelerisque felis imperdiet proin fermentum leo vel.</div>
            <div className="card">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar etiam non quam lacus suspendisse. Cursus euismod quis viverra nibh cras. Tincidunt eget nullam non nisi est sit amet facilisis. Scelerisque felis imperdiet proin fermentum leo vel.</div>
        </div>) : null}
        {queryResults.map((queryResult, index) => (
          <div key={index} className="query-result">
            <h3>Query {index + 1}:</h3>
            <p>{queryResult.query}</p>
            <h3>Result {index + 1}:</h3>
            <p>{queryResult.result}</p>
          </div>
        ))}
        <div className="results">
          {/* Display your results here */}
        </div>
      </div>
      <div className="search-bar">
        <textarea
          value={currentQuery}
          onChange={handleInputChange}
          placeholder="Enter your query"
          rows={1}
          className="chat-input"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}

export default QueryPage;
