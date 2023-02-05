import logo from './logo.svg';
import './App.css';
import Home from './Pages/HomePage/Home';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/login' element={<Login></Login>}/>
      </Routes>
    </div>
  );
}

export default App;
