import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './component/authentication/Login';
import Signup from './component/authentication/Signup';
import Home from './component/Home/Home';
import Dashboard from './component/Dashboard/Dashboard';
import UserProfile from './component/Dashboard/UserProfile';
import RequireAuth from './component/shared/RequireAuth';
import MyReview from './component/Dashboard/MyReview';
import MyOrders from './component/Dashboard/MyOrders';
import Allusers from './component/Dashboard/Allusers';
import RequireAdmin from './component/shared/RequireAdmin';
import Addproduct from './component/Dashboard/Addproduct';
import MangeProduct from './component/Dashboard/MangeProduct';
import ProductDetails from './component/Home/ProductDetails';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<UserProfile></UserProfile>}></Route>
          <Route path='myreview' element={<MyReview></MyReview>}></Route>
          <Route path='myorders' element={<MyOrders></MyOrders>}></Route>
          <Route path='allusers' element={<RequireAdmin><Allusers></Allusers></RequireAdmin>}></Route>
          <Route path='addproduct' element={<RequireAdmin><Addproduct></Addproduct></RequireAdmin>}></Route>
          <Route path='allproduct' element={<RequireAdmin><MangeProduct></MangeProduct></RequireAdmin>}></Route>
        </Route>
        <Route path='/productdetails/:id' element={<RequireAuth><ProductDetails></ProductDetails></RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
