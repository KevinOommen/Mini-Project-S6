import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import Userauth from '../components/Userauth'
import GetOTP from '../components/GetOTP'
import Order from '../components/order' 
import Payment from '../components/Payment'
import AdminAuth from '../components/Adminauth'
import Admindashboard from '../components/Admindashboard'
import Kitchen from '../components/Kitchen'
import  Menu  from '../components/Menu'
import Scanner from '../components/Scanner'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth' element={<Userauth/>}></Route>
        <Route path="/getotp" element={<GetOTP/>}></Route>
        <Route path="/menu" element={<Menu/>}></Route>

        <Route path='/menu' element={<Menu/>}></Route>
        <Route path='/scanner' element={<Scanner/>}></Route>
        <Route path='/order' element={<Order/>}></Route>
        <Route path='/payment' element={<Payment/>}></Route>
        <Route path='/adminauth' element={<AdminAuth/>}></Route>

        
        <Route path='/dashboard/:id' element={<Admindashboard/>}>
          <Route path="/dashboard/:id/kitchen" element={<Kitchen/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;