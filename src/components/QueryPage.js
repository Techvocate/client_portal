import React, { useState } from 'react';
import './QueryPage.css';
import SideBar from './SideBar';
import QueryMain from './QueryMain';

// const QueryPage = () => {
//   const [queryResults, setQueryResults] = useState([]);
//   const [currentQuery, setCurrentQuery] = useState('');
//   const [query, setQuery] = useState(true);

//   // const handleInputChange = (event) => {
//   //   setCurrentQuery(event.target.value);
//   // }
//     const handleInputChange = (event) => {
//     setCurrentQuery(event.target.value);
//     // setQuery(event.target.value);
//     // setQuery1(event.target.value);
//     // Reset height to auto when input changes
//     event.target.style.height = "auto";
//     // Set the height to scrollHeight to allow scrolling
//     event.target.style.height = `${Math.min(event.target.scrollHeight, 5 * 20)}px`;
//   }

//   const handleSearch = () => {
//     if(currentQuery!=''){
//       setQuery(false);
//     }
//     if (currentQuery.trim() !== '') {
//       // Perform the search and get the result (you can replace this with your actual search logic)
//       const searchResult = `Result for: ${currentQuery}`;

//       // Store both the query and its result as an object
//       const queryResult = {
//         query: currentQuery,
//         result: searchResult,
//       };

//       // Add the queryResult object to the queryResults state
//       setQueryResults([...queryResults, queryResult]);

//       // Clear the current query
//       setCurrentQuery('');
//     }
//   }


//   return (
//     <div className="gpt-query-page">
//       <div className="main-panel">
//       {query ? (
//         <div className="suggestions">
//             <div className="card">Lorem ipsum dolor sit amet</div>
//             <div className="card">Lorem ipsum dolor sit amet</div>
//             <div className="card">Lorem ipsum dolor sit amet</div>
//             <div className="card">Lorem ipsum dolor sit amet</div>
//         </div>) : null}
//         {queryResults.map((queryResult, index) => (
//           <div key={index} className="query-result">
//             <h3>Query {index + 1}:</h3>
//             <p>{queryResult.query}</p>
//             <h3>Result {index + 1}:</h3>
//             <p>{queryResult.result}</p>
//           </div>
//         ))}
//         <div className="results">
//           {/* Display your results here */}
//         </div>
//       </div>
//       <div className="search-bar">
//         <textarea
//           value={currentQuery}
//           onChange={handleInputChange}
//           placeholder="Enter your query"
//           rows={1}
//           className="chat-input"
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>
//     </div>
//   );
// }

// export default QueryPage;

function QueryPage() {
  return (
    <div className='querypage'>
      <SideBar/>
      <QueryMain/>
    </div>
  )
}

export default QueryPage