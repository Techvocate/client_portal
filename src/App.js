// import logo from './logo.svg';
import './App.css';
// import Navbar from './components/Navbar';
import Homepage from './components/HomePage';
// import UseCases from './components/UseCases';
import QueryPage from './components/QueryPage';
import EditPage from './components/EditPage/EditPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/querypage" element={<QueryPage/>}/>
          <Route path="/editpage" element={<EditPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
