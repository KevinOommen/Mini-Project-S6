import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Userauth from '../components/Userauth'
import GetOTP from '../components/GetOTP'
import Order from '../components/order' 
import Pending from '../components/KitchenComponents/Pending'
import History from '../components/KitchenComponents/History'
import Payment from '../components/Payment/Payment'
import AdminAuth from '../components/Adminauth'
import Menu from '../components/Menu'
import Scanner from '../components/Scanner'
import Popup from '../components/popup' 


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
        <Route path='/popup' element={<Popup/>} />
        <Route path='/kitchen/pending' element={<Pending/>} />
        <Route path='/kitchen/history' element={<History/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;