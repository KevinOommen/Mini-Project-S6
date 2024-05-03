import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import Userauth from '../components/Userauth'
import Checkout from '../components/Checkout'
import Pending from '../components/KitchenComponents/Pending'
import History from '../components/KitchenComponents/History'
import Payment from '../components/Payment/Payment'
import AdminAuth from '../components/Adminauth'
import  Menu  from '../components/Menu'
import Scanner from '../components/Scanner'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth' element={<Userauth/>}></Route>
        <Route path='/menu/checkout' element={<Checkout/>}></Route>
        <Route path='/menu' element={<Menu/>}></Route>
        <Route path='/scanner' element={<Scanner/>}></Route>
        <Route path='/order' element={<order/>}></Route>
        <Route path='/payment' element={<Payment/>}></Route>
        <Route path='/adminauth' element={<AdminAuth/>}></Route>

          <Route path='/kitchen/pending' element={<Pending/>}></Route>
          <Route path='/kitchen/history' element={<History/>}></Route>
          {/* <Route path='/kitchen/report' element={<Report/>}></Route> */}
      </Routes>
    </BrowserRouter>
  )
}
export default App;