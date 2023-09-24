// import logo from './logo.svg';
import './App.css';
// import Navbar from './components/Navbar';
import Homepage from './components/HomePage';
// import UseCases from './components/UseCases';
import QueryPage from './components/QueryPage';
import EditPage from './components/EditPage/EditPage';
import Signup from './components/register/Signup';
import LoginPage from './components/register/Login';
import LegalAdvice from './components/LegalAdvice';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserContextProvider } from './UserContext';

function App() {
  return (
    <div className="App">
      <Router>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/querypage" element={<QueryPage/>}/>
          <Route path="/editpage" element={<EditPage/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path='/legaladvice' element={<LegalAdvice/>}/>
        </Routes>
        </UserContextProvider>
      </Router>
    </div>
  );
}

export default App;
