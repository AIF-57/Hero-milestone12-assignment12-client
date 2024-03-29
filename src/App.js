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
import EditProduct from './Pages/DashBoard/ManageProducts/EditProduct';
import NotFound from './Pages/NotFound/NotFound';
import RequireAuth from './Pages/Shared/RequireAuth';
import MyCart from './Pages/DashBoard/MyCart/MyCart';
import MyAccount from './Pages/DashBoard/MyAccount/MyAccount';
import PurchasePage from './Pages/PurchasePage/PurchasePage';
import Summary from './Pages/DashBoard/Summary/Summary';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import Orders from './Pages/DashBoard/Orders/Orders';



function App() {
  const [user, loading] = useAuthState(auth);


  const adminEmail = "ariyanislam666@gmail.com";
  const userEmail = user?.email;

  let admin;
  if(userEmail === adminEmail){
    admin = true;
  }else{
    admin = false;
  };
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/all_products' element={<AllProduct></AllProduct>}/>
        <Route path='/product/:id' element={<Product></Product>}/>
        <Route path='/purchase/:id' element={<PurchasePage></PurchasePage>}/>

        <Route path='/dashboard' element={<RequireAuth><DashBoard></DashBoard></RequireAuth>}>
        {
          admin &&           <Route index element={<Summary></Summary>}/>
        }
        {
          admin &&           <Route path='admin_summary' element={<Summary></Summary>}/>
        }

        {
          !admin && <Route index element={<RequireAuth><Orders/></RequireAuth>}/>
        }
        {
          !admin && <Route path='user_orders' element={<RequireAuth><Orders/></RequireAuth>}/>
        }

          <Route path='my-cart' element={<RequireAuth><MyCart></MyCart></RequireAuth>}/>
          <Route path='manage_products' element={<ManageProducts></ManageProducts>}/>
          <Route path='new_product' element={<NewProduct></NewProduct>}/>
          <Route path='edit_product/:id' element={<EditProduct></EditProduct>}/> 
          <Route path='my_account' element={<MyAccount></MyAccount>}/>
        </Route>

        <Route path='/login' element={<Login></Login>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
