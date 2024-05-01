import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Userauth from '../components/Userauth'
import GetOTP from '../components/GetOTP'
import Order from '../components/order' 
import Payment from '../components/Payment/Payment'
import AdminAuth from '../components/Adminauth'
import Admindashboard from '../components/Admindashboard'
import Kitchen from '../components/Kitchen'
import Menu from '../components/Menu'
import Scanner from '../components/Scanner'
import BottomNav from '../components/MenuComponents/BottomNav';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth' element={<Userauth/>} />
        <Route path="/getotp" element={<GetOTP/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path='/scanner' element={<Scanner/>} />
        <Route path='/order' element={<Order/>} />
        <Route path='/payment' element={<Payment/>} />
        <Route path='/adminauth' element={<AdminAuth/>} />
        <Route path='/dashboard/:id' element={<Admindashboard/>}>
          <Route path="/dashboard/:id/kitchen" element={<Kitchen/>} />
        </Route>
      </Routes>
      <BottomNav />
    </BrowserRouter>
  );
}

export default App;