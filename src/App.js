import './App.css';
import Home from './Pages/HomePage/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import AllProduct from './Pages/AllProduct/AllProduct';
import Product from './Pages/Product/Product';
import DashBoard from './Pages/DashBoard/DashBoard';
import ManageProducts from './Pages/DashBoard/ManageProducts/ManageProducts';
import NewProduct from './Pages/DashBoard/NewProduct/NewProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyCart from './Pages/MyCart/MyCart';
import EditProduct from './Pages/DashBoard/ManageProducts/EditProduct';
import NotFound from './Pages/NotFound/NotFound';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/all_products' element={<AllProduct></AllProduct>}/>
        <Route path='/product/:id' element={<Product></Product>}/>
        <Route path='/dashboard' element={<DashBoard></DashBoard>}>
          <Route path='manage_products' element={<ManageProducts></ManageProducts>}>
          </Route>
          <Route path='new_product' element={<NewProduct></NewProduct>}/>
          <Route path='edit_product/:id' element={<EditProduct></EditProduct>}/> 
        </Route>
        <Route path='/login' element={<Login></Login>}/>
        <Route path='/my-cart' element={<MyCart></MyCart>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
