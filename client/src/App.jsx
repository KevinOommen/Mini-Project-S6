import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Order from '../components/order' 
import Pending from '../components/KitchenComponents/Pending'
import History from '../components/KitchenComponents/History'
import Payment from '../components/PaymentComponents/Payment'
import Menu from '../components/Menu'
import Scanner from '../components/Scanner'
import Popup from '../components/Popup' 


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/menu" element={<Menu/>} />
        <Route path='/scanner' element={<Scanner/>} />
        <Route path='/order' element={<Order/>} />
        <Route path='/payment' element={<Payment/>} />
        <Route path='/popup' element={<Popup/>} />
        <Route path='/kitchen/pending' element={<Pending/>} />
        <Route path='/kitchen/history' element={<History/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;