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


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<UserProfile></UserProfile>}></Route>
          <Route path='myreview' element={<MyReview></MyReview>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
