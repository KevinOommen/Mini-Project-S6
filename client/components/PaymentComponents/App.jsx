import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import checkoutHandler from "./Payment";

import PaymentSuccess from "./PaymentSuccess";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<checkoutHandler />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        
      </Routes>
    </Router>
  );
}

export default App;
