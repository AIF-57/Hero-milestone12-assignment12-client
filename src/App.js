import logo from './logo.svg';
import './App.css';
import Home from './Pages/HomePage/Home';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
      </Routes>
    </div>
  );
}

export default App;
