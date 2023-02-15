import logo from './logo.svg';
import './App.css';
import Home from './Pages/HomePage/Home';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import AllProduct from './Pages/AllProduct/AllProduct';
import Product from './Pages/Product/Product';
import NewProduct from './Pages/NewProduct/NewProduct';
import DashBoard from './Pages/DashBoard/DashBoard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/all_products' element={<AllProduct></AllProduct>}/>
        <Route path='/product/:id' element={<Product></Product>}/>
        <Route path='/dashboard' element={<DashBoard></DashBoard>}/>
        <Route path='/login' element={<Login></Login>}/>
        <Route path='/new_product' element={<NewProduct></NewProduct>}/>
      </Routes>
    </div>
  );
}

export default App;
