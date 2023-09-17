import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/HomePage';
import UseCases from './components/UseCases';
import QueryPage from './components/QueryPage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homepage/>
      <QueryPage/>
    </div>
  );
}

export default App;
